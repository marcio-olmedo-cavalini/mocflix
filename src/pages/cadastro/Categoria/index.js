import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);
    const valoresIniciais = {
      nome: 'Categoria Inicial',
      descricao: 'Descrição Inicial',
      cor: 'red'
    }
    const [values, setValues] = useState(valoresIniciais);
    
    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>
        
        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          //console.log('Voce tentou enviar o form');
          setCategorias([
            ...categorias,
            values
          ]);
        }}>
          <div>
            <label>
                Nome categoria:
                <input type="text" 
                      value={values.nome}
                      onChange={function funcaoOnChange(infosDoEvento) {
                        //console.log('[nomeDaCategoria]', nomeDaCategoria);
                        //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                        //setNomeDaCategoria(infosDoEvento.target.value);                    
                      }}
                />
            </label>
          </div>
          <div>
            <label>
                Descrição:
                <textarea type="text" 
                      value={values.descricao}
                      onChange={function funcaoOnChange(infosDoEvento) {
                        //console.log('[nomeDaCategoria]', nomeDaCategoria);
                        //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                        //setNomeDaCategoria(infosDoEvento.target.value);                    
                      }}
                />
            </label>
          </div>
          <div>
            <label>
                Cor:
                <input type="color" 
                      value={values.cor}
                      onChange={function funcaoOnChange(infosDoEvento) {
                        //console.log('[nomeDaCategoria]', nomeDaCategoria);
                        //console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                        //setNomeDaCategoria(infosDoEvento.target.value);                    
                      }}
                />
            </label>
          </div>

          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            ) // minuto 39:37
          })}
        </ul>
        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;