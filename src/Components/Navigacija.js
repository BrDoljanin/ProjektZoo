import { Link } from "react-router-dom";
import Slika from "../Slike/zoo.png";

export default function Navigacija() {
  return (
    <div className="nav">
      <table>
        <tbody>
          <tr>
            <td className="prvo">
              <img src={Slika} className="logo"></img>
            </td>
            <td>
              <Link to="/" className="link1">Naslovna</Link>
            </td>
            <td>
              <Link to="/vrijeme" className="link1">Radno Vrijeme</Link>
            </td>
            <td><Link to="/zivotinja" className="link1 link2">NOVA ŽIVOTINJA!</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
