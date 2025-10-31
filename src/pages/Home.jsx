import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="headline">
          <h2 style={{ letterSpacing: '15px' }}>Bem vindo a</h2>
          <h2 style={{ fontSize: '80px' }}>ONG Doce Lar</h2>
          <p>
            Somos uma organização dedicada ao cuidado e proteção de animais em situação de vulnerabilidade. 
            Nossa missão é resgatar, reabilitar e encontrar lares responsáveis para nossos amigos de quatro patas, 
            promovendo o bem-estar animal e fortalecendo o vínculo entre humanos e animais.
          </p>
          <div className="drop">
            <Link to="/cadastro">Seja um Voluntário</Link>
          </div>
        </div>
        <div className="img-headline">
          <img style={{ maxWidth: '98%' }} src="/img/voluntario-posando.jpg" alt="Voluntário" />
        </div>
      </header>

      <section>
        <h2>-O que nos move-</h2>
        <div className="nos-move">
          <div className="card">
            <img src="/img/missao.png" alt="icone de missao" />
            <h3>MISSÃO</h3>
            <p>
              Resgatar, proteger e promover o bem-estar de animais abandonados, oferecendo cuidados veterinários, 
              abrigo temporário e buscando lares responsáveis através de processos rigorosos de adoção. 
              Trabalhamos incansavelmente para reduzir o abandono e o maus-tratos animal em nossa comunidade.
            </p>
          </div>

          <div className="card">
            <img src="/img/valores.png" alt="icone de valores" />
            <h3>VALORES</h3>
            <p>
              Compaixão, responsabilidade, transparência e dedicação são os pilares que guiam nosso trabalho. 
              Acreditamos no poder transformador do cuidado e do respeito aos animais, promovendo educação 
              sobre guarda responsável e fortalecendo a consciência sobre o bem-estar animal na sociedade.
            </p>
          </div>

          <div className="card">
            <img src="/img/vision.png" alt="icone de visão" />
            <h3>VISÃO</h3>
            <p>
              Ser referência em proteção animal, criando uma comunidade onde não existam mais animais abandonados 
              nas ruas. Almejamos um futuro onde todos os animais tenham lares amorosos e responsáveis, 
              e onde a população esteja consciente sobre guarda responsável e bem-estar animal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

