import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    //const [categorias, setCategorias] = useState(['Teste']);
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
      //O que sera feito
      console.log('ALOW!');
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://mocflix.herokuapp.com/categorias';
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
          clearForm();
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
// Aula 5 - 15:27
export default CadastroCategoria;