import React from 'react';
import MyGallery from './myGallery';
import { Helmet } from 'react-helmet';

const References = () => {
    return (
        <div>

                <Helmet>
                    <title>Reference | Facit</title>
                </Helmet>


          <h1 style = {{textAlign: 'center'}}> NAŠE REFERENCE</h1> 
            <MyGallery/>
        </div>

    );
};

export default References;