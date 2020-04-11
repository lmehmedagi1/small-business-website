import React from 'react';
import { Helmet } from 'react-helmet';
import { List } from 'antd';
import Aluminij from '../res/Reference/aluminij.png';
import AP from '../res/Reference/AP.png';
import APP from '../res/Reference/APP.jpg';
import ARP from '../res/Reference/ARP.png';
import ART from '../res/Reference/ART.jpg';
import ASBiH from '../res/Reference/ASBiH.png';
import Bakije from '../res/Reference/bakije.jpg';
import BHMAC from '../res/Reference/BHMAC.png';
import BHP from '../res/Reference/BHpassport.png';
import Care from '../res/Reference/care.jpg';
import Cik from '../res/Reference/cik.jpg';
import Core from '../res/Reference/core.JPG';
import DK from '../res/Reference/DKPTBIH.jpg';
import DP from '../res/Reference/duhanpromet.png';
import EN from '../res/Reference/energoinvest.jpg';
import FMUP from '../res/Reference/FMUP.png';
import HPI from '../res/Reference/HPInvesting.jpg';
import IL from '../res/Reference/ilidza.png';
import IMV from '../res/Reference/IMV.png';
import KA from '../res/Reference/kakanj.png';
import LA from '../res/Reference/labirint.png';
import LO from '../res/Reference/loreal.jpg';
import malak from '../res/Reference/malak.png';
import medis from '../res/Reference/medis.jpg';
import MLPI from '../res/Reference/MLPI.png';
import MOBiH from '../res/Reference/MOBiH.jpg';
import MUPKS from '../res/Reference/MUPKS.jpg';
import mylan from '../res/Reference/mylan.jpg';
import OKKS from '../res/Reference/OKKS.jfif';
import osa from '../res/Reference/osa.jpg';
import PSBiH from '../res/Reference/PSBiH.png';
import RMUBreza from '../res/Reference/RMUBreza.png';
import SFUNSA from '../res/Reference/SFUNSA.png';
import STC from '../res/Reference/STC.jpg';
import SUDBiH from '../res/Reference/SUDBiH.jpg';
import sudska from '../res/Reference/sudska.jpg';
import unchr from '../res/Reference/unchr.png';
import undp from '../res/Reference/undp.jpg';
import URBiH from '../res/Reference/URBiH.png';
import USAID from '../res/Reference/USAID.png';
import ventaacentar from '../res/Reference/ventaacentar.jpg';
import VKS from '../res/Reference/VKS.jpg';
import ZERS from '../res/Reference/ZERS.png';
import zikKS from '../res/Reference/zikKS.png';



