
import React from 'react';
import { List } from 'antd';
import { Helmet } from 'react-helmet';

import Xerox from '../res/xeroxBP.jpg';
import Canon from '../res/canonBP.jfif';
import Kyocera from '../res/kyoceraBP.png';
import Microsoft from '../res/microsoftBP.png';
import Dell from '../res/dellBP.png';


const myStyle = {

    width: '250px',
    height: '170px',
    margin: '20px',
    borderStyle: 'solid',
    borderColor: 'grey',
}


const Partners = () => {

    const data = [
        {
            render: () => (<a href="https://www.xerox.com/" target="_blank">
                <img style={myStyle} src={Xerox} alt="Xerox" />
            </a>)
        },
        {
            render: () => (<a href="https://europe.kyocera.com/" target="_blank">
                <img style={myStyle} src={Kyocera} alt="Kyocera" />
            </a>)
        },
        {
            render: () => (<a href="https://www.canon.ba/" target="_blank">
                <img style={myStyle} src={Canon} alt="Canon" />
            </a>
            )
        },
        {
            render: () => (<a href="https://www.microsoft.com/bs-ba" target="_blank">
                <img style={myStyle} src={Microsoft} alt="Microsoft" />
            </a>)
        },
        {
            render: () => (<a href="http://www1.euro.dell.com" target="_blank">
                <img style={myStyle} src={Dell} alt="Dell" />
            </a>)
        }
    ];

    return (
        <div>
            <Helmet>
                <title> Partneri | Facit </title>
            </Helmet>

            <h1 style={{ textAlign: 'center' }}> NAŠI PARTNERI</h1>

            <div id="grid">
                <div style={{ textAlign: 'center' }}>
                    <List
                        grid={{

                            gutter: 16,
                            column: 4,
                            justify: 'center'
                        }}

                        dataSource={data}

                        renderItem={item => (
                            <div id="reference" >
                                {item.render()}
                            </div>
                        )}
                    />
                </div>
            </div>

        </div>


    );
};

export default Partners;
