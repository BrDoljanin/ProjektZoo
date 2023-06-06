import "../styles.css";



export default function Vrijeme() {
  return (
    <div className="vrime">
      
      <div className="border">
        <h1>Zoološki vrt Osijek</h1>
        <h5>Bruno Doljanin g2P</h5>
      </div>
      <div className="bg">
        <div className="obale">
          
            <div className="livo">
              
                <h1 className="naaslov crta">Red plovidbe</h1>
                <div className="dobala">
                  <h4 >DESNA OBALA</h4>
                  <h3>POLAZAK</h3>
                  <p>09:00<br />
                    10:00<br />
                    11:00<br />
                    12:00<br />
                    13:00<br />
                    14:00<br />
                    15:00<br />
                    16:00<br />
                    17:00<br />
                  </p>
                </div>
                <div className="lobala">
                  <h4>LIJEVA OBALA</h4>
                  <h3>POLAZAK</h3>
                  <p>09:30<br />
                    10:30<br />
                    11:30<br />
                    12:30<br />
                    13:30<br />
                    14:30<br />
                    15:30<br />
                    16:30<br />
                    17:30<br />
                  </p>
                </div>
              
            </div>
            
           
          
        </div>
        <div className="obalee">
              <h1 className="naaslov crta">Radno Vrijeme</h1>
              <table className="vrime borderi">
                <tr className="borderi">
                  <td className="gurni borderi">God.doba</td>
                  <td className="gurnil borderi">Vrijeme</td>
                </tr>
                
                <tr className="borderi">
                  <td className="gurni borderi">Proljeće</td>
                  <td className="gurnil borderi">pon-sub <br /> 9:00-18:00</td>
                </tr>
                <tr className="borderi">
                  <td className="gurni borderi">Ljeto</td>
                  <td className="gurnil borderi">pon-ned <br /> 9:00-20:00</td>
                </tr>
                <tr className="borderi">
                  <td className="gurni borderi">Jesen</td>
                  <td className="gurnil borderi">pon-sub <br /> 9:00-19:00</td>
                </tr>
                <tr className="borderi">
                  <td className="gurni borderi">Zima</td>
                  <td className="gurnil borderi">pon-pet <br /> 9:00-16:00</td>
                </tr>
              </table>
            </div>
      </div>
     
    </div>
  );
}
