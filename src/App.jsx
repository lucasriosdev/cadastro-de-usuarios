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

function Home() {
  return (
    <Container>
      <TopBackground>
        <div>
          <img />
        </div>
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" />
            </div>

            <div>
              <InputLabel>
                E-mail<span>*</span>
              </InputLabel>
              <Input type="email" placeholder="E-mail do Usuário" />
            </div>
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
