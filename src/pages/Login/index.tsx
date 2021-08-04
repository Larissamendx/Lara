import { Formik, Form as FormikForm, Field } from "formik";
import React from "react";
import styles from "./styles.module.css"
import NavBar from "../../components/Navbar";
import { Form, Button } from "react-bootstrap";
import Link from 'next/link'

function Login() {
  return (
    <div className={styles.container} style={{ backgroundImage: "url(./images/bgHeader.png)" }}>
       <NavBar /> 
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
    
        <FormikForm className={styles.container_login} >
          <div className={styles.caixa}>
        <img src="./images/logo.svg" alt="Logo" />
          <div className={styles.form}>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className={styles.form}>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              className="form-control"
            />
          </div>
          <div className="mb_3">
            <Button type="submit" className={styles.login}>
              Entrar
            </Button>
            <Link href="#">
              <a>Esqueceu a senha?</a>
            </Link>
          </div>
          <div className={styles.btn_create}>
            <Button type="submit" className={styles.login}>
              Criar uma conta nova
            </Button>
          </div>
          </div>
        </FormikForm>
      </Formik>
    </div>
  );
}
export default Login;
