var express = require('express');
var router = express.Router();
var usuariosModel=require('../../models/usuariosModel')
/* GEt login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
      layout:'admin/layout'
  });
});
//logout
router.get('/logout',function(req,res,next){
  req.session.destroy();//destruir las variables de sesion(id y usuario)
  res.render('admin/login',{
    layout:'admin/layout'
  });
})
//logeo
router.post('/',async(req,res,next)=>{
  try{//variables donde se almaceba la informacion
    var usuario=req.body.usuario;//del usuario
    var password=req.body.password;//y la contraseña
    //console.log(req.body)

    var data = await 
    usuariosModel.getUserByUsernameAndPassword(usuario,password);//dos parametros
     
    if(data != undefined){
      req.session.id_usuario=data.id;
      req.session.nombre=data.usuario;//columna de la bd
      res.redirect('/admin/novedades');//redirecciona
    }else{
      res.render('admin/login',{
        layout:'admin/layout',
        error:true
      });
    }
  }catch(error){
    console.log(error);
  }
})

module.exports = router;
