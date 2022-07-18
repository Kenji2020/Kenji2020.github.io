import React, {Fragment} from 'react'
import { Proyecto } from '../Components/proyectos/Proyecto'
import imagenSaludMental from '../img/saludMental.jpg'
import toDoList from '../img/toDoList.jpg'
import Breaking_Bad from '../img/Breaking_Bad.jpg'
import ecommerce from '../img/ecommerce.jpg'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Screens.css'
import MediaQuery from 'react-responsive';
export const Proyectos = () => {

  return (
    <div>
    <Fragment>
                <MediaQuery minDeviceWidth={1224}>
    <Col className='d-flex'>
    <Card style={{ width: '18rem' }} className="m-3" >
      <Card.Img variant="top" src={imagenSaludMental} />
      <Card.Body>
        <Card.Title>Proyecto salud mental</Card.Title>
        <Proyecto name = "Más información" Title = "Este proyecto da a reflejar mi capacidad con React" body="Este proyecto consistió en una aplicación móvil que su objetivo principal era ayudar a la gente permitiéndoles el desahogo a través de publicaciones o de lectura de artículos que podían subir cuentas especializadas las cuales estaban en una sección de la base de datos distinta siendo éstas cuentas de psicólogos. Esta aplicación fue hecha en React Native y con Firebase" imagencita = {imagenSaludMental} url="https://github.com/Kenji2020/App_Clean"/>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  className="m-3">
      <Card.Img variant="top" src={toDoList} />
      <Card.Body>
        <Card.Title>To do List</Card.Title>
        <Proyecto name = "Más información" Title = "Este proyecto da a reflejar mi capacidad con React (a pesar de ser un proyecto bastante simple)" body="Un simple proyecto de to do list hecho con firebase" imagencita = {imagenSaludMental} url="https://github.com/Kenji2020/ToDoList"/>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  className="m-3">
      <Card.Img variant="top" src={Breaking_Bad} />
      <Card.Body>
        <Card.Title>Frases randoms de Breaking Bad</Card.Title>
        <Proyecto name = "Más información" Title = "Este proyecto mide la capacidad de manejar una api con React y CSS." body="Este proyecto es una aplicación web la cual muestra en pantalla una frase aleatoria de Breaking Bad y su autor" imagencita = {Breaking_Bad} url="https://github.com/Kenji2020/breakingbad"/>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}  className="m-3">
      <Card.Img variant="top" src={ecommerce} />
      <Card.Body>
        <Card.Title>ecommerce</Card.Title>
        <Proyecto name = "Más información" Title = "Este proyecto da a reflejar mis capacidades de React y CSS, además del trabajo en equipo, ya que fue un proyecto en conjunto con un amigo" body="Este proyecto fue un ecommerce hecho con React y firebase que consistió en una aplicación web para la venta de productos, es un proyecto de nivel trainee-junior, ya que es bastante simple a primera vista, pero el código es algo más complejo de lo que parece." imagencita = {imagenSaludMental} url="https://github.com/Kenji2020/ecommerce"/>
      </Card.Body>
    </Card>
    </Col>
    </MediaQuery>
    </Fragment>
    <Fragment>
    <MediaQuery maxDeviceWidth={1224}>
    <div className="row">
                <div className="column">
                    <div className="card">
                        <h3 className="React">Proyecto salud mental</h3>
                        <p>
                            Este proyecto consistió
                            en una aplicación móvil que su objetivo principal era ayudar a la gente
                            permitiéndoles el desahogo a través de publicaciones o de lectura de artículos que
                            podían subir cuentas especializadas las cuales estaban en una sección de la base de datos
                            distinta siendo éstas cuentas de psicólogos.
                            Esta aplicación fue hecha en React Native y con Firebase
                        </p>
                        <a className='square' href="https://github.com/Kenji2020/App_Clean">Haz click aquí para ir al
                            link del repositorio</a>
                        <p>Este proyecto da a reflejar mi capacidad con React Native</p>

                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3 className="React">To do list</h3>
                        <p>Un simple proyecto de to do list hecho con firebase</p>
                        <a className='square' href="https://github.com/Kenji2020/ToDoList">Haz click aquí para ir al
                            link del repositorio</a>
                        <p>Este proyecto da a reflejar mi capacidad con React (a pesar de ser un proyecto bastante simple)</p>

                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3 className="React">Ecommerce</h3>
                        <p>Este proyecto fue un ecommerce hecho con React y firebase que consistió en una aplicación web para la venta de
                            productos, es un proyecto de nivel trainee-junior, ya que es bastante simple a primera vista, pero el código es algo más complejo de lo que parece.
                        </p>
                        <a className='square' href="https://github.com/Kenji2020/ecommerce">Haz click aquí para ir al
                            link del repositorio</a>
                        <p>
                            Este proyecto da a reflejar mis capacidades de React y CSS, además del trabajo en equipo, ya que fue
                            un proyecto en conjunto con un amigo
                        </p>

                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3 className="React">Frases randoms de breaking bad</h3>
                        <p>
                            Este proyecto es una aplicación web la cual muestra en pantalla una frase aleatoria de Breaking Bad y su autor
                        </p>
                        <a className='square' href="https://github.com/Kenji2020/breakingbad">Haz click aquí para ir al
                            link del repositorio</a>
                        <p>
                            Este proyecto mide la capacidad de manejar una api con React y CSS.
                        </p>
                    </div>
                </div>
            </div>
    </MediaQuery>
    </Fragment>
    </div>
  )
}
