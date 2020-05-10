import React from 'react';
import Big from '../res/img1.jpg';
import Partneri from './partneri';
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Button } from 'antd';
import { List } from 'antd';

import Xerox from '../res/Partneri/xeroxBP.jpg';
import MC from '../res/Partneri/microsoftBP.png';
import Dell from '../res/Partneri/dellBP.png';

import USAID from '../res/Reference/USAID.png';
import mylan from '../res/Reference/mylan.jpg';
import unchr from '../res/Reference/unchr.png';
import banner from '../res/bannerHome.jpg';
import Map from '..//res/map.jpg'

import { storage } from '../firebase';

import {
    CalendarOutlined,
    SmileOutlined,
    PrinterOutlined,
    LaptopOutlined,
    FileDoneOutlined
} from '@ant-design/icons'



class Home extends React.Component {

    partneri = [
        {
            src: Dell,
            alt: "Dell",
            link: "https://www.dell.com"
        },
        {
            src: MC,
            alt: "Microsoft",
            link: "https://www.microsoft.com/bs-ba/"
        },
        {
            src: Xerox,
            alt: "Xerox",
            link: "https://www.xerox.com/"
        }
    ]

    reference = [
        {
            src: USAID,
            alt: "USAID",
            link: "https://www.usaid.gov/"
        }, {
            src: unchr,
            alt: "UNHCR",
            link: "https://www.unhcr.org/"
        },
        {
            src: mylan,
            alt: "MYLAN",
            link: "https://www.mylan.com/"
        }

    ]


    constructor(props) {
        super(props);
        this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
    }

    onVisibilityChange(isVisible) {
        if (isVisible) {
            startAnimation(this.myCountUp);
        }
    }

    onClick = () => {

        console.log("button radi");

        storage.ref().child("TP 2019-20 Predavanje 8_a.pdf").getDownloadURL().then(url => {

            window.open(url);
            console.log(url);
        })
    }

    render() {
        return (
            <div>

                <Helmet>
                    <title>Naslovna | Facit</title>
                </Helmet>


                <div id="typedText">
                    <img src={Big} alt="Big" style={{ width: '100%', filter: 'blur(3px)' }} />

                    <div id="typedTextContainer">
                        <div id="sloganText">
                            DIO VAŠEG TIMA
                        </div>
                        <div id="missionText">
                            Naša misija je da poslovne partnere učinimo zadovoljnijim, konkurentnijim i efikasnijim na tržištu.
                        </div>
                        <div id="typedTextWithCursor">
                            <Typed
                                strings={['Ukoliko to tražite, na pravom ste mjestu!']}
                                typeSpeed={40}
                                startDelay={2000}
                            />
                        </div>

                    </div>
                </div>



                <div id="gridStatistics">
                    <div className="gridColumnItem">
                        <div className="countUpStyle">
                            <CalendarOutlined />
                            <span>    </span>
                            <CountUp end={11} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <div className="countUpDescription">
                            Godina uspješnog poslovanja
                    </div>


                        {/*<div class="vl"></div>*/}
                    </div>



                    <div className="gridColumnItem">
                        <div className="countUpStyle">
                            <FileDoneOutlined />
                            <span>    </span>
                            <CountUp end={350} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            +
                        </div>

                        <div className="countUpDescription">
                            uspješno riješenih servisnih zahtjeva mjesečno
                        </div>
                    </div>

                    <div className="gridColumnItem">
                        <div className="countUpStyle">
                            <SmileOutlined />
                            <span>    </span>
                            <CountUp end={1154} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>

                        <div className="countUpDescription">
                            zadovoljnih klijenata
                        </div>

                    </div>


                    <div className="gridColumnItem">
                        <div className="countUpStyle">

                            <LaptopOutlined />
                            <span>    </span>
                            <CountUp end={50000} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        +
                        </div>

                        <div className="countUpDescription">
                            isporučenih računara, laptopa i multifunkcionih printera
                        </div>

                    </div>


                    <div className="gridColumnItem">
                        <div className="countUpStyle">
                            <PrinterOutlined />
                            <span>    </span>
                            <CountUp end={50} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            +
                        </div>

                        <div className="countUpDescription">
                            aktivnih produkcijskih uređaja na projektima rente
                        </div>

                    </div>
                </div>


                <div id="showAllButton" style={{marginTop: '35px'}}>
                        <Button id="dugme" type="primary" onClick={() => {this.onClick(); }}>SKINI TP PDF</Button>
                    </div>

                <div id="partneriHome">
                    <h1 style={{ textAlign: 'center' }}> NAŠI PARTNERI</h1>
                    <div id="gride">
                        <div style={{ textAlign: 'center' }}>
                            <List
                                grid={{
                                    gutter: 16,
                                    column: 9,
                                    justify: 'center'
                                }}

                                dataSource={this.partneri}
                                renderItem={item => (
                                    <div id="referenca" >
                                        <a href={item.link} target="_blank">
                                            <img id="slike" src={item.src} alt={item.alt} key={item.src} />
                                        </a>

                                    </div>
                                )}
                            />
                        </div>
                    </div>


                    <div id="showAllButton">
                        <Button id="dugme" type="primary" onClick={() => { window.location.href = '/partners' }}>Prikaži sve</Button>
                    </div>


                    <div style = {{marginTop: '5%', marginBottom: '5%'}}>
                        <img src={banner} alt="Banner" style={{ width: '100%', filter: 'blur(3px)' }} />
                    </div>

                </div>

                <div id="referenceHome">

                    <h1 style={{ textAlign: 'center' }}> NAŠE REFERENCE</h1>
                    <div id="gride">
                        <div style={{ textAlign: 'center' }}>
                            <List
                                grid={{
                                    gutter: 9,
                                    column: 3,
                                    justify: 'center'
                                }}

                                dataSource={this.reference}
                                renderItem={item => (
                                    <div id="referenca" >
                                        <a href={item.link} target="_blank">
                                            <img id="slike" src={item.src} alt={item.alt} key={item.src} />
                                        </a>

                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div id="showAllButton">
                        <Button id="dugme" type="primary" onClick={() => { window.location.href = '/references' }}>Prikaži sve</Button>
                    </div>

                </div>

                <a style={{ marginLeft: '10%' }} target="_blank" href="https://www.google.com/maps/place/Facit+d.o.o./@43.8408702,18.3325361,17z/data=!4m5!3m4!1s0x4758c929efc7f57d:0xe752e9e3a5f54102!8m2!3d43.8408818!4d18.3315383">
                    <div style = {{marginTop: '5%'}}>
                        <img src={Map} alt="Lokacija" style={{ width: '100%'}} />
                    </div>

                </a>
                

            </div>

        );
    }
};

export default Home;