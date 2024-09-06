function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if (!campoPesquisa) {
      section.innerHTML = "<p> Digite um jogo para pesquisar</p>"
      return
    };
  
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada jogo no array 'jogos'
    for (let jogo of jogos) {  
      titulo = jogo.titulo.toLowerCase()
      descricao = jogo.descricao.toLowerCase()
      tags = jogo.tags.toLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)  || tags.includes(campoPesquisa)) {
              // Constrói o HTML para cada item de resultado
        resultados += `
        <div class="item-resultado">
          <h2>${jogo.titulo}</h2>
          <p class="descricao-meta">${jogo.descricao}</p>
          <a href=${jogo.link} target="_blank"> Veja as Reviews desse jogo</a>
        </div>
      `;
      }

    }
  
    if(!resultados) {
      resultados = "<p>Nenhum jogo foi encontrado</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }


