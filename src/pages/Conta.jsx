import React from 'react';
import Content from '../components/Content';
import Chart from '../components/Calendario';
import Chart2 from '../components/Trands';
import PieChart from '../components/PieChart';
import Chart4 from '../components/CardUser';
import './Home.css'
import MiniDrawer from '../components/MiniDrawer'
// import Footer from '../components/Footer';


const Conta = () => {
    return (
        <>
            <MiniDrawer>
                <Content title="Dashboard">
                    {/* <Header /> */}
                            <div className='grafico4'>
                                <Chart4/>
                            </div>
                </Content>
            </MiniDrawer>
            {/* <Footer/> */}
        </>
    );
};

export default Conta;