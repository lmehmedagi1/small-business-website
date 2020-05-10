import React from 'react';
import { List, Card } from 'antd';

import {
    MailOutlined,
    PhoneOutlined,
    UserOutlined
} from '@ant-design/icons'


import Radnik from '../res/Radnici/test.png';

const divStyle = {
    margin: "5%"
}
const Kontakti = () => {

    const data = [
        {
            title: 'Prokurist',
            name: 'Milanović Vildana',
            image: Radnik,
            mail: 'vildanam@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Izvršni direktor',
            name: 'Delalić Lamija',
            image: Radnik,
            mail: 'lamijam@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Rukovodilac tehničke podrške',
            name: 'Milanović Nedim',
            image: Radnik,
            mail: 'nedimm@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Rukovodilac prodaje',
            name: 'Delalić Kenan',
            image: Radnik,
            mail: 'kenand@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Prodajni asistent',
            name: 'Omerović Mirela',
            image: Radnik,
            mail: 'mirelao@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Prodajno-tehnički savjetnik',
            name: 'Krpo Salko',
            image: Radnik,
            mail: 'salkok@facit.ba',
            broj: '061/484-415'
        },
        {
            title: 'Tehnička podrška',
            name: 'Velić Ruzmin',
            image: Radnik,
            mail: 'ruzminv@facit.ba',
            broj: '061/484-415'
        },
    ];

    return (
        <div style = {divStyle}>
            <List
                grid={{ gutter: 18, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <div>
                            <div>
                                <img src={item.image} alt="Radnik" style={{width:'100%'}} />
                            </div>
                        </div>
                        <Card title={item.name} style={{textAlign:'center'}}>
                            <div id="radnikInfo">
                                <UserOutlined/> {item.title}
                                <br/>
                                <a target="_blank" rel="noopener noreferrer" href={"mailto:" + item.mail}>
                                    <MailOutlined /> 
                                </a>
                                 <span> </span>{item.mail}
                                <br/>
                                <PhoneOutlined/> {item.broj} 
                            </div>
                        </Card>
                    </List.Item>
                )}
            />

        </div>

    );
};

export default Kontakti;