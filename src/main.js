import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formElem = document.querySelector("form#repo-form");
    this.inputTextElem = document.querySelector("input#repo-name");
    this.listElem = document.querySelector("ul#repo-list");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElem.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingElem = document.createElement("span");
      loadingElem.appendChild(document.createTextNode("Carregando..."));
      loadingElem.setAttribute("id", "loading");

      this.formElem.appendChild(loadingElem);
    } else {
      document.querySelector("form#repo-form span#loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoName = this.inputTextElem.value;

    if (repoName.length === 0) {
      return;
    }

    this.setLoading();

    try {
      //desestruturação de objetos
      const response = await api.get(`/repos/${repoName}`);

      //object short syntax - variáveis com o mesmo nome não precisam ser
      //atribuídas, pois são mapeadas automaticamente
      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputTextElem.value = " ";

      this.render();
    } catch (error) {
      alert("O repositório não existe!");
    }

    this.setLoading(false);
  }

  render() {
    this.listElem.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgElem = document.createElement("img");
      imgElem.setAttribute("src", repo.avatar_url);

      let titleElem = document.createElement("strong");
      titleElem.appendChild(document.createTextNode(repo.name));

      let descriptionElem = document.createElement("p");
      descriptionElem.appendChild(document.createTextNode(repo.description));

      let linkElem = document.createElement("a");
      linkElem.setAttribute("target", "_blank");
      linkElem.setAttribute("href", repo.html_url);
      linkElem.appendChild(document.createTextNode("Acessar"));

      let listItemElem = document.createElement("li");
      listItemElem.appendChild(imgElem);
      listItemElem.appendChild(titleElem);
      listItemElem.appendChild(descriptionElem);
      listItemElem.appendChild(linkElem);

      this.listElem.appendChild(listItemElem);
    });
  }
}

new App();
