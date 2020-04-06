import React from 'react';
import { Alert } from 'antd';

const Home = () => {
    return (
        <div>
            <div>
                Lejla
            </div>
            <Alert
                message="Creators"
                description="Jasmin Bajrić, Lejla Mehmedagić, Arslan Turkušić, Venesa Šeremet, Adna Ćatić, Sara Makešoska-Džebo"
                type="info"
            />
            <Alert
                message="Goals"
                description="Our experience is basically addressed to support
                company in its challenges,
                working side by side with entepreneur and company managers. Our goals are to make our costumers happy and satisfied. "
                type="info"
            />
            <Alert
                message="Contact Us"
                description="E-mail: merchantservice@gmail.com"
                type="info"
            />
        </div>

    );
};

export default Home;