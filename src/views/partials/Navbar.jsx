import "./Navbar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <header>
            <nav>
                <ul className="page-links">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">X</a></li>
                    <li className="link"><a href="#">X</a></li>
                    <li className="link"><a href="#">X</a></li>
                    <li className="link"><a href="#">X</a></li>
                    <li className="link"><a href="#">X</a></li>
                    <li className="link">
                        <FontAwesomeIcon className="youtube" icon={faYoutube} />
                    </li>
                    <li className="link">
                        <div className="translation-buttons">translate</div>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Navbar;
