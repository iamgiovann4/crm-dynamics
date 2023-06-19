import React from 'react';
import Content from '../components/Content';
import Chart from '../components/Grafico1';
import Chart2 from '../components/Grafico2';
import Chart3 from '../components/Grafico3';
import Chart4 from '../components/Grafico4';
import './home.css'
import MiniDrawer from '../components/MiniDrawer'

const Home = () => {
    return (
        <>
            <MiniDrawer>
                <Content title="Dashboard">
                    {/* <Header /> */}
                    <div className='caixas'>
                        <div className='caixa1'>
                            <div className='grafico1'>
                                <Chart />
                            </div>
                            <div className='grafico2'>
                                <Chart2 />
                            </div>
                        </div>
                        <div className='caixa2'>
                            <div className='grafico3'>
                                <Chart3 />
                            </div>
                            <div className='grafico4'>
                                <Chart4 />
                            </div>
                        </div>
                    </div>
                </Content>
            </MiniDrawer>
        </>
    );
};

export default Home;
