import React from 'react';
import Big from '../res/img1.jpg';
import Partneri from './partneri';
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Button } from 'antd';

import {
    CalendarOutlined,
    SmileOutlined,
    PrinterOutlined,
    LaptopOutlined,
    FileDoneOutlined
} from '@ant-design/icons'


class Home extends React.Component {


    constructor(props) {
        super(props);
        this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
    }

    onVisibilityChange(isVisible) {
        if (isVisible) {
          startAnimation(this.myCountUp);
        }
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

                        <div  className="countUpDescription">
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

                        <div  className="countUpDescription">
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

                        <div  className="countUpDescription">
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



                <Partneri />
                <div id="showAllButton">
                <Button type="primary" onClick={() => {window.location.href='/partners'}}>Prikaži sve</Button>
                </div>


                <Partneri />
                <div id="showAllButton">
                <Button type="primary" onClick={() => {window.location.href='/references'}}>Prikaži sve</Button>
                </div>



            </div>

        );
    }
};

export default Home;