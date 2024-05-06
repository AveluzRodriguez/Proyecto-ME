import React from "react";
import { Carousel } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Inicio = () => {
  return (
    <>
      <head></head>
      <body>
        <div className="presentation">
          <center>
            <Carousel data-bs-theme="white">
              <Carousel.Item>
                <img
                  className="d-block w-60"
                  src="./img/chicharron.jpg"
                  alt="First slide"
                  width={"100%"}
                />
                <Carousel.Caption>
                  <h1>Chicharrón de Cerdo</h1>
                  <p>
                    Infaltable en los desayunos, como aperitivo, plato de fondo
                    y más.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-60"
                  src="./img/chiriuchu.jpg"
                  alt="Second slide"
                  width={"100%"}
                />
                <Carousel.Caption>
                  <h1>Chiriuchu cusqueño</h1>
                  <p>
                    El Chiri Uchu es el plato bandera de la ciudad del Cusco.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-60"
                  src="./img/cuy-chactado.jpg"
                  alt="Third slide"
                  width={"100%"}
                />
                <Carousel.Caption>
                  <h1>Cuy Chactado</h1>
                  <p>
                    El cuy chactado es un plato tradicional de la región andina
                    de Sudamérica.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-60"
                  src="./img/lawa.jpg"
                  alt="Third slide"
                  width={"100%"}
                />
                <Carousel.Caption>
                  <h1>Lawa de maiz</h1>
                  <p>
                    Es una sopa tradicional andina, hecha a base de choclos
                    maduros, granos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </center>

          <br></br>
          <div className="rectangulo-vertical"> </div>
          <center>
            <div className="contenedor-presentacion">
              <div>
                <h1 className="Titulo1"> El Rinconcito de la Abuela</h1>
                <h2> Comer y Beber</h2>
                <p>
                  Los insumos, costumbres y cultura de cada lugar puestas en
                  valor con la mejor técnica culinaria y el trato responsable a
                  productos y productores locales. Esta, nuestra primera casa,
                  ubicada en la Plaza Regocijo, a una cuadra de la Plaza de
                  Armas de Cusco, rinde tributo e impulsa el valor de la
                  milenaria sabiduría gastronómica cusqueña.
                  <img
                          className="d-block w-60"
                          src="./img/chichita.jpg"
                          alt="chichita"
                          width={"100%"}
                        />
                </p>
              </div>
              <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5> COCINA CREATIVA DEL CHEF</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="card">
                        <p>
                          Selección de platos realizado por nuestro Jefe de
                          Cocina con opciones especiales.
                        </p>
                        <img
                          className="d-block w-100"
                          src="./img/soltero.jpg"
                          alt="Segunda Comida"
                          width={"100%"}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5> NUESTRA CARTA REGIONAL</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="card">
                        <p>
                          Productos de temporada que dan valor a la comida
                          regional cusqueña.
                        </p>
                        <img
                          className="d-block w-100"
                          src="./img/truchaFrita.jpg"
                          alt="Primera Comida"
                          width={"100%"}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h5>EXPERIENCIA DEGUSTACIÓN CON EL CHEF - MENÚ</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="card">
                        <p>
                          Selección de lo mejor de nuestra carta regular
                          presentado en ocho porciones.
                        </p>
                        <img
                          className="d-block w-100"
                          src="./img/ceviche.jpg"
                          alt="Tercera Comida"
                          width={"100%"}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="contenedor"></div>
          </center>
        </div>
      </body>
    </>
  );
};
export default Inicio;
