export const idade = 38;

export default class Usuario {
  static info() {
    return "Apenas teste";
  }
}

// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
    delay().then(() => {
      console.log("2s");
      delay().then(() => {
        console.log("3s");
      });
    });
  });
}

export async function umPorSegundoAsync() {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
}

// Usando axios para o request
import axios from "axios";
export function getUserFromGithub(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log("Usuário não existe");
    });
}

export async function getUserFromGithubAsync(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.warn("Usuário não existe");
  }
}

// Usando axios dentro de uma classe com método estático
export class Github {
  static getRepositories(user, repo) {
    axios
      .get(`https://api.github.com/repos/${user}/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  static async getRepositoriesAsync(user, repo) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${user}/${repo}`
      );
      console.log(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  }
}

// Utilização com constante e arrow functions
export const buscaUsuario = usuario => {
  axios
    .get(`https://api.github.com/users/${usuario}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log("Usuário não existe");
    });
};

export const buscaUsuarioAsync = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (error) {
    console.warn(error.message);
  }
};
