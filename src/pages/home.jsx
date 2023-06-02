import React from 'react';
import './Home.css'
import Content from '../components/Content';
import NavBar from '../components/NavBar'
import Chart from '../components/grafico1';
import Chart2 from '../components/grafico2';
import Chart3 from '../components/grafico3';
import Chart4 from '../components/grafico4';

const Home = () => {
    return(
        <>
            <Content title="Dashboard">
                <NavBar></NavBar>
                <div>
                    <div style={{display:'flex'}}>
                        <Chart />
                        <Chart2 />
                    </div>
                    <div style={{display:'flex'}}> 
                        <Chart3 />
                        <Chart4 />
                    </div>
                </div>
            </Content>
        </>
    );
};


    export default Home;