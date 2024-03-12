import "./Footer.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer >
            <div className="footer-row">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-3">
                            "X" <br /> "Y"
                        </div>
                        <div className="col col-md-3 m-top-sm-m">
                            "X@.it" <br />
                        </div>
                        <div className="col col-md-3 m-top-sm-m">
                            "t." <br /> "f."
                        </div>
                        <div className="col col-md-3 align-right align-central-sm m-top-sm-m">
                                <FontAwesomeIcon className="facebook" icon={faFacebook} />
                                <FontAwesomeIcon className="instagram" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div> 
            <div className="footer-row1">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-3">
                            "X" <br /> "Y"
                        </div>
                        <div className="col col-md-3 m-top-sm-m">
                            "X@.it" <br />
                        </div>
                        <div className="col col-md-3 m-top-sm-m">
                            
                        </div>
                        <div className="col col-md-3 align-right align-central-sm m-top-sm-m">
                                "x"
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    );
}

export default Footer;
