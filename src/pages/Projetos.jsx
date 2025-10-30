import './Projetos.css'

function Projetos() {
  return (
    <div className="projetos-page">
      <section>
        <h2>- Conheça nossos Projetos -</h2>

        <div className="container-grid">
          <div className="card">
            <h3>Lar Temporário</h3>
            <p>
              Programa de voluntariado que conecta pessoas dispostas a acolher animais temporariamente até
              encontrarem um lar definitivo.
            </p>
          </div>

          <div className="card">
            <h3>Educação com Patas</h3>
            <p>
              Projeto educativo que ensina empatia e respeito aos animais em escolas e comunidades.
            </p>
          </div>

          <div className="card">
            <h3>Adote com Amor</h3>
            <p>
              Campanha de adoção responsável com entrevistas e orientações sobre guarda responsável.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projetos

