import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import swal from 'sweetalert';


const endpoint='https://restauranteaveluz.apured.com/backend/public/api/cliente'

const ValidarFormulario = {
    
    Correo: {
        required: 'Por favor debe ingresar su correo electrónico',
        isEmail: true,
    },
    APaterno: {
        required: 'Por favor ingrese  su Apellido Paterno.',
        min: {
            limit: 100,
            message: limit => `El límite es de ${limit} carácteres.`
        }
    },
    AMaterno: {
        required: 'Por favor ingrese Apellido Materno.',
        min: {
            limit: 100,
            message: limit => `El límite es de ${limit} carácteres.`
        }
    },
    Nombres: {
        required: 'Por favor ingrese su Nombre.',
        min: {
            limit: 100,
            message: limit => `El límite es de ${limit} carácteres.`
        }
    },
    Mensaje: {
        required: 'Por favor ingresa  su Mensaje.',
        min: {
            limit: 500,
            message: limit => `El límite es de ${limit} carácteres.`
        }
    }
}
const Contactanos=()=>{
    const[Correo,setCorreo]=useState('')
    const[APaterno,setAPaterno]=useState('')
    const[AMaterno,setAMaterno]=useState('')
    const[Nombres,setNombres]=useState('')
    const[Mensaje,setMensaje]=useState('')
    const navigate=useNavigate();

    const store= async(e)=> {
        e.preventDefault();
        await axios.post(endpoint,{Correo:Correo,APaterno:APaterno, AMaterno:AMaterno,Nombres:Nombres,Mensaje:Mensaje})
        navigate('/')
    }
    const mostrarAlerta=()=>{

      swal({
        title:"¡Registro exitoso!",
        text:"Este es un mensaje de confirmación de registro de cliente",
        icon:"success"   

      });
    }
  return (
    <>
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
                Infaltable en los desayunos, como aperitivo, plato de fondo y
                más.
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
              <p>El Chiri Uchu es el plato bandera de la ciudad del Cusco.</p>
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
                El cuy chactado es un plato tradicional de la región andina de
                Sudamérica.
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
                Es una sopa tradicional andina, hecha a base de choclos maduros,
                granos.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
      <div>
      <br></br>
          <div className="rectangulo-vertical"> </div>
        <center>
    
          <Card  border="dark" bg-dark text-white style={{ width: "30rem" }}>
            <Card.Header >Formulario</Card.Header>
            <Card.Body>
              <Card.Title>Registre sus datos</Card.Title>
              <Form onSubmit={store}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
              < input 
                    value={Correo} 
                    onChange={ (e)=> setCorreo(e.target.value)}
                    type="email" placeholder="name@example.com" className='form-control'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="APaterno">
                  
                  < input 
                    value={APaterno} 
                    onChange={ (e)=> setAPaterno(e.target.value)}
                    type="Text" placeholder="Apellido Paterno" className='form-control'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="AMaterno">
                < input 
                    value={AMaterno} 
                    onChange={ (e)=> setAMaterno(e.target.value)}
                    type="Text" placeholder="Apellido Materno" className='form-control'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Nombres">
                < input 
                    value={Nombres} 
                    onChange={ (e)=> setNombres(e.target.value)}
                    type="Text" placeholder="Nombres" className='form-control'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Mensaje">
                  <Form.Label>Escriba su mensaje</Form.Label>                  
                   <textarea onChange={ (e)=> setMensaje(e.target.value)} className='form-control' rows={5} placeholder="..." ></textarea>
                </Form.Group>
                <button onClick={()=>mostrarAlerta()} type='submit' className='btn btn-info'>Enviar</button>

              </Form>
            </Card.Body>
          </Card>
        </center>
      </div>
      <br />
    </>
  );
};