const newData =
    [
        {
            src: Aluminij,
            alt: "Aluminij",
            link: "https://www.aluminij.ba/"
        },
        {
            src: AP,
            alt: "Authority Partners",
            link: "https://authoritypartners.com/"
        },
        {
            src: APP,
            alt: "agencija za policijsku podrsku",
            link: "http://www.psa.gov.ba/O_nama/default.aspx?id=30&langTag=bs-BA"
        },
        {
            src: ARP,
            alt: "Ambasada Republike Poljske",
            link: "https://www.gov.pl/web/bosnaihercegovina/ambasada"
        },
        {
            src: ART,
            alt: "Ambasada Republike Turske",
            link: "http://sarajevo.emb.mfa.gov.tr/Mission"
        },
        {
            src: ASBiH,
            alt: "Agencija za statistiku BiH",
            link: "http://bhas.gov.ba/"
        },
        {
            src: Bakije,
            alt: "Bakije",
            link: "https://www.bakije.com/"
        },
        {
            src: BHMAC,
            alt: "BHMAC",
            link: "http://www.bhmac.org/?lang=en"
        },
        {
            src: BHP,
            alt: "BH Passport",
            link: "https://www.bhpassport.ba/"
        },
        {
            src: Care,
            alt: "Care",
            link: "http://care-balkan.org/"
        },
        {
            src: Cik,
            alt: "CIK",
            link: "https://www.izbori.ba/Default.aspx?Lang=3"
        },
        {
            src: Core,
            alt: "Core",
            link: "http://core.ba/"
        },
        {
            src: DK,
            alt: "DKPT",
            link: "http://www.dkpt.ba/default.aspx?langTag=bs-BA&template_id=135&pageIndex=1"
        },
        {
            src: DP,
            alt: "Care",
            link: "http://www.duhanpromet.ba/"
        },
        {
            src: EN,
            alt: "CIK",
            link: "https://www.izbori.ba/Default.aspx?Lang=3"
        },
        {
            src: FMUP,
            alt: "Core",
            link: "http://core.ba/"
        },
        {
            src: HPI,
            alt: "HP Investing",
            link: "https://www.hpinvesting.ba/"
        },
        {
            src: IL,
            alt: "Opcina Ilidza",
            link: "https://www.opcinailidza.ba/"
        },
        {
            src: IMV,
            alt: "Institut za medicinsko vjestacenje",
            link: "https://imvzs.ba/"
        }, {
            src: KA,
            alt: "Opcina Kakanj",
            link: "http://kakanj.gov.ba/v5/"
        },
        {
            src: LA,
            alt: "Labirint d.o.o.",
            link: "http://www.labirint.ba/"
        },
        {
            src: LO,
            alt: "Loreal",
            link: "https://www.loreal.com/"
        },
        {
            src: malak,
            alt: "Malak group",
            link: "http://www.malak.ba/ba//"
        }, {
            src: medis,
            alt: "Medis",
            link: "https://www.medis.health/ba/?r=1"
        },
        {
            src: MLPI,
            alt: "Loreal",
            link: "https://www.loreal.com/"
        },
        {
            src: MOBiH,
            alt: "Malak group",
            link: "http://www.malak.ba/ba//"
        }, {
            src: MUPKS,
            alt: "MUPKS",
            link: "https://mup.ks.gov.ba/"
        },
        {
            src: mylan,
            alt: "MYLAN",
            link: "https://www.mylan.com/"
        },
        {
            src: OKKS,
            alt: "OKKS",
            link: "http://www.okks.ba/"
        },
        {
            src: osa,
            alt: "OSA",
            link: "http://www.osa-oba.gov.ba/"
        }, {
            src: PSBiH,
            alt: "PSBiH",
            link: "https://www.parlament.ba/"
        },
        {
            src: RMUBreza,
            alt: "RMU Breza",
            link: "https://www.rmubreza.ba/"
        },
        {
            src: SFUNSA,
            alt: "SFUNSA",
            link: "http://sf.unsa.ba/en/welcome/"
        },
        {
            src: STC,
            alt: "Save the children",
            link: "https://www.savethechildren.net/"
        },
        {
            src: SUDBiH,
            alt: "Sud BiH",
            link: "http://www.sudbih.gov.ba/"
        },
        {
            src: sudska,
            alt: "Sudska policija FBIH",
            link: "https://sudpol-fbih.pravosudje.ba/"
        },
        {
            src: unchr,
            alt: "UNHCR",
            link: "https://www.unhcr.org/"
        },
        {
            src: VKS,
            alt: "Vlada KS",
            link: "https://vlada.ks.gov.ba/"
        },
        {
            src: undp,
            alt: "UNDP",
            link: "https://www.ba.undp.org/content/bosnia_and_herzegovina/en/home.html"
        },
        {
            src: URBiH,
            alt: "Ured za reviziju institucija u FBIH",
            link: "http://www.vrifbih.ba/default.aspx?langTag=bs-BA"
        },
        {
            src: USAID,
            alt: "USAID",
            link: "https://www.usaid.gov/"
        },
        {
            src: ventaacentar,
            alt: "Opcina Centar",
            link: "http://www.centar.ba/"
        },
               {
            src: ZERS,
            alt: "Institut za zaštitu i ekologiju Republike Srpkske",
            link: "https://www.institutzei.net/en/"
        },
        {
            src: zikKS,
            alt: "Zavod za izgradnju KS",
            link: "https://zik.ks.gov.ba/"
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