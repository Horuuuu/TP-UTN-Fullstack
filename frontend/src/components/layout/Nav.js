import React from 'react'
import{NavLink} from 'react-router-dom'
import '../../styles/components/layout/Nav.css';
const Nav = () => {
    return (
        <nav>
        <div className="holder">
        <ul>
            <li><NavLink activeclassname="active" exact to="/" > Home</NavLink></li>
            <li><NavLink activeclassname="active" exact to="/NosotrosPage">Variedades</NavLink></li>
            <li><NavLink activeclassname="active" exact to="/Colores">Colores</NavLink></li>
            <li><NavLink activeclassname="active" exact to="/Galeria">Galeria</NavLink></li>
            <li><NavLink activeclassname="active" exact to="/novedades">Novedades</NavLink></li>
            <li><NavLink activeclassname="active" exact to="/ContactoPage">Contacto</NavLink></li>
        </ul>
    </div>
    </nav>
    )
}

export default Nav
