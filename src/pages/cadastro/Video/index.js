import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
      titulo: 'Video Padrao',
      url: 'https://www.youtube.com/watch?v=0bHujn-TgHU',
      categoria: 'Front-End'
    });

    useEffect(() => {
      categoriasRepository.getAll().then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
      
    },[]);
    console.log(categorias);
    return (
      <PageDefault>
        <h1>Cadastro de vídeo</h1>
        
        <form onSubmit={(event) => {
          event.preventDefault();
          
          const categoriaEscolhida = categorias.find((categoria) =>{
            return categoria.titulo === values.categoria;
          });

          console.log(categoriaEscolhida);

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              console.log('Cadastrou com sucesso')
              history.push('/');
            });
          
        }}>
          <FormField
              label='Título do vídeo'
              name='titulo'
              value={values.titulo}
              onChange={handleChange}
          />

          <FormField
              label='URL do vídeo'
              name='url'
              value={values.url}
              onChange={handleChange}
          />

          <FormField
              label='Categoria'
              name='categoria'
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastro de categoria
        </Link>
      </PageDefault>
    );
}

export default CadastroVideo;