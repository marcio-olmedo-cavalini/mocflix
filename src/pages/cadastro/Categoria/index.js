import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    //const [categorias, setCategorias] = useState(['Teste']);
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
      //chave: nome, descricao, qualquer_outro_valor
      setValues({
        ...values,
        [chave]: valor, //nome: 'valor'
      });
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    useEffect(() => {
      //O que sera feito
      console.log('ALOW!');
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
        })
    },
      [/* quando sera feito*/]
    ); 
    
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
          setValues(valoresIniciais);
        }}>
          <FormField
            label='Nome da categoria'
            name='nome'
            value={values.nome}
            onChange={handleChange}
          />
          
          <FormField
            label='Descrição'
            type='textarea'
            name='descricao'
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label='Cor'
            type='color'
            name='cor'
            value={values.cor}
            onChange={handleChange}
          />
          <Button>
            Cadastrar
          </Button>
        </form>

        <div>
          {/* Carregando */}
          Loading...
        </div>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;