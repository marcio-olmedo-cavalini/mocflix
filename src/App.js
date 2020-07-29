import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background:"#141414"}}>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[1].titulo}
        url={dadosIniciais.categorias[0].videos[1].url}
        videoDescription={"Como fazer SEO com React "}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default App;
