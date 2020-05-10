import React from 'react';
import { Alert } from 'antd';
import { Result, Button } from 'antd';
import {FrownOutlined} from '@ant-design/icons';

const NotFound = () => {
    return (
        <div id="notFound">
            <div id="poruka">
            <Result
            icon={<FrownOutlined />}
            title="Žao nam je, stranica koju ste tražili ne postoji."
            extra={<Button type="primary" onClick={() => {window.location.href = '/';}}>IDI NA NASLOVNU</Button>}
        />
        </div>
        </div>

    );
};

export default NotFound;