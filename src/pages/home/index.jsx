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

            <div className='tratamentoGrid'>
                <p className='titulo2'>Tratamentos</p>

                <a href='/gastrointestinais' className='card'>
                    <img src={images.Gastrointestinais} alt="" />
                    <p>Gastrointestinais</p>
                </a>

                <a href='/metabolica' className='card'>
                    <img src={images.Metabolica} alt="" />
                    <p>Metabólica</p>
                </a>

                <a href='/obesidade' className='card'>
                    <img src={images.Obesidade} alt="" />
                    <p>Obsidade</p>
                </a>

                <a href='/oncologia' className='card'>
                    <img src={images.Oncologia} alt="" />
                    <p>Oncologia</p>
                </a>

                <a href='/esposte' className='card'>
                    <img src={images.Esporte} alt="" />
                    <p>Esporte</p>
                </a>

                <a href='/hipocaloria' className='card'>
                    <img src={images.Hipocaloria} alt="" />
                    <p>Hipocaloria</p>
                </a>
            </div>

            <div className='calculo_imc'>
                <h2>
                    Calcule seu ÍNDICE DE MASSA CORPORAL - IMC
                </h2>

                <div className="imc_container">
                    <div className="calcular_imc">
                        <h3>Cálculo de IMC</h3>
                        <p style={{ fontFamily: "Inter", margin: "10px" }}>
                            Para um cálculo preciso, precisamos de algumas informações básicas sobre você
                        </p>

                        <div className="etapas">
                            <div className="etapa"><span>1</span> Você é</div>
                            <div className="etapa"><span>2</span> Qual é a sua idade?</div>
                            <div className="etapa"><span>3</span> Qual é a sua altura?</div>
                            <div className="etapa"><span>4</span> Qual é o seu peso?</div>
                        </div>

                        <div className="inputs">
                            <input
                                type="number"
                                placeholder="Idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Altura (cm)"
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Peso (kg)"
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>

                        <button onClick={calcularIMC}>Calcule seu IMC</button>

                        {imc && (
                            <div className="resultado-imc">
                                <h4>Seu IMC é: {imc}</h4>
                            </div>
                        )}
                    </div>

                    <div className="imc_estado">
                        <h3>Estado Nutricional</h3>
                        <p style={{ fontFamily: "inter" }}>Resultado de IMC:</p>
                        <ul className="estado-lista" style={{ fontFamily: "Inter, sans-serif" }}>
                            {[
                                {
                                    faixa: 'Menos que 18,5 kg/m²',
                                    classe: 'amarelo',
                                    titulo: 'ABAIXO DO PESO',
                                    texto: 'Você está com o PESO BAIXO do recomendado. Atenção! Procure sua Unidade de Saúde...'
                                },
                                {
                                    faixa: 'Entre 18,5 e 24,9 kg/m²',
                                    classe: 'verde',
                                    titulo: 'PESO SAUDÁVEL',
                                    texto: 'Você está com o peso ADEQUADO. Continue assim! Para se manter nesse perfil...'
                                },
                                {
                                    faixa: 'Entre 25 e 29,9 kg/m²',
                                    classe: 'vermelho',
                                    titulo: 'SOBREPESO',
                                    texto: 'Você está com SOBREPESO. Atenção! Participe de ações de promoção da Saúde...'
                                },
                                {
                                    faixa: 'Entre 30 e 34,9kg/m²',
                                    classe: 'rosa',
                                    titulo: 'OBESIDADE GRAU 1',
                                    texto: 'Você está com OBESIDADE GRAU 1. Procure apoio. A obesidade pode contribuir para o comprometimento...'
                                },
                                {
                                    faixa: 'Entre 35 e 39,9kg/m²',
                                    classe: 'rosa',
                                    titulo: 'OBESIDADE GRAU 2',
                                    texto: 'Você está com OBESIDADE GRAU 2. Procure apoio. A obesidade pode contribuir para o comprometimento...'
                                },
                                {
                                    faixa: 'Acima de 40 kg/m²',
                                    classe: 'rosa',
                                    titulo: 'OBESIDADE GRAU 3',
                                    texto: 'Você está com OBESIDADE GRAU 3. Procure apoio. A obesidade pode contribuir para o comprometimento...'
                                }
                            ].map((item, index) => (
                                <li key={index}>
                                    <div className="estado-item">
                                        <span>
                                            {item.faixa}{' '}
                                            <span className={item.classe}>{item.titulo}</span>
                                        </span>
                                        <button onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}>
                                            {visibleIndex === index ? '-' : '+'}
                                        </button>
                                    </div>
                                    {visibleIndex === index && (
                                        <div className="info">
                                            <p>{item.texto}</p>
                                            <p>
                                                <a href="#link">Clique aqui para saber como ter uma alimentação mais saudável</a>
                                            </p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>

            <div className='passo'>
                <img src={images.passo} />
            </div>

            <div class="footer-container">
                <div class="footer-logo-social">
                    <h2 class="logo">NUTRIBEM</h2>
                    <div class="social-icons">
                        <a href="#"><img src={images.instagram_2} /></a>
                        <a href="#"><img src={images.linkedin} /></a>
                        <a href="#"><img src={images.youtube_2} /></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Institucional</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Privacidade e Segurança</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Central de Ajuda</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Fale Conosco</a></li>
                        <li><a href="#">Formas de Pagamento</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Atendimento</h3>
                    <p><strong>Telefone:</strong> (11) 91234-5678</p>
                    <p><strong>E-mail:</strong> nutribem@outlook.com.br</p>
                    <p><strong>Horário de atendimento:</strong><br />
                        Segunda a Sexta: 08h00 às 18h00</p>
                </div>
            </div>

            {/* <div class="footer-payments">
                <img src="amex.png" alt="Amex">
                <img src="mastercard.png" alt="MasterCard">
                <img src="visa.png" alt="Visa">
                <img src="hipercard.png" alt="Hipercard">
                <img src="elo.png" alt="Elo">
                <img src="paypal.png" alt="PayPal">
                <img src="pix.png" alt="PIX">
                <img src="barcode.png" alt="Boleto">
            </div> */}

        </div>
    );
}