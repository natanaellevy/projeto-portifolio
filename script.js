function carregar(pagina) {
    fetch(pagina + '.html')
      .then(res => {
        if (!res.ok) throw new Error('Página não encontrada');
        return res.text();
      })
      .then(data => {
        document.getElementById('conteudo').innerHTML = data;
      })
      .catch(err => {
        document.getElementById('conteudo').innerHTML = `<p>Erro: ${err.message}</p>`;
      });
  }
  
  // Carrega a primeira página ao abrir
  window.onload = () => carregar('sobre');
  
  