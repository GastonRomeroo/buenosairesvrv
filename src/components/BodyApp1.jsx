import React from 'react'
import './BodyApp.css'

function BodyApp1() {
  return (
    <>
    <section className='section-inverter'>
    <picture>
      <img className='img' src="..\..\img\home\tecnologia-inverter.jpg" alt='papa' />
    </picture>
    <div className='div-inverter'>
        <h5> Un nuevo concepto </h5>
        <h2>Una nueva generación <br /> de equipos de aire</h2>
        <p>Somos expetos en aire acondicionado. Por eso, desarrollamos <br /> una opción ieal para cada tipo de aplicación</p>
        <div className='ul-list'>
          <div className='ul-list-a'>
            <ul>
              <li>
                {/* <a href='#'> */}
                  Mini y Multi Split
                {/* </a> */}
              </li>
              <li>
                {/* <a href='#'> */}
                  Cassette
                {/* </a> */}
              </li>
              <li>
                {/* <a href='#'> */}
                  Baja silueta
                {/* </a> */}
              </li>
              <li>
                {/* <a href='#'> */}
                  Rooftop
                {/* </a> */}
              </li>
              <li>
                {/* <a href='#'> */}
                  Enfriadoras (chillers)
                {/* </a> */}
              </li>
              <li>
                {/* <a href='#'> */}
                  Manejadoras de aire
                {/* </a> */}
              </li>
            </ul>
          </div>
          <div className='ul-list-b'>
            <ul>
                <li>
                  {/* <a href='#'> */}
                    Sistemas VRV.
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href='#'> */}
                    Piso / Techo
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href='#'> */}
                    Calefactor
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href='#'> */}
                    Sistemas de control
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href='#'> */}
                    Sistemas aplicados
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href='#'> */}
                    Fan coils
                  {/* </a> */}
                </li>
            </ul>
          </div>
        </div>
    </div>
    </section>
    <section className='section-vrv'>
      <div className='div-vrv'>
        <h5> Menor consumo garantizado </h5>
        <h2>Sistemas VRV <br />para el hogar y la oficina</h2>
        <p>Somos creadores de la tecnología VRV, la más eficiente del mercado. <br />Contamos con un modelo ideal para cada aplicación:</p>
        <div className='ul-list'>
          <ul className='ul-list-a'>
            <li>
              <h3>VRVH</h3>
              <p>Heat pump: Sistema frío <br /> calor por bomba (8-60HP).</p>
            </li>
            <li>
              <h3>VRVQ</h3>
              <p>Heat pump: Sistema frío <br /> calor por bomba para <br /> reemplazo de R-22 / R-407 (8-48HP).</p>
            </li>
            <li>
              <h3>VRV Invisible</h3>
              <p>Heat pump: Sistema frío <br /> calor. Unidad exterior <br /> dividida para instalación <br /> interior (8HP).</p>
            </li>
            <li>
              <h3>Hidrobox</h3>
              <p>Heat pump: Sistema frío <br /> calor. Unidad exterior <br /> dividida para instalación <br /> interior (8HP).</p>
            </li>
          </ul>
          <ul className='ul-list-b'>
            <li>
              <h3>VRVR</h3>
              <p>Heat recovery: Sistema <br /> frío calor simultaneo (8- <br /> 60HP).</p>
            </li>
            <li>
              <h3>VRV Small</h3>
              <p>Heat pump: Sistema frío <br /> calor por bomba (4-9HP).</p>
            </li>
            <li>
              <h3>Altherma</h3>
              <p>Heat pump: Sistema frío <br /> calor por bomba (8-60hp).</p>
            </li>
            <li>
              <h3>Unidad de tratamiento</h3>
              <p>Manejadoras de aire DX <br /> (UTA) (8-54HP).</p>
            </li>
          </ul>
        </div>
      </div>
    <picture>
      <img className='img' src="..\..\img\home\sistemasVRV.jpg" alt='papa' />
    </picture>
    </section>
    <section className='section-eficiencia'>
    <picture>
      <img className='img' src="..\..\img\home\maxima-eficiencia.jpg" alt='papa' />
    </picture>
    <div className='div-eficiencia'>
        <h5> Departamento de servicios </h5>
        <h2>Estamos para ayudarte</h2>
        <p>Brindamos servicios de soporte técnico a personal <br />especializado y usuarios finales</p>
        <div className='ul-list'>
          <div className='ul-list-a'>
            <ul>
              <li>
                <h5>
                  Servicios generales
                </h5>
                <h5>
                  Repuestos
                </h5>
                <h5>
                  Garantía oficial
                </h5>
              </li>
            </ul>
          </div>
          <div className='ul-list-b'>
            <ul>
                <li>
                  <h5>
                    Servicios de mantenimiento.
                  </h5>
                </li>
                  <h5>
                    Errores decódigo.
                  </h5>
                <li>
                  <h5>
                    Preguntas frecuentes.
                  </h5>
                </li>
            </ul>
          </div>
        </div>
    </div>
    </section>
    </>
  )}
  
export default BodyApp1