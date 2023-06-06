import "../styles.css";
import Slon from "../Slike/slon.jpg";
import Poplava from "../Slike/poplava.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="border">
        <h1>Zoološki vrt Osijek</h1>
        <h5>Bruno Doljanin g2P</h5>
      </div>
        <div className="gospa">
          <h1 className="razmak">Upoznajte nas</h1>
          <p className="tekstu">
            Na temelju zauzimanja Društva za osnivanje i razvoj ZOO-vrta Nadzorni
            odbor grada Osijeka je svojim Rješenjem od 24. siječnja 1955. godine
            osnovao ZOOLOŠKI VRT GRADA OSIJEKA sa sjedištem u Osijeku - Tvrđavica.
            Novoosnovana ustanova upisana je u Registar ustanova sa samostalnim
            financiranjem na temelju Rješenja Narodnog odbora općine Osijek Gornji
            grad od 10. studenoga 1955. godine. Ustanovom je upravljao Upravni
            odbor kao kolektivni organ upravljanja čije je članove svake godine
            postavljao Odsjek za komunalne poslove grada Osijeka. Za prvog
            upravitelja, a potom i direktora, postavljen je Ivan Bulant, za
            tehničkog upravitelja Nikola Borojević, a za knjigovođu Vjekoslav
            Furman.
          </p>
          <img src={Slon} className="slikaslon"></img>
          <img src={Poplava} className="poplava" />
          <p className="tekstuu">
            Izjava o misiji Zoo-vrta Osijek predstavlja dio glavnih smjernica
            zoološke biologije. Svaki član osoblja će je slijediti i iznositi
            prema posjetiteljima i javnosti. Osoblje je svjesno sljedećih
            činjenica:
            <ul>
              <li>Zoo je mjesto za rekreaciju</li>
              <li>Zoo je mjesto za edukaciju</li>
              <li>Zoo je mjesto za istraživanje</li>
              <li>Zoo je mjesto za aktivnosti zaštite vrsta</li>
            </ul>
          </p>
        </div>
        
    </div>
  );
}
