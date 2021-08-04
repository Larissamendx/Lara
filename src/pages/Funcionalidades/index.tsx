import React from "react";
import styles from "./styles.module.css";
import NavBar from "../../components/Navbar";
import { Container, Button, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

function Funcionalidades() {
  return (
    <div className={styles.containerFuncionalidades}>
      <NavBar />

      <header style={{ backgroundImage: "url(./images/bgHeader.png)" }}>
        <h1>O Lara tem várias formas de facilitar a empreender seu negócio!</h1>
        <img src="./images/Revenue-bro 1.png" />
      </header>

      <main>
        <h1>
          Conheça todas as funcionalidades que o <span>LARA</span> oferece!
        </h1>
        <Container className={styles.função}>
          <div className={styles.linha}>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>PRODUTOS</h2>
              <p>Possui informações de todos os departamentos.</p>
            </div>
            
            <div className={styles.col}>
              <img src="./images/Vector-1.png" alt="Orçamento" />
              <h2>ORÇAMENTO</h2>
              <p>
                Cadastro de orçamentos a partir de produtos e/ou receitas,
                cliente e data.
              </p>
            </div>

            <div className={styles.col}>
              <img src="./images/painelC.png" alt="Produtos" />
              <h2>PAINEL DE COMANDOS</h2>
              <p>Possui informações de todos os departamentos.</p>
            </div>
          </div>

          <div className={styles.linha}>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>CADASTRO DE CLIENTES</h2>
              <p>Histórico de vendas para todos clientes.</p>
            </div>

            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>CADASTRO DE FORNECEDORES</h2>
              <p>
                Listar todos os produtos que foram cadastrados com esse
                fornecedor.
              </p>
            </div>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>CADASTRO DE EMPRESA</h2>
              <p>
                Usar quantidades e pesos de matéria-prima para combinar
                receitas.
              </p>
            </div>
          </div>

          <div className={styles.linha}>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>CÁLCULO DE EMPRESA</h2>
              <p>Definição das % de lucro de cada produto. </p>
            </div>
            
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>PEDIDOS</h2>
              <p>Histórico e resumo de pedidos por dia, mês e ano.</p>
            </div>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>RELATÓRIOS</h2>
              <p>Relatórios de faturamento, vendas e despesas.</p>
            </div>
          </div>

          <div className={styles.linha}>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>FUNCIONÁRIOS</h2>
              <p>
                O administrador poderá listar as funções que os funcionários
                terão acesso.
              </p>
            </div>
            <div className={styles.col}>
              <img src="./images/vector.png" alt="Produtos" />
              <h2>GRÁFICOS</h2>
              <p>
                Gráficos para acompanhamento de vendas, % de meta batida, entre
                outros.
              </p>
            </div>
          </div>
     </Container>
      </main>

      <section>
        <h1>Veja como o <span>LARA</span> te ajuda!</h1>

        <div className={styles.containerCard}>
          <div>
            {/* <img src="" alt="" /> */}
            <h2>EM TODO LUGAR</h2>
            <p>Monitore sua empresa de onde estiver usando apenas o celular.</p>
          </div>

          <div>
            {/* <img src="" alt="" /> */}
            <h2>AUTOMATIZAÇÃO</h2>
            <p>Leve minutos para fazer cálculos que demorariam horas para fazer no papel.</p>
          </div>

          <div>
            {/* <img src="" alt="" /> */}
            <h2>MAIS AGILIDADE</h2>
            <p>Consiga administrar todos os setores da sua empresa de um só lugar.</p>
          </div>
        </div>
        <button className={styles.assinar}>ASSINE JÁ</button>
      </section>
      <Footer/>
    </div>
  );
}
export default Funcionalidades;
