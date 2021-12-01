import React from 'react'
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img className="frente" src="/img/home/Foto0162.jpg" alt="" />
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos al sitio para amantes de los Schnauzer</h2>
                <p>El schnauzer —pronunciado en alemán [ˈʃnaʊtsɐ]— es una raza canina que se 
                    originó en Alemania durante los siglos XV y XVI.​Su nombre ​deriva del
                     alemán Schnauze'hocico', relacionado con Schnauzbart ​y Schnurrbart​'
                     bigote', dada su muy característica barba que comienza en la parte 
                     superior del hocico en esta raza. Los schnauzer fueron criados para
                      perseguir y cazar.

                </p>
                <p>Amigables y cariñosos, los schnauzer se integran bien dentro de la vida
                     familiar y se llevarán bien con los niños y otros perros, siempre y 
                     cuando estén correctamente socializados y entrenados. 
                     Son protectores, enérgicos y alertan a los miembros de la familia de
                      cualquier peligro potencial. El schnauzer siempre está alerta, 
                      haciendo un excelente perro guardián, aunque su naturaleza vigilante 
                      puede llevarlo a ladrar persistentemente.Para evitar molestar a los 
                      vecinos y personas alrededor, los dueños del perro deberán hacer todos
                       los esfuerzos para frenar sus ladridos excesivos a través de un buen
                        entrenamiento.​La raza presenta una inteligencia superior a la media
                         debido a su naturaleza independiente y puede ser un reto para las 
                         personas inexpertas o desconocedoras de sus necesidades, por lo que se
                          recomienda empezar el entrenamiento y la socialización del perro desde
                           edad temprana, proporcionándole también abundante ejercicio diario.

                </p>
                
            </div>
            <div className="testimonios right">
                <h2>Recomendaciones</h2>
                <div className="testimonio">
                    <span className="cita">Visitar la galeria de imagenes de Tomy</span>
                    <span className="autor">Horacio Damian Brunaccio</span>

                </div>

            </div>

        </div>
    </main>
    )
}
        
export default HomePage;
