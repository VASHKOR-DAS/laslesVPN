import React from 'react';
import Header from '../Header/Header';
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
        </div>
    );
};

export default Home;