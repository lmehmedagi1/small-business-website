import React from 'react';
import { Alert } from 'antd';
import MyGallery from './myGallery'

const References = () => {
    return (
        <div style = {{marginTop: '15px'}}>
          <h1 style = {{textAlign: 'center'}}> NAŠE REFERENCE</h1> 
            <MyGallery/>
        </div>

    );
};

export default References;