import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';

import Provide from '../Provide/Provide';
import Stts from '../Stts/Stts';

const Home = () => {
    return (
        <div className='mx-2'>
            <br /><br />
            <Header></Header>
            <br /><br /><br />
            <Stts></Stts>
            <br /><br /><br /><br />
            <Provide></Provide>
            <br /><br /><br /><br /><br />
            <Pricing></Pricing>
            <br /><br />
            <Card></Card>
            <br /><br /><br /><br /><br />
        </div>
    );
};

export default Home;