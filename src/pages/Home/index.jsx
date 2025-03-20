
import {useRef} from 'react'

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from "./styles";

import UsersImage from "../../assets/users.png";

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewUser(){
    console.log(inputName.current.value)
  }

  
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário"  ref={inputName}/>
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
          <Input type="email" placeholder="E-mail do Usuário"  ref={inputEmail}/>
        </div>

        <Button type='button' onClick={registerNewUser} >Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
