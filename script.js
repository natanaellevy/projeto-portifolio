// Função para carregar o conteúdo das páginas HTML dinamicamente
function carregar(pagina) {
    fetch(pagina + '.html') // Busca o arquivo HTML correspondente
        .then(res => {
            if (!res.ok) throw new Error('Página não encontrada'); // Verifica se a resposta é válida
            return res.text(); // Converte a resposta para texto (HTML)
        })
        .then(data => {
            // Insere o conteúdo carregado dentro da <main id="conteudo">
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(err => {
            // Exibe mensagem de erro caso a página não seja encontrada
            document.getElementById('conteudo').innerHTML = `<p>Erro: ${err.message}</p>`;
        });
  }
  
// Ao carregar o site, exibe a página "sobre" por padrão
window.onload = () => carregar('sobre');
  
  