import React from 'react';
import Content from '../components/Content';
import Chart from '../components/Calendario';
import Chart2 from '../components/Trands';
import PieChart from '../components/PieChart';
import Chart4 from '../components/Grafico4';
import './Home.css'
import MiniDrawer from '../components/MiniDrawer'
// import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <MiniDrawer>
                <Content title="Dashboard">
                    {/* <Header /> */}
                            <div className='grafico1'>
                                <Chart/>
                            </div>
                            <div className='grafico2'>  
                                <Chart2 />
                            </div>      

                </Content>
            </MiniDrawer>
            {/* <Footer/> */}
        </>
    );
};

export default Home;
