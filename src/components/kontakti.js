import React from 'react';
import { Helmet } from 'react-helmet';
import { List, Card } from 'antd';

const divStyle = {
    margin: "5%"
}
const Kontakti = () => {

    const data = [
        {
            title: 'Prokurista',
        },
        {
            title: 'Izvršni direktor',
        },
        {
            title: 'Voditelj - Print shop Mostar',
        },
        {
            title: 'Direkcija',
        },
    ];

    return (
        <div style = {divStyle}>
            <h1> KONTAKTI </h1>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>Card content</Card>
                    </List.Item>
                )}
            />

        </div>

    );
};

export default Kontakti;