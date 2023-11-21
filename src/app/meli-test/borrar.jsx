import React, { useState } from 'react';
import styles from '../styles/ar.module.css';
import phone from '../assets/phoneAr.png';
import mask from '../assets/mask.png';
import chair from '../assets/silla.png';
import coffe from '../assets/cafetera.png';
import bomb from '../assets/bomba.png';
import background from '../assets/backgroundAr.png';
import ExperienceCard from '../components/ExperienceCard.jsx';
import Separator from '../components/Separator';
import CirclesBg from '../components/CirclesBg';
import HiddenObjects from '../assets/hiddenObjects.png'
// import PhoneAr from '../components/PhoneAr.jsx';
import { useIsMobile } from '../components/helpers.jsx';
import { useViewportScroll } from 'framer-motion';

function AR() {
  const isMobile = useIsMobile();
  
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    }
  };

  const [mousePosition, setMousePosition] = useState({ x: 10, y: -10 });
  const { scrollYProgress } = useViewportScroll();

  const [maskPosition, setMaskPosition] = useState({ x: 10, y: -10 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  

    const offsetX = 0;
    const offsetY = 50;
    
    const initialPhonePosition = {
      x: window.innerWidth / 8,
      y: window.innerHeight / 4,
    };
  
    const maskPositionX = e.clientX - initialPhonePosition.x;
    const maskPositionY = e.clientY - initialPhonePosition.y;
  
    setMaskPosition({ x: maskPositionX, y: maskPositionY});
    
  };

  return (
    <div id="arSection" className={`${styles.container}
styles.desktopContainer}`} onMouseMove={handleMouseMove}>

          <img src={chair} className={styles.hiddenObject1} alt="AR Chair" style={{ clipPath: 'url(#mask)' }}/>
          {/* <img className={styles.hiddenObjects} src={HiddenObjects} alt="hiddenObjects" style={{ clipPath: 'url(#mask)' }} /> */}
          <div className={styles.row1}>
            <img src={background} className={styles.arBackground} alt="AR Background" />
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Realidad Aumentada</h1>
              <h3 className={styles.text}>
                Conectamos a los usuarios con representaciones <br />digitales en 3D de tus productos en un entorno real,<br /> para así crear nuevas posibilidades en aplicaciones <br />industriales, el mercado inmobiliario, el turismo, la <br /> medicina y más.
              </h3>
              <button className={styles.contactButton} onClick={() => scrollToSection('contactSection')}>Contáctanos</button>
              <img src={coffe} className={styles.hiddenObject3} alt="AR Background" style={{ clipPath: 'url(#mask)' }}  />
            </div>
          </div>
          {/* <PhoneAr></PhoneAr> */}
          <div className={styles.phoneContainer}>
                        <img
                          className={styles.phone}
                          src={phone}
                          alt=""
                          style={{
                            position: 'absolute',
                            top: `${mousePosition.y}px`,
                            left: `${mousePosition.x}px`,
                            transform: 'translate(0%, -50%)', 
                          }}
                        />
                        {/* <defs>
                         <clipPath id="mask">
                         <img
                          className={styles.phone}
                          src={mask}
                          alt=""
                          style={{
                            position: 'absolute',
                            top: `${mousePosition.y}px`,
                            left: `${mousePosition.x}px`,
                            transform: 'translate(0%, -50%)', 
                          }}
                        />
                        </clipPath>
                        </defs> */}
              <svg >
              <defs>
                <clipPath id="mask">
                  <rect 
                   x={`calc(${maskPosition.x + offsetX}px)`}
                   y={`calc(${maskPosition.y + offsetY}px)`}
                  style={{
                    width: '200px',
                    borderRadius: '20px',
                    height: '400px',
                    position: 'absolute',
                    top: `calc(-10% + var(--mask-ar-offset-y))`,
                    left: `calc(50% + var(--mask-ar-offset-x))`,
                    transform: 'translate(0%, -50%)',
                  }}/>
                </clipPath>
              </defs>
            </svg>
          </div>

           <div className={styles.row2}>
            <div className={styles.col}>
              <Separator type='lines' />
              <ExperienceCard
                title="Industria AR"
                text="Potencia la eficiencia de tus procesos y tu oferta de productos mediante visualizaciones interactivas en 3D de objetos y sus partes en el mundo real."
                shape="cross"
              />
            </div>
            <div className={styles.col}>
              <Separator type='points' />
              <ExperienceCard
                title="Real State AR"
                text="Observa e interactúa con maquetas y tipologías en 3D. Haz que tus clientes experimenten el futuro con detalles personalizados."
                shape="circle"
              />
              <br /><br />
              <Separator type='pointsFull' />
            </div>
            <div className={styles.col}>
              <ExperienceCard
                title="Comercial AR"
                text="Potencia tus ventas y cautiva a tus clientes con visualizaciones personalizadas en 3D en el mundo real, desde electrodomésticos hasta maquinaria."
                shape="cross"
              />
              <br /><br />
              <Separator type='lines' />
            </div>
          </div> 
          <img src={bomb} className={styles.hiddenObject2} alt="AR Background" style={{ clipPath: 'url(#mask)' }}  />
        </>
      )}
    </div>
  );
}

export default AR;