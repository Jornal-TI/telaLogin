import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/indexHeader';
import Footer from './components/footer/indexFooter';
import ControlledCarousel from './components/destaque/indexCarrosel';
import Marquee from './components/marquee/indexMarquee';

// Importe o componente Feed
import Feed from './components/feed/indexFeed';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <ControlledCarousel/>
      <br />
      <Marquee items={[
        {
          link: 'https://www.sp.senac.br/areas/tecnologia-da-informacao/',
          text: 'Feed1',
        },
        {
          link: 'https://www.sp.senac.br/bolsas-de-estudo',
          text: 'Feed2',
        },
        {
          link: 'https://eventos.sp.senac.br/?ad=sitesenac&_ga=2.149149936.773519347.1693182355-1879556674.1693182355',
          text: 'Feed3',
        },
        {
          link: 'https://www.sp.senac.br/centro-universitario-senac-santo-amaro',
          text: 'Feed4',
        },
        {
          link: 'https://www.sp.senac.br/',
          text: 'Feed5',
        },
        {
          link: 'https://www.sp.senac.br/',
          text: 'Feed6',
        },
        {
          link: 'https://www.sp.senac.br/',
          text: 'Feed7',
        },

      ]} />

      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Feed
              category="Categoria 1"
              title="Título do Feed 1"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 1..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 2"
              title="Título do Feed 2"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 2..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 3"
              title="Título do Feed 3"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 3..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 4"
              title="Título do Feed 4"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 4..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 5"
              title="Título do Feed 5"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 5..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 6"
              title="Título do Feed 6"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 6..."
            />
          </div>
          <div className="col-md-8">
            <Feed
              category="Categoria 7"
              title="Título do Feed 7"
              date="10 de agosto de 2023"
              author="Autor 1"
              content="Conteúdo do Feed 7..."
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
