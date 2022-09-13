import axios from "axios";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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
  describe("Quando o carregamento terminar", () => {
    test("Não deve mostrar o carregamento", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      await waitForElementToBeRemoved(
        screen.getByText("Carregando usuários...")
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    test("Deve mostrar o título de Usuários", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      await waitForElementToBeRemoved(
        screen.getByText("Carregando usuários...")
      );

      expect(await screen.findByText("Usuários:")).toBeInTheDocument();
    });

    test("Exibir o @ do usuário", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      const userList = await screen.findByText("@stevesantos");

      expect(userList).toBeInTheDocument();
    });

    test("Ele deve exibir o nome de usuário", async () => {
      axios.get.mockResolvedValueOnce({ data: fakeUsers });

      render(<App />);

      const userList = await screen.findByText("Steve");

      expect(userList).toBeInTheDocument();
    });
  });
});
