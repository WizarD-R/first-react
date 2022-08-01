import React from 'react';
import StartBlock from './components/StartBlock/StartBlock';
import AboutBlock from './components/AboutBlock/AboutBlock';
import WorksBlock from './components/WorksBlock/WorksBlock';
import PriceList from './components/PriceList/PriceList';

const Home = () => {
    return (
        <>
            <StartBlock/>
            <AboutBlock/>
            <WorksBlock/>
            <PriceList />
        </>
    );
};

export default Home;
