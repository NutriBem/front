import './home.css';

// import nutriBem from '../../../public/logoNutriBem.svg';
// import insta from '../../../public/assets/images/customer/instagram_2.png';
// import linkedin from '../../../public/assets/images/customer/message.png';
// import youtube from '../../../public/assets/images/customer/youtube_2.png';
// import carrossel from '../../../public/assets/images/customer/Carrossel.jpeg';

import { images, icons, logos } from '../../config/assets'


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

            <div className='grid'>
                <div></div>
            </div>

        </div>
    );
}