import React, { useState, useContext } from "react";
import NavBar from "../../components/Navbar";
import styles from "./styles.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { HomeContext } from "../../context/HomeContext";
import Link from "next/link";
import Footer from "../../components/Footer";

function HomePage() {
  const { imgAnterior, imgAtual, imgProximo, next, back } = useContext(HomeContext)

  let slides = [
    <div className={styles.slide}>
      <img src="./images/Approved Unlock.svg" alt="1" />
      <p>SEGURANÇA DOS DADOS</p>
    </div>,

    <div className={styles.slide}>
      <img src="./images/Linkedin.svg" alt="1" />
      <p>EFICIÊNCIA DA EQUIPE</p>
    </div>,

    <div className={styles.slide}>
      <img src="./images/Instagram.svg" alt="4" />
      <p>VENDER MAIS</p>
    </div>,

    <div className={styles.slide}>
      <img src="https://picsum.photos/800/304/?random" alt="5" />
      <p>ALGUMA COISA</p>
    </div>,

    <div className={styles.slide}>
      <img src="./images/Approved Unlock.svg" alt="1" />
      <p>Teste</p>
    </div>,

    <div className={styles.slide}>
      <img src="./images/Linkedin.svg" alt="1" />
      <p>Teste 01</p>
    </div>,
  ];

  return (
    <div className={styles.homePageContainer}>
      <NavBar />
      <div
        className={styles.header}
        style={{ backgroundImage: "url(./images/bgHeader.png)" }}
      >
        <Container>
          <Row>
            <Col sm={6}>
              <h1>
                Lara oferece a gestão perfeita para a sua empresa na palma da
                mão.
              </h1>
              <h2>
                Relatórios de faturamento, registros de clientes, perfis para os
                funcionamentos e muito mais...
              </h2>
              <Button href="#" className={styles.Buttonn}>
                Experimente GRÁTIS
              </Button>
            </Col>
            <Col sm={4}>
              <img
                className={styles.bgHeader}
                src="./images/ceo2.png"
                alt="Ceo"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.Sobre}>
        <Container>
          <Row>
            <Col sm={6}>
              <h1>
                Conheça a <span>Lara</span>
              </h1>
              <p>
                Baseado na sua experiência de 5 anos dentro de uma cozinha,
                Lara, idealizadora do app, decidiu juntar todas suas
                necessidades e transformá-las em um sistema inteligente.
              </p>
            </Col>
            <Col sm={4}>
              <img
                className={styles.video}
                src="./images/Linkedin.svg"
                alt="Ceo"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.Motivos}>
        <h2>
          Troque suas planilhas por um <span>sistema de gestão</span>
        </h2>
        <h4>6 MOTIVOS CLAROS PARA MUDAR AGORA!</h4>

        <div className={styles.containerSlide}>
          <img
            className={styles.voltar}
            src="./images/arrow-right.svg"
            alt="Próximo"
            onClick={back}
          />
          <div className={styles.anteriorSlide}>{slides[imgAnterior]}</div>
          <div className={styles.atualSlide}>{slides[imgAtual]}</div>
          <div className={styles.proximoSlide}>{slides[imgProximo]}</div>
          <img
            className={styles.proximo}
            src="./images/arrow-right.svg"
            alt="Próximo"
            onClick={next}
          />
        </div>
      </div>

      <div className={styles.Funcionamento}>
        <h2>COMO FUNCIONA?</h2>

        <div>
          <div className={styles.square}>
            <Link href="#">
              <a>
                <img src="./images/Task.svg" alt="Tarefas" />
                <p>CONTROLE DE RECEITAS</p>
              </a>
            </Link>
          </div>

          <div className={styles.square}>
            <Link href="#">
              <a>
                <img src="./images/Task.svg" alt="Tarefas" />
                <p>CONTROLE FINANCEIRO</p>
              </a>
            </Link>
          </div>

          <div className={styles.square}>
            <Link href="#">
              <a>
                <img src="./images/Task.svg" alt="Tarefas" />
                <p>GESTÃO DE ESTOQUE</p>
              </a>
            </Link>
          </div>

          <div className={styles.square}>
            <Link href="#">
              <a>
                <img src="./images/Task.svg" alt="Tarefas" />
                <p>ADICIONAR TIME</p>
              </a>
            </Link>
          </div>
        </div>

        <Button href="#" className={styles.TesteG}>
          TESTE GRÁTIS
        </Button>
      </div>

      <div
        className={styles.planos}
        style={{ backgroundImage: "url(./images/bgSection.svg)" }}
      >
        <h2>PLANOS</h2>
        <div>
          <div className={styles.container}>
            <h3>STARTER</h3>
            <img src="./images/star.svg" alt="Starter" />
            <p>Tenha sua empresa preparada com o essencial.</p>
            <Button href="#">Comece de graça</Button>
          </div>

          <div className={styles.container}>
            <h3>COLHER</h3>
            <img src="./images/colher.svg" alt="Colher" />
            <p>Para as empresas que possuem um processo simples.</p>
            <Button href="#">R$ 29,90/mês</Button>
            <span>R$ 320,00/ano</span>
          </div>

          <div className={styles.container}>
            <h3>ESPÁTULA</h3>
            <img src="./images/espatula.svg" alt="espatula" />
            <p>Melhore a perfomance do seu neg suas vendas.</p>
            <Button href="#">R$ 49,90/mês</Button>
            <span>R$ 538,00/ano</span>
          </div>

          <div className={styles.container}>
            <h3>FOUET</h3>
            <img src="./images/fouet.svg" alt="fouet" />
            <p>Para as empresas que possuem um processo simples.</p>
            <Button href="#">R$ 99,90/mês</Button>
            <span>R$ 1074,00/ano</span>
          </div>
        </div>

        <Button href="#" className={styles.Cadastrar}>
          CADASTRA-SE
          </Button>
      </div>

      <div className={styles.duvidas}>
        <h1>POSSUI ALGUMA DÚVIDA SOBRE O LARA?</h1>
        <p>
          Acesse a cetral de Ajuda e resolva tudo com artigos ou entre em
          contato com nosso equipe de suporte técnico.
        </p>
        <Button href="#" className={styles.suporte}>
          SUPORTE
        </Button>
      </div>
      <Footer/>
    </div>
  );
}
export default HomePage;
