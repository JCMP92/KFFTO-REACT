import './MenuStore.css';
import menuPDF from '../MenuPDF/Food & Drink Menu.pdf';

function MenuStore() {
  return (
    <div id="menu-section">
      <div className="menu-content">
        <div className="menu-text">
          <div className="mnu-txt">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              ipsam ipsa deleniti quas repellendus soluta. Magni nulla harum
              veritatis sint?
            </p>
          </div>
          <div className="mnu-txt">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              ipsam ipsa deleniti quas repellendus soluta. Magni nulla harum
              veritatis sint?
            </p>
          </div>
          <div className="mnu-txt">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              ipsam ipsa deleniti quas repellendus soluta. Magni nulla harum
              veritatis sint?
            </p>
          </div>
        </div>
        <div className="menu-shop-links">
          <div className="menu-button">
            <h1>¿Qué vas a pedir?</h1>
            <a href={menuPDF} target="_blank" rel="noreferrer">
              <button className="anchor-btn">MENÚ</button>
            </a>
          </div>
          <div className="shop-content">
            <h1>Visita nuestra tienda online</h1>
            <a
              href="https://www.mercadoshops.com.mx/?utm_content=131995570731_554713702731&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOV1xcJV9fuuxRr0ET9ir4iloLDFQplwHkvoyoCICBy5DHFMmP3a9ysaAlmoEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              <button className="anchor-btn">KFFTO</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuStore;