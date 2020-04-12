import React from 'react';
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';
import { List } from 'antd';
import Xerox from '../res/xeroxSP.jpg'
import Logo from '../res/facitService.png'

import {
    DoubleRightOutlined
} from '@ant-design/icons'

const oprema = [
    'Fotokopirni uređaji',
    'Produkcijski uređaji',
    'Multifunkcijski uređaji',
    'Pisači',
    'Fax uređaji',
    'Skeneri',
    'Projektori',
    'Monitori',
    'Osobni računari (Desktop)',
    'Prijenosni računari'
]

const proizvodaci = [
    'Xerox',
    'Canon',
    'Konica Minolta',
    'Toshiba',
    'Hawlett Pacard',
    'Lexmark',
    'Kyocera',
    'Panasonic',
]

const usluge = [
    'Stručno i kvalitetno održavanje',
    'Brzo vrijeme odziva',
    'Mogućnost zamjene opreme za vrijeme popravka',
    'Besplatan savjet',
    'Projekcija i nadogradnja',
    'Tehnička pomoć',
    'Obuka korisnika za rad opreme',
    'Dodatna usluga za poboljšanje performansi'

]

const xer = [
    'Autorizirani smo servis partner proizvođača Xerox',
    'Korisnici naših usluga su mnoge državne institucije,obrazovne ustanove,mala i velika poduzeća',
    'Kvalificirani smo za održavanje profesionalnih sustava za digitalnu štampu',
    'Servisne usluge obavljamo u cijeloj Bosni i Hercegovini'

]
const Support = () => {



    return (
        <div>

            <Helmet>
                <title>Podrška | Facit</title>
            </Helmet>

            <div id="sadrzaj">
                <div id="typedTextSupport">
                    <div id="typedTextContainera">
                        <div id="sloganText">
                            <Typed
                                strings={['POUZDANOST', 'BRZINA', 'KVALITETA']}
                                typeSpeed={50}
                                backSpeed={30}
                                startDelay={2000}
                                loop
                            />
                        </div>

                    </div>
                </div>

                <div>

                    <p>
                        U našem poduzeću svjesni smo da nakon prodaje, servisna podrška je od presudne važnosti dobrog poslovnog odnosa.Stoga našem servisnom sektoru dajemo poseban značaj. Od prve instalacije te kroz cijeli životni vijek uređaja, servis je najbitniji prateći segment.
                    </p>

                    <p>
                        "Facit Service" stoji Vam na raspolaganju za sve hardverske i softverske probleme koji se javljuju na nekom uređaju.Servisnu službu sačinjavaju obrazovani stručnjaci sa višegodišnjim iskustvom u servisiranju IT opreme.
                    </p>
                    Osim otklanjanja kvarova i servisiranja u garantnom i vangarantnom periodu naš servis je u stanju ponuditi i ugovorno održavanje opreme. Garantujemo zamjenu neispravnih dijelova originalnim, i otklanjanje kvarova nastalih redovnom upotrebom opreme u najkraćem mogućem roku. Originalan potrošni materijal i rezervni dijelovi osiguravaju funkcionalnost, pravilan rad uređaja i iznad prosječan vijek trajanja.
                    <p>

                    </p>
                </div>
                <img id = "slika"  src={Logo} alt={"Facit"} />

                    <div id="listaUsluga">
                    <List
                        dataSource={xer}
                        renderItem={item => (
                            <div id="oprema" >
                                <DoubleRightOutlined /> {item}

                            </div>
                        )}
                    />
                </div>

                <img id = "slika"  src={Xerox} alt={"Xerox"} />

                            
                <h1>
                    Želimo biti više od običnog pružatelja servisnih usluga,nudimo svim korisnicima cjelovit niz usluga:</h1>

                <div id="listaUsluga">
                    <List
                        dataSource={usluge}
                        renderItem={item => (
                            <div id="oprema" >
                                <DoubleRightOutlined /> {item}

                            </div>
                        )}
                    />
                </div>


                <p>
                    Osigurano skladište rezervnih dijelova i potrošnog materijala daje vašoj opremi kontinuiran rad visokog kvaliteta. Stalna zaliha različitih rezervnih dijelova omogućuje nam brzo vrijeme odziva i najvišu razinu održavanja.  Naši servisni tehničari osposobljeni su za servis sljedećih proizvođača:
                </p>

                <div id="lista">
                    <List
                        dataSource={proizvodaci}
                        renderItem={item => (
                            <div id="oprema" >
                                <DoubleRightOutlined /> {item}

                            </div>
                        )}
                    />
                </div>



                <h1>Oprema nabrojenih proizvođača koju servisiramo: </h1>
                <div id="lista">
                    <List
                        dataSource={oprema}
                        renderItem={item => (
                            <div id="oprema" >
                                <DoubleRightOutlined /> {item}

                            </div>
                        )}
                    />
                </div>


            </div>

        </div>

    );
};

export default Support;