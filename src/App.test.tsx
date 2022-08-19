import axios from "axios";
import App from "./App";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    user: "Steve",
    username: "stevesantos",
  },
  {
    id: 2,
    user: "Fernanda",
    username: "fernandasilva",
  },
];

describe("App", () => {
  describe("Teste assincrônico", () => {
    test("Renderizando componente", async () => {});

    test("Testando se o Carregando foi exibido", async () => {});

    test("Exibir o @ do usuário", async () => {});

    test("Exibir o nome do usuário", async () => {});
  });
});
