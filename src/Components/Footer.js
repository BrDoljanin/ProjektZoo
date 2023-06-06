import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <div className="footer">
        <div className="footerlivo">
            <h2 className="ispoda">Kontaktirajte nas</h2>
            <br/>
            <ul className="tekst">
                <li>Tvrđavica 1, Osijek</li>
                <li>tel: 031/ 285 234</li>
                <li><Link to="https://www.facebook.com/zooloskivrtosijek/">Posjetite facebook</Link></li>
                <li>e-mail: info@zoo-osijek.hr</li>
            </ul>
        </div>
        <div className="makni">
            <h2 className="ispod">Posjetite nas</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.0867073038157!2d18.66496481225685!3d45.56869492633921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce712ce0e4185%3A0x98a0d20aba0d86bc!2sZoo%20Osijek!5e0!3m2!1sen!2shr!4v1686021609130!5m2!1sen!2shr" width="800px" height="400px"></iframe>
        </div>
   
        <div className="copy">
            <p className="copyright">Sva prava zadržana, Bruno Doljanin, 2023</p>
            </div>
        
      </div>
    );
  }