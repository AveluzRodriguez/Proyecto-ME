
import React from "react";
import { Carousel } from "react-bootstrap";

const Nosotros=()=>{
    return(
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
            <div className="contenedor-presentacion2">
              <h1 className="Titulo1"> Nuestro Menú</h1>              
              <p>
              Libertad Céspedes es una mujer que fundó este restaurante con el único
              afán de brindar los sabores únicos de la localidad, tratando de mantener
              las especies que se usan en los condimientos de la región y le dan
              ése sabor inigualable a las comidas tradicionales.
              Nuestro restaurante ofrece una amplia variedad de platos:  
              </p>       
            </div>
            <div className="contenedor">
              
              <div className="card">
                <h5 className="Titulo5">CHICHARRÓN DE CHANCHO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/CHICHARRON-DE-CHANCHOM.jpg"
                  alt="CHICHARRON-DE-CHANCHOM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 25.00
                </p>
              </div>

              <div className="card">
                <h5 className="Titulo5">CUY</h5>                
                <img
                  className="d-block w-100"
                  src="./img/cuyM.jpg"
                  alt="cuyM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 30.00
                </p>
              </div>
              
              <div className="card">
                <h5 className="Titulo5">PAPA RELLENA</h5>                
                <img
                  className="d-block w-100"
                  src="./img/papa-rellenaM.jpg"
                  alt="papa-rellenaM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 12.00
                </p>
              </div>

              <div className="card">
                <h5 className="Titulo5">PASTEL DE PAPA</h5>                
                <img
                  className="d-block w-100"
                  src="./img/pastel-papaM.jpg"
                  alt="pastel-papaM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 15.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">PEPIAN DE CUY</h5>                
                <img
                  className="d-block w-100"
                  src="./img/pepian-de-cuyM.jpg"
                  alt="pepian-de-cuyM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 20.00
                </p>
              </div>              
              <div className="card">
                <h5 className="Titulo5">ROCOTO RELLENO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/rocoto rellenoM.jpg"
                  alt="rocoto rellenoM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 15.00
                </p>
              </div>

              <div className="card">
                <h5 className="Titulo5">TALLARIN VERDE</h5>                
                <img
                  className="d-block w-100"
                  src="./img/tallarinVerdeM.jpg"
                  alt="tallarinVerdeM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">TRUCHA FRITA</h5>                
                <img
                  className="d-block w-100"
                  src="./img/truchaFrita.jpg"
                  alt="truchaFrita"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">ARVEJA UCHU</h5>                
                <img
                  className="d-block w-100"
                  src="./img/arvejaM.jpg"
                  alt="arvejaM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>


              <div className="card">
                <h5 className="Titulo5"> CALDO BLANCO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/caldo-blancoM.jpg"
                  alt="caldo-blancoM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">CHAIRO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/chairoM.jpg"
                  alt="chairoM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">PUCHERO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/pucheroM.jpg"
                  alt="pucheroM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 15.00
                </p>
              </div>

              <div className="card">
                <h5 className="Titulo5">SOPA DE QUINUA</h5>                
                <img
                  className="d-block w-100"
                  src="./img/sopa-quinuaM.jpg"
                  alt="sopa-quinuaM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>

              <div className="card">
                <h5 className="Titulo5">SOPA DE TRIGO</h5>                
                <img
                  className="d-block w-100"
                  src="./img/sopa-trigoM.jpg"
                  alt="sopa-trigoM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 10.00
                </p>
              </div>
              <div className="card">
                <h5 className="Titulo5">MENESTRON</h5>                
                <img
                  className="d-block w-100"
                  src="./img/menestronM.png"
                  alt="menestronM"
                  width={"100%"}
                />
                <br></br>
                <p className="TextoParrafo">
                  S/. 15.00
                </p>
              </div>

              



            </div>          
          </center>
        </div>
      </body>
        </>
      
    )
}
export default Nosotros