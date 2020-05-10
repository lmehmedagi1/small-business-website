import React from 'react';
import { Helmet } from 'react-helmet';
import Success from '../res/success.jpg';
import Software from '../res/software.jpg';
import Chess from '../res/chess.jpg';
import Printer from '../res/printer.jpg';
import Kontakti from './kontakti'


const About = () => {
    return (

        <div>
            <div id="naslovNasaPrica">
                <div id="prica">
                NAŠA PRIČA
                </div>
            </div>
        
        <div id="container">

            <Helmet>
                <title>O nama | Facit</title>
            </Helmet>

            

            <div id="mainText">

                <div className="part">

                    <div className="tekst">

                            
                        <p className="right">
                            <h1> NAŠE PUTOVANJE </h1>
                            <hr></hr>
                            Kao potreba za pružanjem što kvalitetnije usluge na polju informacijskih tehnologija, 2009. godine pokrenuli smo kompaniju <b>FACIT d.o.o. </b> Snagom volje i željom za uspjehom od male firme uspjeli smo pozicionirati na tržištu bitan integrator inovativnih tehnologija od komercijalnog sektora, preko servisa i tehničke podrške, do specijaliziranih uslužnih djelatnosti printanja i knjižare. Zahvaljujući ljudskom faktoru koji nam pruža stabilnost, sigurnost i snagu a svaki novi uspjeh dodatnu kreativnost i dinamičnost, danas smo postali prepoznatljivi po kvalitetu servisiranja naših kupaca, njihovih zahtjeva i potreba.

                       </p>

                    </div>

                    <img id="success" src={Success} alt="Success" />

                </div>


                <div className="tekst">

                    <p className="leftCilj">
                            
                        <h1> NAŠ CILJ </h1>
                        <hr></hr>
                        Cilj nam je ostvariti partnerske odnose sa našim kupcima i postati dio njihovog tima. Autorizirani smo prodajni i servisni centar vodećeg proizvođača opreme i naprednih rješenja za proizvodnju i upravljanje dokumentima - <b>Xerox</b>. To nam daje mogućnost da implementiramo inovativna rješenja i nove tehnologije i još više unaprijedimo brigu o našim korisnicima. Predanim i kontinuiniranim radom, naš portfolio smo proširili i na jedan od vodećih brendova u svojo branši – <b>DELL</b> gdje smo također stekli partnerski status. Također, dio smo <b>"Microsoft Partner Network"-a</b> te svojim kupcima možemo ponuditi najbolja software-ska rješenja iz oblasti operativnih sistema i alata za obradu dokumenata.
                        
                    </p>
                </div>

                <img id="printer" src={Printer} alt="Printer" />

                <div className="part">


                    <div className="tekst">
                        <p className="right">
                        <h1> NAŠA PONUDA </h1>
                        <hr></hr>
                            Impresivnom i raznovrsnom ponudom opreme za uredsku i produkcijsku upotrebu možemo odgovoriti i najzahtjevnijim kupcima koji traže optimalni odnos cijene i kvaliteta. Kvalitetna oprema kombinirana sa inovativnim softverskim rješenjima garantuje reduciranje troškova poslovanja u cjelini. Ovakva kombinacija također omogućava virtualno upravljanje dokumentima bilo kojih formata integrirajući ih kroz cijelo preduzeće. Zahvaljujući stalnom tehničkom usavršavanju, naše osoblje je posvećeno zadovoljstvu korisnika kontrolom kvaliteta usluga i savjetovanjem o korištenju tehničkih resursa. Uz to veoma smo ponosni na ekspeditivnost kojom kupcima osiguravamo snabdijevanje potrošnim materijalom i papirom.
                    
                  </p>

                    </div>
                    <img id="software" src={Software} alt="Software" />

                </div>

                <div className="part">

                    <div className="tekst">
                        <p className="left">

                        <h1> NAŠA OČEKIVANJA </h1>
                        <hr></hr>
                            Komplementarnost naših usluga i ponude omogućava korisnicima da ostanu fokusirani na vlastitu glavnu djelatnost i postizanje boljih poslovnih rezultata, produktivnosti i efikasnosti. Naša očekivanja su da budemo jedna od najboljih domaćih kompanija u integracijskim ICT rješenjima na BH tržištu, te kompetentan partner u regiji.
                 </p>
                    </div>

                    <img id="chess" src={Chess} alt="Chess" />

                </div>

                

            </div>
            
        </div >

            <div id="newText">
            
                <p>
                <hr></hr>
                Integrišući profesionalnost, pouzdanost i povjerenje postavljamo visoke standarde u razvijanju partnerskih odnosa sa kupcima i posvećeni smo prevazilaženju njihovih očekivanja. Želimo biti prepoznatljivi po izvrsnosti i kvalitetu usluga. Usmjereni ka istinskim vrijednostima postavljamo korisnike u vrh naše organizacione strukture, a mi se trudimo biti postojan dio njihovog tima.
                <hr></hr>
                </p>
                
            </div>

            <div id="naslovNasTim">
                <div id="prica">
                NAŠ TIM
                </div>
                <div id="naslovZaTim">
                S ponosom Vam predstavljamo talentovane pojedince koji čine Facit porodicu
                </div>
            </div>

            <Kontakti/>
        </div>

    );
};

export default About;