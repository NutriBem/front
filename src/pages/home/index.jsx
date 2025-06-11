import './home.css';
import { images } from '../../config/assets'
import { useState } from 'react';
import Header from '../../components/cabecalhoUser/cabecalhoUser'

export default function Home() {
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [visibleIndex, setVisibleIndex] = useState(null);

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura) / 100;
        const pesoFloat = parseFloat(peso);

        if (!alturaMetros || !pesoFloat || alturaMetros <= 0) {
            alert('Preencha todos os campos corretamente.');
            return;
        }

        const imcCalculado = pesoFloat / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(1));

        if (imcCalculado < 18.5) setVisibleIndex(0);
        else if (imcCalculado < 25) setVisibleIndex(1);
        else if (imcCalculado < 30) setVisibleIndex(2);
        else if (imcCalculado < 35) setVisibleIndex(3);
        else if (imcCalculado < 40) setVisibleIndex(4);
        else setVisibleIndex(5);
    };

    return (
        <div className="container_home">

            <Header />

            <div className='carrossel'>
                <img src={images.Carrossel} alt="" />
                <h2>O caminho para o<br></br>
                    bem-estar começa aqui</h2>
            </div>

            {/* Treatments Grid */}
      <section className="treatments-section">
        <div className="section-header">
          <h2>Nossos Tratamentos</h2>
          <p className="section-subtitle">
            Cuidados especializados para cada necessidade
          </p>
        </div>

        <div className="tratamentoGrid">
          <a href="/gastrointestinais" className="treatment-card">
            <div className="card-icon">
              <img src={images.Gastrointestinais} alt="Gastrointestinais" />
            </div>
            <h3>Gastrointestinais</h3>
            <p>Problemas digestivos e intestinais</p>
          </a>

          <a href="/metabolica" className="treatment-card">
            <div className="card-icon">
              <img src={images.Metabolica} alt="Metabólica" />
            </div>
            <h3>Metabólica</h3>
            <p>Distúrbios do metabolismo</p>
          </a>

          <a href="/obesidade" className="treatment-card">
            <div className="card-icon">
              <img src={images.Obesidade} alt="Obesidade" />
            </div>
            <h3>Obesidade</h3>
            <p>Controle e redução de peso</p>
          </a>

          <a href="/oncologia" className="treatment-card">
            <div className="card-icon">
              <img src={images.Oncologia} alt="Oncologia" />
            </div>
            <h3>Oncologia</h3>
            <p>Acompanhamento nutricional</p>
          </a>

          <a href="/esposte" className="treatment-card">
            <div className="card-icon">
              <img src={images.Esporte} alt="Esporte" />
            </div>
            <h3>Esporte</h3>
            <p>Nutrição para atletas</p>
          </a>

          <a href="/hipocaloria" className="treatment-card">
            <div className="card-icon">
              <img src={images.Hipocaloria} alt="Hipocaloria" />
            </div>
            <h3>Hipocaloria</h3>
            <p>Dietas de baixa caloria</p>
          </a>
        </div>
      </section>

      {/* IMC Calculator */}
      <section className="imc-section">
        <div className="section-header">
          <h2>Calcule seu Índice de Massa Corporal</h2>
          <p className="section-subtitle">
            Descubra seu estado nutricional em poucos passos
          </p>
        </div>

        <div className="imc-container">
          <div className="calculator-card">
            <div className="calculator-header">
              <h3>Cálculo de IMC</h3>
              <p>Preencha seus dados para obter um resultado preciso</p>
            </div>

            <div className="input-group">
              <label htmlFor="idade">Idade</label>
              <input
                id="idade"
                type="number"
                placeholder="Ex: 30"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="altura">Altura (cm)</label>
              <input
                id="altura"
                type="number"
                placeholder="Ex: 175"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="peso">Peso (kg)</label>
              <input
                id="peso"
                type="number"
                placeholder="Ex: 70"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>

            <button className="calculate-btn" onClick={calcularIMC}>
              Calcular IMC
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {imc && (
              <div className="result-container">
                <h4>
                  Seu IMC é: <span>{imc}</span>
                </h4>
                <p>
                  Classificação:{" "}
                  {
                    [
                      "Abaixo do peso",
                      "Peso saudável",
                      "Sobrepeso",
                      "Obesidade Grau 1",
                      "Obesidade Grau 2",
                      "Obesidade Grau 3",
                    ][visibleIndex]
                  }
                </p>
              </div>
            )}
          </div>

          <div className="results-card">
            <h3>Classificação IMC</h3>
            <p>Veja a interpretação dos resultados</p>

            <div className="classification-list">
              {[
                {
                  range: "Menos que 18,5 kg/m²",
                  status: "ABAIXO DO PESO",
                  color: "#FFC107",
                  description:
                    "Você está com o PESO BAIXO do recomendado. Atenção! Procure sua Unidade de Saúde...",
                },
                {
                  range: "18,5 - 24,9 kg/m²",
                  status: "PESO SAUDÁVEL",
                  color: "#4CAF50",
                  description:
                    "Você está com o peso ADEQUADO. Continue assim! Para se manter nesse perfil...",
                },
                {
                  range: "25 - 29,9 kg/m²",
                  status: "SOBREPESO",
                  color: "#FF5722",
                  description:
                    "Você está com SOBREPESO. Atenção! Participe de ações de promoção da Saúde...",
                },
                {
                  range: "30 - 34,9 kg/m²",
                  status: "OBESIDADE GRAU 1",
                  color: "#F44336",
                  description:
                    "Você está com OBESIDADE GRAU 1. Procure apoio. A obesidade pode contribuir para o comprometimento...",
                },
                {
                  range: "35 - 39,9 kg/m²",
                  status: "OBESIDADE GRAU 2",
                  color: "#E91E63",
                  description:
                    "Você está com OBESIDADE GRAU 2. Procure apoio. A obesidade pode contribuir para o comprometimento...",
                },
                {
                  range: "Acima de 40 kg/m²",
                  status: "OBESIDADE GRAU 3",
                  color: "#9C27B0",
                  description:
                    "Você está com OBESIDADE GRAU 3. Procure apoio. A obesidade pode contribuir para o comprometimento...",
                },
              ].map((item, index) => (
                <div key={index} className="classification-item">
                  <div
                    className="classification-header"
                    onClick={() =>
                      setVisibleIndex(visibleIndex === index ? null : index)
                    }
                  >
                    <div
                      className="status-indicator"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="status-info">
                      <span className="range">{item.range}</span>
                      <span className="status" style={{ color: item.color }}>
                        {item.status}
                      </span>
                    </div>
                    <button className="toggle-btn">
                      {visibleIndex === index ? (
                        <svg
                          width="16"
                          height="2"
                          viewBox="0 0 16 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H15"
                            stroke="#01261F"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1V15M1 8H15"
                            stroke="#01261F"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {visibleIndex === index && (
                    <div className="classification-details">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            <div className='passo'>
                <img src={images.passo} />
            </div>

            <div className="footer-container">
                <div className="footer-logo-social">
                    <h2 className="logo">NUTRIBEM</h2>
                    <div className="social-icons">
                        <a href="#"><img src={images.instagram_2} /></a>
                        <a href="#"><img src={images.linkedin} /></a>
                        <a href="#"><img src={images.youtube_2} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Privacidade e Segurança</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Central de Ajuda</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Formas de Pagamento</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Atendimento</h3>
                    <p><strong>Telefone:</strong> (11) 91234-5678</p>
                    <p><strong>E-mail:</strong> nutribem@outlook.com.br</p>
                    <p><strong>Horário de atendimento:</strong><br />
                        Segunda a Sexta: 08h00 às 18h00</p>
                </div>
            </div>
        </div>
    );
}