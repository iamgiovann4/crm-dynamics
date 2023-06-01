import React from 'react';
import './Home.css'
import Content from '../components/Content';
import NavBar from '../components/NavBar'
import { Chart } from '../components/OnlineStore';

    const Home = () => {
        return (

            <Content title="Dashboard">
                <NavBar></NavBar>

                <Chart />
            </Content>

        );
    };

    export default Home;