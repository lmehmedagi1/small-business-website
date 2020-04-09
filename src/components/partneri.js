import React from 'react';
import Xerox from '../res/xeroxBP.jpg';
import Canon from '../res/canonBP.jfif';
import Kyocera from '../res/kyoceraBP.png';


const Partneri = () => {
    return (
        <div style={{ textAlign: 'center', padding: '10px', marginTop: '10px' }}>
            
            <h1> NAŠI PARTNERI </h1>

            <div id="partneri">
                <a href="https://www.xerox.com/" target="_blank">
                    <img src={Xerox} alt="Xerox" />
                </a>

                <a href ="https://europe.kyocera.com/" target="_blank">
                <img src={Kyocera} alt="Kyocera" />
                </a>

                <a href ="https://www.canon.ba/" target="_blank">
                <img src={Canon} alt="Canon" />
                </a>

               

            </div>

        </div>
    )
}

export default Partneri