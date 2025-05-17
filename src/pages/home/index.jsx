import './home.css';

import nutriBem from '../../../public/logoNutriBem.svg';
import insta from '../../../public/assets/images/customer/instagram_2.png';
import linkedin from '../../../public/assets/images/customer/message.png';
import youtube from '../../../public/assets/images/customer/youtube_2.png';
import carrossel from '../../../public/assets/images/customer/Carrossel.jpeg';
import gastrointestinais from '../../../public/assets/images/customer/Gastrointestinais.jpg';
import metabolica from '../../../public/assets/images/customer/Metabolica.jpg';
import obesidade from '../../../public/assets/images/customer/Obesidade.jpg';


export default function Home() {
    return (
        <div className="container_home">
            <div className="header">
                <div className='logo'>
                    <img src={nutriBem} alt="" />
                </div>

                <p className='titulo'>NUTRIBEM</p>

                <div className='icon'>
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>

                <div className='login'>
                    <button id="login">Login</button>
                </div>

                <p>Agendamento</p>
            </div>

            <div className='carrossel'>
                <img src={carrossel} alt="" />
                <h2>O caminho para o<br></br>
                    bem-estar começa aqui</h2>
            </div>

            <div className='grid'>
                <p>Tratamentos</p>

                <div className='gastrointestinais'>
                    <img src={gastrointestinais} alt="" /> 
                    <p>Gastrointestinais</p>
                </div>

                <div className='metabolica'>
                    <img src={metabolica} alt="" />
                    <p>Metabólica</p>
                </div>

                <div className='obesidade'>
                    <img src={obesidade} alt="" />
                    <p>Obsidade</p>
                </div>
            </div>

        </div>
    );
}