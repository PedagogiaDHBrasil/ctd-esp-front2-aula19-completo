import { formatUserName } from "./utils";

describe('formatUserName', () => {
   test("formatUserName adiciona @ no início do nome de usuário", () => {
     const result = formatUserName("rick");
     expect(result).toBe("@rick");
   });

   test("formatUserName não adiciona @ quando já é fornecido", () => {
     const result = formatUserName("@rick");
     expect(result).toBe("@rick");
   });
});
 
