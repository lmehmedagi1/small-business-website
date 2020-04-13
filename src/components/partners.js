import React from 'react';
import { Helmet } from 'react-helmet';
import { List } from 'antd';
import Dell from '../res/Partneri/dellBP.png';
import Epson from '../res/Partneri/epson.jpg';
import HP from '../res/Partneri/hp.jpg';
import Lenovo from '../res/Partneri/lenovo.png';
import MC from '../res/Partneri/microsoftBP.png';
import PC from '../res/Partneri/pc.jpg';
import Xerox from '../res/Partneri/xeroxBP.jpg';



const newData =
    [
        {
            src: Dell,
            alt: "Dell",
            link: "https://www.dell.com"
        },
        {
            src: Epson,
            alt: "Epson",
            link: "https://www.epson.eu/"
        },
        {
            src: HP,
            alt: "HP",
            link: "https://www8.hp.com/us/en/home.html"
        },
        {
            src: Lenovo,
            alt: "Lenovo",
            link: "https://www.lenovo.com/us/en/"
        },
        {
            src: MC,
            alt: "Microsoft",
            link: "https://www.microsoft.com/bs-ba/"
        },
        {
            src: PC,
            alt: "Paper Cut",
            link: "https://www.papercut.com/"
        },
        {
            src: Xerox,
            alt: "Xerox",
            link: "https://www.xerox.com/"
        }
    ]
class References extends React.Component {

    state = {

        data: []
    }

    componentDidMount() {
        this.setState({ data: newData })
    }

    render() {
        return (
            <div>

                <Helmet>
                    <title> Pertneri | Facit</title>
                </Helmet>


                <h1  id = "naslov" > NAŠI PARTNERI
                <hr></hr>
                </h1>
          

                <div id="grid">
                    <div style={{ textAlign: 'center' }}>
                        <List
                            grid={{
                                gutter: 16,
                                column: 4,
                                justify: 'center'
                            }}

                            dataSource={this.state.data}
                            renderItem={item => (
                                <div id="reference" >
                                    <a href={item.link} target="_blank">
                                        <img id = "slika"  src={item.src} alt={item.alt} key={item.src} />
                                    </a>

                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>

        );
    }
};

export default References;