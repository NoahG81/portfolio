import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/nglogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/newgithub.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="footer-logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/noah-guerreiro-608b17268/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/NoahG81" target="blank"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright Noah Guerreiro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
