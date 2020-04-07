import React from 'react';
import MyMap from './myMap';
import Help from './help';
import Big from '../res/img1.jpg'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div >
                   <img src={Big} alt="Big" style = {{width: '100%'}}  />
                </div>
                <MyMap/>
            </div>

        );
    }
};

export default Home;