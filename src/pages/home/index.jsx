import './home.css';

import nutriBem from '../../../public/logoNutriBem.svg';
import insta from '../../../public/assets/images/customer/instagram_2.png';
import linkedin from '../../../public/assets/images/customer/message.png';
import youtube from '../../../public/assets/images/customer/youtube_2.png';
import carrossel from '../../../public/assets/images/customer/Carrossel.jpeg';


export default function Home() {
    return (
        <div className="container_home">
            <div className="header">
                <div className='logo'>
                    <img src={nutriBem} alt="" />
                </div>

                <h1>NUTRIBEM</h1>

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

                <p>O caminho para o<br></br>
                    bem-estar começa aqui</p>
            </div>

        </div>
    );
}