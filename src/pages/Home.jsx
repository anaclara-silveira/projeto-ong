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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam et minus ad possimus amet magni, iure,
            aliquam minima, odit ea voluptatum neque dignissimos nobis quaerat blanditiis cupiditate quae optio
            perferendis.
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque blanditiis inventore voluptates
              dolorum facilis dolore repellendus. Ullam animi, neque nesciunt maxime mollitia vitae. Quas repellat
              consectetur qui praesentium cumque molestias!
            </p>
          </div>

          <div className="card">
            <img style={{ height: '80px' }} src="/img/valores.png" alt="icone de valores" />
            <h3>VALORES</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam distinctio, minima, deserunt nobis
              facilis hic quae reprehenderit cupiditate tempore nisi velit commodi sunt. Quis ipsa ex doloremque
              ullam ducimus in!
            </p>
          </div>

          <div className="card">
            <img src="/img/vision.png" alt="icone de visão" />
            <h3>VISÃO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eum cupiditate natus veniam nobis,
              assumenda quasi necessitatibus dolorem similique. Tenetur et quisquam suscipit tempore quidem sint
              quibusdam enim esse praesentium!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

