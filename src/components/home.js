import React from 'react';
import MyMap from './myMap';
import Help from './help';
import Big from '../res/img1.jpg'
import Xerox from '../res/xeroxAuthorizedSP.jpg';
import Partneri from './partneri'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div >
                    <img src={Big} alt="Big" style={{ width: '100%' }} />
                </div>

                <Partneri />

                <div style={{ textAlign: 'center', width: '100%' }}>

                </div>

            </div>

        );
    }
};

export default Home;