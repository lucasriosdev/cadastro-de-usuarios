import { useRef } from "react";
import api from "../../services/api";
import { Button as DefaultButton } from "../../components/Button/styles";
import { Title, Container, Form, ContainerInputs, Input, Button, InputLabel } from "./styles";
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>

        <DefaultButton type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </DefaultButton>
      </Form>

      <DefaultButton type="button">Ver Lista de Usuários</DefaultButton>
    </Container>
  );
}

export default Home;
