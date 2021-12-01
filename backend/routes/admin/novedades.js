var express = require('express');
var router = express.Router();
var usuariosModel=require('../../models/usuariosModel')
var novedadesModel=require('../../models/NovedadesModel')
var util=require('util');
var cloudinary=require('cloudinary').v2;
const uploader=util.promisify(cloudinary.uploader.upload);



/* GEt login page. */
router.get('/', async function(req, res, next) {
var novedades=await novedadesModel.getNovedades();

  res.render('admin/novedades',{
      layout:'admin/layout',
      usuario:req.session.nombre,
      novedades
  });
});
router.get('/agregar',(req,res,next)=>{
  res.render('admin/agregar',{
    layout:'admin/layout'
  })
})

router.post('/agregar',async(req,res,next)=>{
 try{
      var img_id='';
      if(req.files && Object.keys(req.files).length > 0){
        imagen=req.files.imagen;
        img_id=(await uploader(imagen.tempFilePath)).public_id;
      }


    if(req.body.titulo != "" && req.body.subtitulo != "" && //si hay titulo ,sub y contenido
    req.body.cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });//envia el titulo ,sub y contenido
      res.redirect('/admin/novedades')
    }else{//sino 
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,//ERROR
        message:'Todos los campos son requeridos'
      })
    }
  }catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout',
      error:true,
      message:'no se cargo la noticia'
    })
  }
})
//para eliminar
router.get('/eliminar/:id',async(req,res,next)=>{
  var id=req.params.id;
  await novedadesModel.deleteNovedadesById(id);//bussca la funcion deletenovedades en el modelo
  res.redirect('/admin/novedades');
})
//para editar y me seleccione una sola novedad
router.get('/modificar/:id',async(req,res,next)=>{
  var id=req.params.id;
  console.log(req.params.id);

  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar',{
    layout:'admin/layout',
    novedad
  })
})
//para editar
router.post('/modificar',async(req,res,next)=>{
  try{
    var obj={
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo
    }
    console.log(obj)
    await novedadesModel.modificarNovedadById(obj,req.body.id);
    res.redirect('/admin/novedades');
  }catch(error){
    console.log(error)
    res.render('admin/modificar',{
      layout:'admin/layout',
      error:true,message:'NO se modifico la novedad'
    })
  }
})


module.exports = router;