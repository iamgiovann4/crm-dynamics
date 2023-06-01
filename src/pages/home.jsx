import React from 'react';
import './Home.css'
import Content from '../components/Content';
import NavBar from '../components/NavBar'

    const Home = () => {
        return (

            <Content title="Dashboard">
                <NavBar></NavBar>
            </Content>

        );
    };

    export default Home;