import React from 'react';
import Card from '../Card/Card';
import Global from '../Global/Global';
import Header from '../Header/Header';
import Provide from '../Provide/Provide';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import SpecialFeatures from '../SpecialFeatures/SpecialFeatures';
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
            <Card></Card>
            <br /><br /><br />
            <Global></Global>
            <br />
            <Review></Review>
            <br />
            <Slider></Slider>
            <br /><br />
            <SpecialFeatures></SpecialFeatures>
            <br /><br />
        </div>
    );
};

export default Home;