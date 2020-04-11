import React from 'react';
import { Helmet } from 'react-helmet';
import { List } from 'antd';
import Xerox from '../res/xeroxBP.jpg';
import Canon from '../res/canonBP.jfif';
import Kyocera from '../res/kyoceraBP.png';

const myStyle = {

    width: '250px',
    height: '170px',
    margin: '20px',
    borderStyle: 'solid',
    borderColor: 'grey',
}

const References = () => {

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
        }
    ];

    return (
        <div>

            <Helmet>
                <title>Reference | Facit</title>
            </Helmet>


            <h1 style={{ textAlign: 'center' }}> NAŠE REFERENCE</h1>
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

export default References;