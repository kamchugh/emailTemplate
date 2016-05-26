var mysql = require('../models/mysql.js');

module.exports.index = function(req, res){
    mysql.getConnection(function(err, con){
      con.query("Select * from sections", function(err, rows){
          if(err) throw err;
          res.render('index', { title : 'Express Todo App', todos: rows });
      });
    });
};

module.exports.products = function(req, res){
    //res.render("I hit the product route");
    mysql.getConnection(function(err, con){
      con.query("insert into sections (productName, productDescription, productImage) values ('" + req.body.productName + " ',' " + req.body.productDescription + " ',' " + req.body.productImage +  " '); ");
    });
    res.redirect('/');
};

module.exports.edit = function(req, res){

    console.log("I hit the edit route");
    console.log("product name: " + req.body.productName);
    console.log("product description: " + req.body.productDescription);
    console.log("product image: " + req.body.productImage);
    console.log("product id: " + req.params.id);
    console.log("update sections SET productName = '" + req.body.productName + "' , productDescription = ' " + req.body.productDescription 
      + " ' , productImage = ' " + req.body.productImage + " '  WHERE id = " + req.params.id + ";");
    mysql.getConnection(function(err, con){
      con.query("update sections SET productName = '" + req.body.productName + "' , productDescription = '" + req.body.productDescription + " ' , productImage = ' " + req.body.productImage + " '  WHERE id = " + req.params.id + " ;" );
    });
    res.redirect('/');
};

module.exports.delete = function(req, res){

    console.log("I hit the delete route");
    mysql.getConnection(function(err, con){
      con.query("delete from sections where id = " + req.params.id + ";" );
    });
    res.sendStatus(202);
};