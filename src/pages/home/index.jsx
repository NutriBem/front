import './home.css';

import nutriBem from '../../../public/logoNutriBem.svg';

export default function Home() {
    return(
        <div className="container_home">
            <div className="header">
                <div className='logo'>
                    <img src={nutriBem} alt="" />
                    <h1>NUTRIBEM</h1>
                </div>
                <div className='icon'>
                    
                </div>
            </div>
        </div>
    );
}