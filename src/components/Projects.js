import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import greencircle from "../assets/img/greencircle.png";
import semantix from "../assets/img/semantix.png";
import unesco from "../assets/img/newunesco.png";
import backpack from "../assets/img/newback2.png";
import darty from "../assets/img/darty.png";
import java from '../assets/img/java.svg';
import c from '../assets/img/c.png';
import css from '../assets/img/css.png';
import html from '../assets/img/html.webp';
import js from '../assets/img/js.webp';
import php from '../assets/img/php.webp';
import python from '../assets/img/python.png';
import sql from '../assets/img/sql.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const projects = [
    {
      title: "Green Circle",
      description: "Développement web",
      imgUrl: greencircle,
      modalText: "Site web permettant aux entreprises du Val d'Europe de participer à l'économie circulaire. " + 
      "La plateforme comprend un système de mise à disposition des objets non utilisés ainsi que leur récupération, " + 
      "un système d'e-learning pour former les entreprises partenaires sur l'économie circulaire, " +
      "un système de gestion d'évenements ainsi qu'un forum de discussion pour les utilisateurs." +
      " Un chatbot a aussi été mis en place dans ce projet pour aider les utilisateurs à naviguer sur le site.",
      icons: [js, sql, python, html, css]
    },
    {
      title: "Semantix",
      description: "Développement d'application",
      imgUrl: semantix,
      modalText: "Le principe de ce jeu est simple. Nous avons 2 mots au départ tirés aléatoirement. Un score de similarité " + 
      "est alors calculé entre ces 2 mots. Le but est d'ajouter de plus en plus de mots proches de ces 2 mots pour réduire le score.",
      icons: [js, sql, java, html, css, c, php]
    },
    {
      title: "UNESCO",
      description: "Développement web",
      imgUrl: unesco,
      modalText: "Ce projet est un site web interactif pour l'UNESCO, promouvant la culture et le patrimoine de la ville de Tolède.",
      icons: [html, css]
    },
    {
      title: "Backpack Hero",
      description: "Développement d'application",
      imgUrl: backpack,
      modalText: "Le jeu se déroule dans un donjon et le but est d'arriver au dernière étage. " +
      "Dans chacun des étages se trouvent des ennemis, des guérisseurs et bien plus encore. " +
      "Nous avons développé un système de sac à dos qui peut contenir les différents objets. " +
      "Étant donné la grandeur du projet, il fallait optimiser au maximum le code pour que le jeu ne soit pas trop lent.",
      icons: [java]
    },
  ];

  const pro = [
    {
      title: "Site web Darty.com",
      description: "Développement web",
      imgUrl: darty,
      modalText: "Assistant développeur Java en alternance chez Fnac Darty. Développement et maintenance du back-end du site web Darty.",
      icons: [java, sql]
    },
  ];

  // Gérer l'ouverture et la fermeture de la modale
  const handleShow = (project) => {
    setModalContent(project); // Assigner le projet à afficher dans la modale
    setShowModal(true); // Ouvrir la modale
  };
  
  const handleClose = () => setShowModal(false); // Fermer la modale

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={""}>
                <h2>Projets</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Académique</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professionnel</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                handleClick={() => handleShow(project)} // Ajouter un gestionnaire de clic
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          pro.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                handleClick={() => handleShow(project)} // Ajouter un gestionnaire de clic
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modale */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent.modalText}</p>
          <div className="icon-container">
            {modalContent.icons && modalContent.icons.map((icon, index) => (
              <img key={index} src={icon} alt={`icon-${index}`} className="project-icon" />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
