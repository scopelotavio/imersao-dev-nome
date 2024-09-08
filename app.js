// definir funcao de pesquisar
function pesquisar() {
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    // Obtém o valor inserido pelo usuário no id campo-pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';


    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = 'Verificar o campo de pesquisa';
        return;
    }

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        
        // se titulo inludes campoPesquisa, então faça
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           // Constrói o HTML para cada resultado da pesquisa
            resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;   
        }
        if (!resultados) {
            resultados = 'Nada foi encontrado';
        }
      
    }
    
    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }