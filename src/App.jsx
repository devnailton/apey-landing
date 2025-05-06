import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="p-3 bg-dark text-white">
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="d-flex align-items-center text-white text-decoration-none mb-2 mb-lg-0">
            <img src="/assets/img/logo.png" alt="logo" style={{ width: '50px' }} />
          </a>

          <ul className="nav mx-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="#aboutUs" className="nav-link px-2 text-white link-success">Sobre Nós</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link px-2 text-white link-success">Serviços</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-white link-success">Contato</a>
            </li>
            <li className="nav-item">
              <a href="/checkin.html" className="nav-link px-2 text-white link-success">PROVA</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <a
              href="https://api.whatsapp.com/send?phone=5566996555525&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
              className="float"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-whatsapp my-float"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5566996555525&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="ms-3"
            >
              <button className="btn btn-success">
                <i className="fa fa-whatsapp"></i> Fale conosco
              </button>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="ms-2">
              <button className="btn btn-primary">
                <i className="fa fa-user"></i> Login
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
      >
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map(i => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {[
            {
              img: 'https://lojaintegrada.wpenginepowered.com/wp-content/uploads/2023/03/profissoes-digitais-programador-1024x809.webp',
              title: 'Soluções Tecnológicas de Alta Qualidade',
              text:
                'A Apey Sistemas é uma empresa de tecnologia dedicada a fornecer soluções inovadoras que atendem às necessidades específicas do seu negócio. Com uma ampla gama de sistemas projetados para diversos setores comerciais, oferecemos ferramentas modernas e personalizadas que impulsionam a eficiência e o crescimento da sua empresa.',
            },
            {
              img: 'https://academiatech.s3.amazonaws.com/wp-content/uploads/2023/01/materias-de-analise-e-desenvolvimento-de-sistemas-1024x576.webp',
              title: 'Inovação e Confiabilidade',
              text:
                'Sistemas e atendimentos sob demanda para o seu negócio: Estoque, Contábil, Fiscal, PDV, E-commerce, Gestão empresarial, Agendamentos, Atendimento, Integração com What’s APP, Sites, Aplicativos, Tratamento e Análise de Dados para tomada de decisão, Consultorias.',
            },
            {
              img: 'https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/ti.jpg',
              title: 'Seu Parceiro de Confiança em Sistemas',
              text:
                'Nosso compromisso é entregar tecnologia de ponta que simplifica processos, otimiza operações e agrega valor ao seu negócio, independentemente do seu tamanho ou segmento.',
            },
            {
              img: 'https://img.freepik.com/fotos-gratis/desenho-de-colagem-de-pessoas_23-2148888271.jpg',
              title: 'Sistema do Seu Jeito',
              text:
                'Açougues, Assistência técnica, Manutenção, Atacados, Materiais de construção, Autoelétricas, Mecânicas, Barbearias, Bares, Bicicletarias, Brinquedos, Calçados, Confecções, Conveniências, Distribuidoras, Doces, Mercados, Móveis, Óticas, Padarias, Papelarias, Perfumarias, Presentes, Relojoarias, Produtor rural, Eletrodomésticos, Restaurantes, Esportes, Salões de beleza, Estéticas, Supermercados, Floriculturas, Telefonia e celular, Informática, Tintas, Joalherias, Transportadores, Lanchonetes, Vendas externas, Vidraçarias.',
            },
          ].map((slide, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
              <img src={slide.img} className="d-block w-100" alt={slide.title} />
              <div className="carousel-caption shadow p-3 mb-5 bg-dark rounded">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h1><strong className="text-white">{slide.title}</strong></h1>
                  <p className="text-white">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Sobre Nós */}
      <section id="aboutUs" className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="text-center mb-4">Sobre Nós</h2>
            <p>
              Nossos Sistemas contam com uma rede de distribuição nacional
              superior a 1.650 parceiros na Itália e 350 em todo o mundo e mais
              de 800.000 clientes, faça um orçamento e conheça o que há de mais
              moderno e eficiente no setor de TI.
            </p>
            <p>
              Com mais de 10 anos de experiência em sua gestão, a Apey Sistemas
              sempre acompanhou as transformações do mercado de tecnologia.
              Nosso objetivo é tornar sua experiência mais fácil, atuando como
              uma intermediadora entre sua empresa e a tecnologia...
            </p>
            {/* … demais parágrafos … */}
          </div>
          <div className="col-12 col-lg-6">
            <img
              src="https://cdn.dribbble.com/users/2434447/screenshots/6743016/captura_de_tela_2019-07-06_a_s_00.11.15.png"
              className="img-fluid w-100"
              alt="Sobre Nós"
            />
          </div>
        </div>
      </section>
      <hr />

      {/* Serviços */}
      <section id="services" className="container py-5">
        <h2 className="text-center mb-4">Nossos Serviços</h2>
        <div className="row">
          {[
            {
              img: 'https://highsales.digital/images/blog/modelo-de-site-institucional.jpg',
              title: 'Sites Institucionais ou Aplicativos',
              desc: 'Sua identidade visual na internet passa confiança para os seus clientes. Na palma da mão, seu produto a um clique de seu cliente.',
            },
            {
              img: 'https://www.casamagalhaes.com.br/blog/wp-content/uploads/2020/10/sistema-de-frente-de-caixa.jpg',
              title: 'Sistemas Desktop e Web',
              desc: 'Estoque, Nota Fiscal, PDV, Orçamento, Ordem de Serviço e muito mais...',
            },
            {
              img: 'https://loja.certisign.com.br/on/demandware.static/-/Sites-certisign-master/default/dw51813c58/b_ecnpj_a3.png',
              title: 'Certificados Digitais',
              desc: 'Assinatura de documentos online com validade jurídica e segurança nas comunicações.',
            },
            {
              img: 'https://cdn.dribbble.com/userupload/14499296/file/original-e4ca94162293f5dd69048dd017baa4ac.png?resize=752x',
              title: 'Consultoria e Análise de Dados',
              desc: 'Tratamento, transformação e modelagem de dados para insights que auxiliam na tomada de decisão.',
            },
          ].map((s, i) => (
            <div key={i} className="col-6 col-md-3 mb-4">
              <div className="card h-100 service-card">
                <img src={s.img} className="card-img-top" alt={s.title} />
                <div className="card-body">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />

      {/* Contato */}
      <section id="contact" className="container py-5">
        <h2 className="text-center mb-4">Contato</h2>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefone</label>
                <input type="tel" id="phone" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea id="message" rows="4" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitted}>
                Enviar
              </button>
              {submitted && (
                <h5 className="alert alert-success show-message mt-3">
                  Mensagem Enviada!
                </h5>
              )}
            </form>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7203792617424!2d-54.58962809655601!3d-16.49446654773713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379b90073168ea5%3A0x366f29f98678fe72!2zQXBleSBTb2x1w6fDtWVzIFRlY25vbMOzZ2ljYXM!5e1!3m2!1spt-BR!2sbr!4v1725854579245!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="mapa"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center py-4 text-white">
        <div className="container">
          <p className="mb-1">&copy; 2024 Apey Sistemas. Todos os direitos reservados.</p>
          <a
            href="https://wa.me/5566996555525?text=Ol%C3%A1.+Preciso+de+uma+solu%C3%A7%C3%A3o+online+para+o+meu+neg%C3%B3cio%21"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por: Apey Soluções Tecnológicas e Otacílio Neto
          </a>
        </div>
      </footer>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 046cc19b3e31b394d3c746cf96396e71994dbc08
