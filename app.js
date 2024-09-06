function pesquisar() {
    // Essa função é responsável por realizar a pesquisa e exibir os resultados na página.
    // Ela busca um elemento HTML com o ID "resultados-pesquisa" para inserir os resultados.
  
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
      
    //se campopesquisa for uma string sem nada
    if(campoPesquisa ==""){
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta</p>"
      return
    }
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags =""; 
    // Itera sobre cada elemento (dado) da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

    if(!resultados)
    {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }