//import Container from "./components/Container";
//import Paragraph from "./components/Paragraph";
import ContainerHeader from "./components/ContainerHeader";
import ContainerImage from "./components/ContainerImage";
import ContainerVide from "./components/ContainerVide";
import './App.css';

function App() {
  return (
    <>
      <ContainerHeader
        img="/images/image-header.jpg"
        alt="Header"
      />

      <div className="align">

        <ContainerVide
          title="Texte"
          content="Bla Bla Bla"
        />
        <ContainerImage
          img="/images/image-transform.jpg"
          alt="Oeuf"
        />

        <ContainerImage
          img="/images/image-stand-out.jpg"
          alt="Verre"
        />
        <ContainerVide
          title="Texte"
          content="Blou Blou Blou"
        />

        <ContainerImage
          img="/images/image-graphic-design.jpg"
          alt="Cerise"
        />

        <ContainerImage
          img="/images/image-photography.jpg"
          alt="Orange"
        />

      </div>


      <div className="testimonials">

        <h1>CLIENT TESTIMONIALS</h1><br></br>

        <div className="testimonial-container">

          <div className="testimonial">
            <img src="/images/image-emily.jpg" alt="Emily" />
            <p>
              Texte
            </p>
            <h4><b>Emily R.</b></h4>
            <span>Marketing Director</span>
          </div>

          <div className="testimonial">
            <img src="/images/image-thomas.jpg" alt="Thomas" />
            <p>
              Texte 2
            </p>
            <h4><b>Thomas S.</b></h4>
            <span>Chief Operating Officer</span>
          </div>

          <div className="testimonial">
            <img src="/images/image-jennie.jpg" alt="Jennie" />
            <p>
              Texte 3
            </p>
            <h4><b>Jennie F.</b></h4>
            <span>Business Owner</span>
          </div>

        </div>
      </div>

      <div className="gallery">
        <ContainerImage
          img="/images/image-gallery-milkbottles.jpg"
          alt="Lait"
        />
        <ContainerImage
          img="/images/image-gallery-orange.jpg"
          alt="Orange"
        />
        <ContainerImage
          img="/images/image-gallery-cone.jpg"
          alt="Cornet de glace"
        />
        <ContainerImage
          img="/images/image-gallery-sugarcubes.jpg"
          alt="sucre"
        />
      </div>

      <footer className="footer">
        <h2>Sunnyside</h2>

        <div className="footer-links">
          <p>About</p>
          <p>Services</p>
          <p>Projets</p>
        </div>
      </footer>

    </>
  )
}

export default App;