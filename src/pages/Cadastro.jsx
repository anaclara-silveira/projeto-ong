import { useState } from 'react'
import './Cadastro.css'

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    nascimento: '',
    endereco: '',
    cep: '',
    cidade: '',
    estado: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validações
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    const regexTelefone = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/
    const regexCEP = /^\d{5}-\d{3}$/

    if (!formData.nome) newErrors.nome = 'Nome é obrigatório'
    if (!formData.email) newErrors.email = 'E-mail é obrigatório'
    if (!regexCPF.test(formData.cpf)) newErrors.cpf = 'CPF inválido. Use o formato 000.000.000-00'
    if (!regexTelefone.test(formData.telefone)) newErrors.telefone = 'Telefone inválido. Use o formato (00) 00000-0000'
    if (!formData.nascimento) newErrors.nascimento = 'Data de nascimento é obrigatória'
    if (!formData.endereco) newErrors.endereco = 'Endereço é obrigatório'
    if (!regexCEP.test(formData.cep)) newErrors.cep = 'CEP inválido. Use o formato 00000-000'
    if (!formData.cidade) newErrors.cidade = 'Cidade é obrigatória'
    if (!formData.estado) newErrors.estado = 'Estado é obrigatório'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      alert('Cadastro enviado com sucesso!')
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        nascimento: '',
        endereco: '',
        cep: '',
        cidade: '',
        estado: ''
      })
    } else {
      alert('Por favor, corrija os erros no formulário.')
    }
  }

  return (
    <div className="cadastro-page">
      <main>
        <div className="fundo-formulario">
          <form className="formulario" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informações Pessoais</legend>

              <label htmlFor="nome">Nome Completo:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
              {errors.nome && <span className="error">{errors.nome}</span>}

              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
              />
              {errors.cpf && <span className="error">{errors.cpf}</span>}

              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
              {errors.telefone && <span className="error">{errors.telefone}</span>}

              <label htmlFor="nascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleChange}
              />
              {errors.nascimento && <span className="error">{errors.nascimento}</span>}
            </fieldset>

            <fieldset>
              <legend>Endereço</legend>

              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
              />
              {errors.endereco && <span className="error">{errors.endereco}</span>}

              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                placeholder="00000-000"
              />
              {errors.cep && <span className="error">{errors.cep}</span>}

              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
              {errors.cidade && <span className="error">{errors.cidade}</span>}

              <label htmlFor="estado">Estado:</label>
              <select
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              {errors.estado && <span className="error">{errors.estado}</span>}
            </fieldset>

            <br />
            <input type="submit" value="Enviar Cadastro" />
          </form>
        </div>
      </main>
    </div>
  )
}

export default Cadastro

