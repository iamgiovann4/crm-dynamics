import React from 'react';
import './Home.css';
import Content from '../components/Content';

import NavBar from '../components/NavBar';
import Chart from '../components/grafico1';
import Chart2 from '../components/grafico2';
import Chart3 from '../components/grafico3';
import Chart4 from '../components/grafico4';


const Home = () => {


    
    return (
        <>
            <Content title="Dashboard">
                <NavBar />
                <div >
                    <div style={{ display: 'flex', height: '50%' }}>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", borderRight: " 2px solid #000", padding: '20px 0' }}>
                            <Chart />
                        </div>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", padding: '20px 0' }}>
                            <Chart2 />
                        </div>
                    </div>
                    <div style={{ display: 'flex', height: '50%' }}>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", borderRight: " 2px solid #000", padding: '20px 0' }}>
                            <Chart3 />
                        </div>
                        <div style={{ width: "50%", borderBottom: " 2px solid #000", padding: '20px 0' }}>
                            <Chart4 />
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
};

export default Home;
