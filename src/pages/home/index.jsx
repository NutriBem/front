import './home.css';

import nutriBem from '../../../public/logoNutriBem.svg';

export default function Home() {
    return(
        <div className="container">
            <div className="header">
                <div>
                    <img src={nutriBem} alt="" />
                    <h1>NUTRIBEM</h1>
                </div>
            </div>
        </div>
    );
}