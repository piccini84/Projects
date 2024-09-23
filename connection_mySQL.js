var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin", // root
  password: "admin", // root
  database: "desenvolvimento"
});

// Funciona 1
con.connect(function(err) {

  if (err) throw err;
  con.query("SELECT * FROM usuario", function (err, result, fields) {
    if (err) throw err;
    // Mostra todos os registros e colunas
    console.log(result);
    // Apresenta o valor da coluna nm_usuario do segundo registro
    console.log(result[1].nm_usuario);
    // Apresenta o nome da segund coluna
    console.log(fields[1].name);

    console.log('\n');
    for (let i = 0; i < result.length; i++) {
      let obj = result[i];
      console.log('Usuário: ' + obj.nm_usuario);
      for (let x = 0; x < fields.length; x++) {
        console.log('Coluna: ' + fields[x].name);
      }
    }

  });
});


/* Funcion 2
con.query('SELECT * FROM usuario', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);

  const myJSON = JSON.stringify(rows);
  const myObj = JSON.parse(myJSON);

  let text = "";
  for (const x in myObj) {
    text += x + ", ";
  }

  console.log('\n');

  console.log(myJSON);

  console.log('\n');

  console.log(myObj);

  console.log(rows.nm_usuario);

});*/

