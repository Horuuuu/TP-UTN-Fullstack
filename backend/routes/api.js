var express=require('express')
var router=express.Router();
var novedadesModel=require('./../models/NovedadesModel')
var nodemailer=require('nodemailer');

router.get('/novedades',async function(req,res,next){
    let novedades = await novedadesModel.getNovedades();
    res.json(novedades);
     
});
//Contacto e-mail
router.post('/contacto',async(req,res)=>{
    const mail={
        to:'h2.globo@gmail.com',
        subject:'Contacto web',
        html:`${req.body.nombre}se contacto a travez de la web y 
        quiere mas informacion a este correo:${req.body.email}<br>
        Ademas,hizo el siguiente comentario:${req.body.mensaje}
        <br>Su tel es:${req.body.telefono}`
    }
    const transport=nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)
    res.status(201).json({
        error:false,
        message:'Mensaje enviado'
    })
})


module.exports=router;