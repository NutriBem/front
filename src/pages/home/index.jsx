import './home.css';
import './home.js';
import { images, icons, logos } from '../../config/assets'
import nutriBem from '../../../public/logoNutriBem.svg';
import insta from '../../../public/assets/images/customer/instagram_2.png';
import linkedin from '../../../public/assets/images/customer/message.png';
import youtube from '../../../public/assets/images/customer/youtube_2.png';
import carrossel from '../../../public/assets/images/customer/Carrossel.jpeg';
import gastrointestinais from '../../../public/assets/images/customer/Gastrointestinais.jpg';
import metabolica from '../../../public/assets/images/customer/Metabolica.jpg';
import obesidade from '../../../public/assets/images/customer/Obesidade.jpg';
import oncologia from '../../../public/assets/images/customer/Oncologia.jpeg';
import esporte from '../../../public/assets/images/customer/Esporte.jpeg';
import hipocaloria from '../../../public/assets/images/customer/Hipocaloria.jpg';
import conversation from '../../../public/assets/images/customer/conversation.png';
import document from '../../../public/assets/images/customer/document.png';
import loupe from '../../../public/assets/images/customer/loupe.png';
import restaurant from '../../../public/assets/images/customer/restaurant.png';


export default function Home() {
    return (
        <div className="container_home">
            <div className="header">
                <div className='logo'>
                    <img src={logos.nutriBem} alt="" />
                </div>

                <p className='titulo'>NUTRIBEM</p>

                <div className='icon'>
                    <img src={images.instagram_2} alt="" />
                    <img src={images.instagram_2} alt="" />
                    <img src={images.youtube_2} alt="" />
                </div>

                <div className='login'>
                    <button id="login">Login</button>
                </div>

                <p>Agendamento</p>
            </div>

            <div className='carrossel'>
                <img src={images.Carrossel} alt="" />
                <h2>O caminho para o<br></br>
                    bem-estar começa aqui</h2>
            </div>

            <div className='tratamentoGrid'>
                <p className='titulo2'>Tratamentos</p>

                <a href='/gastrointestinais' className='card'>
                    <img src={gastrointestinais} alt="" />
                    <p>Gastrointestinais</p>
                </a>

                <a href='/metabolica' className='card'>
                    <img src={metabolica} alt="" />
                    <p>Metabólica</p>
                </a>

                <a href='/obesidade' className='card'>
                    <img src={obesidade} alt="" />
                    <p>Obsidade</p>
                </a>

                <a href='/oncologia' className='card'>
                    <img src={oncologia} alt="" />
                    <p>Oncologia</p>
                </a>

                <a href='/esposte' className='card'>
                    <img src={esporte} alt="" />
                    <p>Esporte</p>
                </a>

                <a href='/hipocaloria' className='card'>
                    <img src={hipocaloria} alt="" />
                    <p>Hipocaloria</p>
                </a>
            </div>

            <div className='calculo_imc'>
                <h2>
                    Calcule seu <strong>ÍNDICE DE MASSA CORPORAL - IMC</strong>
                </h2>

                <div className='imc_container'>
                    <div className='calcular_imc'>
                        <h3>Cálculo de IMC</h3>
                        <p>Para um cálculo preciso, precisamos de algumas informações básicas sobre você</p>

                        <div className="etapas">
                            <div className="etapa"><span>1</span> Você é</div>
                            <div className="etapa"><span>2</span> Qual é a sua idade?</div>
                            <div className="etapa"><span>3</span> Qual é a sua altura?</div>
                            <div className="etapa"><span>4</span> Qual é o seu peso?</div>
                        </div>

                        <div className="inputs">
                            <input type="number" placeholder="Idade" />
                            <input type="text" placeholder="Altura (cm)" />
                            <input type="text" placeholder="Peso (kg)" />
                        </div>

                        <button>Calcule seu IMC</button>

                    </div>

                    <div  className='imc_estado'>
                        <h3>Estado Nutricional</h3>
                        <p><strong>ADULTOS - Se o seu RESULTADO de IMC deu:</strong></p>
                        <ul  className="estado-lista">
                            <li>
                                <div  className="estado-item">
                                    <span>Menos que 18,5 kg/m² <span  className="amarelo">ABAIXO DO PESO</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com o PESO BAIXO do recomendado.Atenção!</strong>
                                    <br></br>Procure sua Unidade de Saúde para uma avaliação integral de sua saúde e,
                                    agendamento com profissional nutricionista, pois ele orientará quanto à alimentação
                                    para o ganho de peso saudável!
                                    <br></br>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.

                                </div>
                            </li>
                            <li>
                                <div  className="estado-item">
                                    <span>Entre 18,5 e 24,9 kg/m² <span  className="verde">PESO SAUDÁVEL</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com o peso ADEQUADO. Continue assim!</strong>
                                    <p>Para se manter nesse perfil, permaneça com bons hábitos alimentares e seja fisicamente ativo.</p>
                                    <p>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.</p>

                                </div>
                            </li>
                            <li>
                                <div  className="estado-item">
                                    <span>Entre 25 e 29,9 kg/m² <span  className="vermelho">SOBREPESO</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com SOBREPESO. Atenção!</strong>
                                    <p>Participe de ações de promoção da Saúde e prevenção do excesso de peso, da unidade de saúde mais
                                        perto de sua casa.</p>
                                    <p>O sobrepeso e obesidade não são resolvidos apenas com força de vontade e muita gente tem dificuldade
                                        para reduzir seu peso corporal. As unidades básicas de saúde possuem profissionais que podem te ajudar,
                                        como médico, enfermeiro, nutricionista, psicólogo, profissional de educação física, entre outros.</p>
                                    <p>LEMBRE-SE: Perdas modestas de 5 a 10% do peso corporal pode melhorar a saúde de forma geral e ajudar no
                                        controle das complicações relacionadas ao sobrepeso e obesidade.</p>
                                    <p>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.</p>

                                </div>
                            </li>
                            <li>
                                <div  className="estado-item">
                                    <span>Entre 30 e 34,9kg/m² <span  className="rosa">OBESIDADE GRAU 1</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com OBESIDADE GRAU 1. Procure apoio.</strong>
                                    <p>A obesidade pode contribuir para o comprometimento da saúde das pessoas e também é 
                                    um fator de risco para outras doenças.</p>
                                    <p>Fique atento a outros sinais de doenças associadas e busque a ajuda profissional.</p>
                                    <p>Participe de ações de promoção da Saúde e prevenção do excesso de peso, da unidade de 
                                    saúde mais perto de sua casa.</p>
                                    <p>Converse com sua equipe sobre a necessidade de uma atenção individual e apoio de serviços especializados.</p>
                                    <p>O sobrepeso e obesidade não são resolvidos apenas com força de vontade e muita gente tem 
                                    dificuldade para reduzir seu peso corporal. As unidades básicas de saúde possuem profissionais 
                                    que podem te ajudar, como médico, enfermeiro, nutricionista, psicólogo, profissional de educação física, 
                                    entre outros.</p>
                                    <p>LEMBRE-SE: Perdas modestas de 5 a 10% do peso corporal pode melhorar a saúde de forma geral e ajudar 
                                    no controle das complicações relacionadas ao sobrepeso e obesidade. O tratamento da obesidade precisa 
                                    ser de longa duração.</p>
                                    <p>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.</p>

                                </div>
                            </li>
                            <li>
                                <div  className="estado-item">
                                    <span>Entre 35 e 39,9kg/m² <span  className="rosa">OBESIDADE GRAU 2</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com OBESIDADE GRAU 1. Procure apoio.</strong>
                                    <p>A obesidade pode contribuir para o comprometimento da saúde das pessoas e também é 
                                    um fator de risco para outras doenças.</p>
                                    <p>Fique atento a outros sinais de doenças associadas e busque a ajuda profissional.</p>
                                    <p>Participe de ações de promoção da Saúde e prevenção do excesso de peso, da unidade de 
                                    saúde mais perto de sua casa.</p>
                                    <p>Converse com sua equipe sobre a necessidade de uma atenção individual e apoio de serviços especializados.</p>
                                    <p>O sobrepeso e obesidade não são resolvidos apenas com força de vontade e muita gente tem 
                                    dificuldade para reduzir seu peso corporal. As unidades básicas de saúde possuem profissionais 
                                    que podem te ajudar, como médico, enfermeiro, nutricionista, psicólogo, profissional de educação física, 
                                    entre outros.</p>
                                    <p>LEMBRE-SE: Perdas modestas de 5 a 10% do peso corporal pode melhorar a saúde de forma geral e ajudar 
                                    no controle das complicações relacionadas ao sobrepeso e obesidade. O tratamento da obesidade precisa 
                                    ser de longa duração.</p>
                                    <p>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.</p>

                                </div>
                            </li>
                            <li>
                                <div  className="estado-item">
                                    <span>Acima de 40 kg/m² <span  className="rosa">OBESIDADE GRAU 3</span></span>
                                    <button  className="toggle-btn">+</button>
                                </div>
                                <div  className="info">

                                    <strong>Você está com OBESIDADE GRAU 1. Procure apoio.</strong>
                                    <p>A obesidade pode contribuir para o comprometimento da saúde das pessoas e também é 
                                    um fator de risco para outras doenças.</p>
                                    <p>Fique atento a outros sinais de doenças associadas e busque a ajuda profissional.</p>
                                    <p>Participe de ações de promoção da Saúde e prevenção do excesso de peso, da unidade de 
                                    saúde mais perto de sua casa.</p>
                                    <p>Converse com sua equipe sobre a necessidade de uma atenção individual e apoio de serviços especializados.</p>
                                    <p>O sobrepeso e obesidade não são resolvidos apenas com força de vontade e muita gente tem 
                                    dificuldade para reduzir seu peso corporal. As unidades básicas de saúde possuem profissionais 
                                    que podem te ajudar, como médico, enfermeiro, nutricionista, psicólogo, profissional de educação física, 
                                    entre outros.</p>
                                    <p>LEMBRE-SE: Perdas modestas de 5 a 10% do peso corporal pode melhorar a saúde de forma geral e ajudar 
                                    no controle das complicações relacionadas ao sobrepeso e obesidade. O tratamento da obesidade precisa 
                                    ser de longa duração.</p>
                                    <p>Clique no Link abaixo e saiba como ter uma alimentação mais saudável.</p>

                                </div>
                            </li>
                            
                        </ul>

                    </div>

                </div>

            </div>

            <div className='timeline'>
                <h2>Passo a Passo</h2>

                <div className='step'>
                    <div className='circulo claro'>01</div>
                    <div className='info_box_claro'>
                        <p>Você será contatado para avaliação 
                        do seu objetivo, rotina, preferências 
                        e restrições.</p>
                        <img src={document} alt="" />   
                    </div>
                </div>

                <div class="line"></div>

                 <div className='step'>
                    <div className='circulo escuro'>02</div>
                    <div className='info_box_escuro'>
                        <p>A nutricionista analisará sua 
                        avliação e criará um plano
                        de fases e estratégias.</p>
                        <img src={loupe} alt="" />   
                    </div>
                </div>

                <div class="line"></div>

                <div className='step'>
                    <div className='circulo claro'>03</div>
                    <div className='info_box_claro'>
                        <p>Será gravado o vídeo de 
                        orientações e elaborado o
                        seu programa alimentar 
                        para os próximos 30 dias .</p>
                        <img src={restaurant} alt="" />   
                    </div>
                </div>

                <div class="line"></div>

                <div className='step'>
                    <div className='circulo escuro'>04</div>
                    <div className='info_box_escuro'>
                        <p>Você ficará em contato com 
                        a nutricionista para
                        dúvidas e adaptações.</p>
                        <img src={conversation} alt="" />   
                    </div>
                </div>

            </div>
        </div>
    );
}