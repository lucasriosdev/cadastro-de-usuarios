import { useEffect } from "react";
import api from "../../../services/api";
import TopBackground from "../../../components/TopBackground";
import { Button } from "../styles";

function ListUsers() {
  useEffect(() => {
    async function getUsers() {
      const usersFromApi = await api.get("/usuarios");
      console.log(usersFromApi);
    }
    getUsers();
  }, []);

  return (
    <div>
      <TopBackground />
      <h1>Listagem de Usuários</h1>
      <Button>Voltar</Button>
    </div>
  );
}

export default ListUsers;
