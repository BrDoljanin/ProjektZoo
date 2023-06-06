import { useState } from 'react';
import Pantera from '../Slike/pantera.jpg';
import Panteraa from '../Slike/panteraa.jpg';
import '../styles.css';
import Props from "./Props";
export default function Zivotinja() {
    const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
    return (
      <div className="nav">
        <div className="border">
        <h1>Zoološki vrt Osijek</h1>
        <h5>Bruno Doljanin g2P</h5>
        </div>
        <div className='zeleno'>
        <h1 className='pozor'>POZOR!</h1>
            <h3 className='tekstt'>U četvrtak nam je došla nova pantera, i trebamo baš VAŠU pomoć. Trebate nam pomoći da ju imenujemo. Zapišite ime kako bih htjeli da se zove!</h3>
            <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
        /> 
            <Props ime={message} />
           
        <table>
            <tr>
                <td>
                    <img src={Pantera} className='slikica'></img>
                </td>
                <td>
                    <img src={Panteraa} className='slikica'></img>
                </td>
            </tr>
        </table>
            
        </div>
      </div>
    );
  }
  
