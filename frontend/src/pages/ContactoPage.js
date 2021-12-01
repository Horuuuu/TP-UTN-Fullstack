import {useState} from 'react'
import axios from'axios';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm={
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }
    const[sending,setSending]=useState(false);
    const[msg,setMsg]=useState('');
    const[formData,setFormData]=useState(initialForm);

    const handleChange= e =>{
        const{name,value}= e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]:value
        }))
    }
    const handleSubmit= async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto rápido</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label >Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label >E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label >Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                <label >Comentario</label>
                <textarea  name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                
            </p>
<p className="acciones"><input type="submit" value="Enviar"/></p>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
            </form>
        </div>
<div className="columna right">
    <h2>Otras vias de contacto</h2>
    <p>Tambien se puede comunicar:</p>
    <ul>
        <li>Tel:</li>
        <li>Email:h2.globo@gmail.com</li>
        
        
        <li>Linkedin: <a target="_blank"rel="noreferrer" href="http://linkedin.com/in/horacio-damian-brunaccio">  Horacio-Damian-Brunaccio</a></li>
        <li>Github :  <a target="_blank"rel="noreferrer" href="http://github.com/Horuuuu">Horuuuu</a></li>
        
    </ul>
</div>
</main>
    )
}

export default ContactoPage
