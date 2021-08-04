import React from "react";
import styles from "./styles.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Container>
        <Row>
          <Col xs={6} md={2}>
            <img src="./images/LogoLara.svg" />
          </Col>
          <Col className={styles.container} xs={6} md={2}>
            <h4>A lara</h4>
            <ul>
              <li>
                <Link href="#">- Planos e preços</Link>
              </li>
              <li>
                <Link href="#">- Blog</Link>
              </li>
              <li>
                <Link href="#">- Trabalhe conosco</Link>
              </li>
              <li>
                <Link href="#">- Contato</Link>
              </li>
              <li>
                <Link href="#">- Segurança e privacidade</Link>
              </li>
              <li>
                <Link href="#">- Termos de uso</Link>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2}>
            <h4>Suporte</h4>
            <ul>
              <li>
                <Link href="#">- Videos</Link>
              </li>
              <li>
                <Link href="#">- Central de ajuda</Link>
              </li>
              <li>
                <Link href="#">- API bling</Link>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={2}>
            <h4>Funcionalidades</h4>
            <ul>
              <li>
                <Link href="#">- Frente de Caixa</Link>
              </li>
              <li>
                <Link href="#">- Finanças</Link>
              </li>
              <li>
                <Link href="#">- Cadastros</Link>
              </li>
              <li>
                <Link href="#">- Boletos Registrados</Link>
              </li>
              <li>
                <Link href="#">- Certificado Digital</Link>
              </li>
              <li>
                <Link href="#">- Ordem de Produção</Link>
              </li>
              <li>
                <Link href="#">- Serviço</Link>
              </li>
            </ul>
          </Col>

          <Col className={styles.socialMedia} xs={6} md={3}>
            <h4>Redes sociais</h4>
            <ul>
              <li>
                <Link href="#">
                  <img src="./images/Instagram.svg" alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/LinkedIn.svg" alt="Linkedin" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/LinkedIn.svg" alt="Linkedin" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
      <p>© 2020. All Right Reserved.</p>  
    </div>
  );
}

export default Footer;
