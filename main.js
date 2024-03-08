:root{
    --cor-de-fundo: #1e1e1e;
    --verde: #6fff57;
    --branco: #ffffff;
    --botao-ativo: #3a375e;
    --botao-inativo: rgba(58, 55, 94, 0.5);
    --texto-fundo: rgba(58, 55, 94, 0.3);
    
}

.titulo-principal {
    color: var(--branco)
}

body {
    background-color: var(--cor-de-fundo);
    color: var(--branco);
    font-family: 'Chakra Petch', sans-serif;
  }

  .conteudo-principal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .titulo-principal{
    text-align: left;
    width: 100%;
    font-size: 32px;
  }
  titulo-principal span{
    color: var(--verde);
  }

  .botao{
    font-family: "Chakra Petch", sans-serif;
    background-color: var(--botao-inativo);
    color: var(--branco);
    display: flex;
    justify-content: center;
    padding: 1em;
    font-size: 18px;
    align-items: center;
    width: 100%;
    border-bottom: 4px solid var(--botao-inativo);
    border-left: 2px solid var(--botao-inativo);
    border-right: 2px solid var(--botao-inativo);
    border-top: none;
  }

  .botao:first-child{
    border-radius: 40px 40px 0 0;
  }

  .botoes{
    display: block;
  }

  .ativo{
    background-color: var(--botao-ativo);
    border-bottom: 4px solid var(--verde);
    
  }

  @media screen and (min-width: 768px) {
    .botoes{
        display: flex;
    }
    .botao:first-child{
        border-radius: 40px 0 0 0;
    }
    .botao:last-child{
        border-radius: 0 40px 0 0;
        
    }
    
  }