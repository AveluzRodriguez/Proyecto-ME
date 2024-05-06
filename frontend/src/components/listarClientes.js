import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const endpoint = "https://restauranteaveluz.apured.com/backend/public/api";

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    RecuperarClientes();
  });
  const RecuperarClientes = async () => {
    const response = await axios.get(`${endpoint}/clientes`);
    setClientes(response.data);
  };


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
      <center>
      <div className="contenedor2">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Correo</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Nombres</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente)=>(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.Correo}</td>
                    <td>{cliente.APaterno}</td>
                    <td>{cliente.AMaterno}</td>
                    <td>{cliente.Nombres}</td>
                    <td>{cliente.Mensaje}</td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br />
      </center>
    </>
  );
};
ex