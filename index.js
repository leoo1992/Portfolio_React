function Perfil(props) {

    const tituloPagina = <h1>Olá,<br />Seja Bem Vindo!</h1>;
    const minhaTagFoto = <img src = {props.imagemPerfil} className="inline_img"></img>

    
    const perfilContent = (
        <div>
          <div className="nome">
            {tituloPagina}
          </div>
          <div>
            {minhaTagFoto}
          </div>
        </div>);
    
      return perfilContent;
}
    function Sobre() {
        const sobreMin = <h3 className="Sobre">🎇_Um pouco sobre mim:</h3>
         return sobreMin;}

    function Bio() {
        const miniBio = <div className="miniBio">
         <br />
        Me chamo Leonardo Santos Custódio, nasci em abril de 1992, sou natural de Imbituba, Santa Catarina.
        Sou formado e atuo como Técnico de Segurança do Trabalho há 11 anos.
        Em minha jornada venho ganhando habilidades como: manuseio de sistemas, confecção e análise de gráficos, planilhas,
        manuais técnicos e outros materiais de apoio. Sou responsável por realizar treinamentos de integração de novos
        colaboradores, laudos técnicos, inspeções e adequações de irregularidades. Atualmente estou finalizando o curso
        de técnico em Desenvolvimento de Sistemas no SENAI de Criciúma, com formação para 07/2023. Almejo em sequência
        iniciar uma faculdade de Engenharia de Software e realizar uma migração de carreira, sei que tenho muito a agregar
        para área de tecnologia com a experiencia que possuo. Sou fascinado por sistemas e por tudo de amplo e inovador
        que podem transformar a nossa realidade. Meu fascínio e curiosidade podem me levar a novos lugares e alcançar
        grandes projetos.
    </div>;
return miniBio}

function Contato() {
    const meusContato = <h3 className="Contato">📨_Entre em contato:</h3>
    return meusContato;}

function LinkSocial() {
    return (
        <div className="Social row-cols-10 d-flex">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <a class='col text-dark' href='https://www.linkedin.com/in/leocustodio1992/' target='_blank'><i class="fa-brands fa-linkedin"></i> </a>
            <br />
            <a class='col text-dark' href='https://github.com/leoo1992' target='_blank'><i class="fa-brands fa-github"></i></a> 
            <br /> 
            <a class='col text-dark' href='https://www.instagram.com/leocustodio1/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <br />
            <a class='col text-dark' href='https://m.facebook.com/Leonardo.lSantosl' target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>);          
}

function Content() {
    return(
        <div>
            <Perfil imagemPerfil='foto3x4.png' />
            <br />
            <Sobre />
            <br />
            <Bio />
            <br />
            <Contato />
            <br />
            <LinkSocial />
            <br />
        </div>)
    };

ReactDOM.render(
    <Content />,
    document.getElementById('root')
);
