import React from 'react'
import '../../src/styles/components/pages/NosotrosPage.css';
const NosotrosPage = () => {
    return (
        <section className="holder">
        <div className="historia">
            <p>Los schnauzers son conocidos por sus distintivas barbas y cejas largas y espesas.
                 Por lo general, se les afeita la parte posterior, mientras que los pelos de las 
                 piernas se mantienen largos y algo rizados. Algunos schnauzer necesitan que se les
                  quite el pelo muerto de forma manual. Es tradicional que tengan las colas cortas
                   y las orejas cortadas para dar una apariencia de alerta. Sin embargo, en varios 
                   países esta práctica ha sido prohibida por considerarse sin utilidad zootécnica.

            </p>
            <p>Las variedades miniatura y estándar se adaptan bien a la vida en casa, a condición
                 de que reciban una o dos caminatas diarias. La variedad gigante es demasiado 
                 grande e hiperactiva para vivir en un apartamento, por lo que se recomienda un
                  espacio más grande. Respecto a las relaciones con otros perros, es importante 
                  una buena socialización cuando son cachorros, ya que suelen ser territoriales.

            </p>
        </div>

        <div className="staff">
            <h2>Variedades</h2>

            <div className="variedades">

                <div className="tamaño">
                    <img src="/img/Tamaños/mini.jpg"  alt=""/>
                    <img src="/img/Tamaños/mini2.jpg"  alt=""/>
                    <img src="/img/Tamaños/mediano.jpg" alt=""/>
<h4>Miniatura o mini</h4>

<p>El Schnauzer miniatura (en alemán: Zwergschnauzer) es la versión pequeña
     de la raza canina de origen alemana Schnauzer, surgido en Alemania en
      la segunda mitad del siglo XIX. Esta raza es, probablemente, 
      resultado de la cruza de un Schnauzer estándar con alguna de las
       razas más pequeñas, tal como los caniches, los pinscher miniatura 
       o los affenpinscher. Esta raza es la variedad más pequeña del 
       schnauzer.</p>
                </div>
            </div>
        </div>

        <div className="tamaño">
            <img src="/img/Tamaños/mediano2.jpg"  alt=""/>
            <img src="/img/Tamaños/mediano3.jpg"  alt=""/>
            <img src="/img/Tamaños/mediano4.jpg"  alt=""/>
<h4>Mediano o estandar</h4>

<p>El Schnauzer estándar o Schnauzer mediano es la versión mediana de la 
    raza canina de origen alemana Schnauzer. 
    Siendo la primera en existir de las tres variedades de schnauzer, y
     a pesar de su pelaje y aspecto en general, no se relaciona con los
      terriers ingleses. Esta raza es robusta de complexión cuadrada y
       tamaño mediano.</p>
        </div>


<div className="tamaño">
    <img src="/img/Tamaños/gigante.jpg"  alt=""/>
    <img src="/img/Tamaños/gigante2.jpg" alt=""/>
    <img src="/img/Tamaños/gigante3.jpg" alt=""/>
<h4>Gigante o Grande</h4>

<p>El Schnauzer gigante —o en alemán Riesenschnauzer— es una raza de perro 
    de trabajo que se desarrolló en el siglo XVII en Alemania.</p>
</div>


</section>
   
    )
}


  

export default NosotrosPage
