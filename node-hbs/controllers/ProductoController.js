var mongoose = require('mongoose');
const Producto = require("../models/Producto");

var productoController = {};

productoController.list = function(req, res){
    
    Producto.find({}).exec(function(err, producto){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/producto/index', {producto: producto,titulo:'INDEX'} );
        
    });
    
};
productoController.show = function(req, res){
    Producto.findOne({_id: req.params.id}).exec(function(err, producto){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/producto/show', {producto: producto} );
    });
    
};

productoController.create = function(req, res){
    res.render('../views/producto/create');
};

productoController.save = function(req, res){
    var producto = new Producto( req.body );
    
    producto.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a producto. :)");
        res.redirect("/producto/show/"+producto._id);
        //res.redirect("/usuarios");
    });
};

productoController.edit = function(req, res) {
  Producto.findOne({_id: req.params.id}).exec(function (err, producto) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/producto/edit", {producto: producto});
    
  });
};

productoController.update = function(req, res){
    Producto.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria,
        Estado: req.body.Estado
    }}, { new: true },
    function( err, producto){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/producto/edit', {producto: req.body} );
        }
        
        console.log( producto );
        res.redirect('/empleado/show/' + producto._id);
        
    });
};
productoController.delete = function(req, res){
    
    Producto.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("producto deleted!");
        res.redirect("/producto");
    });
    
};

module.exports = productoController;

