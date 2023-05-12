conn = new Mongo();
db = conn.getDB("myappdb");

db.usuarios.insert(
  [
   {nombre: 'Carlos', apellido: 'Cabrera', email: 'ccabrera@abc.com', estado:'A', created_at: new Date('01/23/2020')}
 ]);
