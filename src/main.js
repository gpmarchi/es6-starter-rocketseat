import ClasseUsuario, { idade as IdadeUsuario } from "./functions";
import { umPorSegundo } from "./functions";
import { umPorSegundoAsync } from "./functions";
import { getUserFromGithub } from "./functions";
import { getUserFromGithubAsync } from "./functions";
import { Github } from "./functions";
import { buscaUsuario } from "./functions";
import { buscaUsuarioAsync } from "./functions";

// console.log(ClasseUsuario.info());
// console.log(IdadeUsuario);

// umPorSegundo();
// umPorSegundoAsync();

// getUserFromGithub("diego3g");
// getUserFromGithub("diego3g124123");

// getUserFromGithubAsync("diego3g");
// getUserFromGithubAsync("diego3g124123");

// Github.getRepositories("gpmarchi", "credit-card-validator");
// Github.getRepositories("rocketseat/dslkvmskv");

// Github.getRepositoriesAsync("gpmarchi", "credit-card-validator");
// Github.getRepositoriesAsync("rocketseat", "dslkvmskv");

// buscaUsuario("diego3g");
buscaUsuarioAsync("diego3g");
