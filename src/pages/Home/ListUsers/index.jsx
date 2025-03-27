import { useEffect, useState } from "react";
import api from "../../../services/api";
import TopBackground from "../../../components/TopBackground";
import Button from "../../../components/Button";
import Trash from "../../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser } from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixo" />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/cadastro-de-usuarios")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
