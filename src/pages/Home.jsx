import React from 'react';
import Content from '../components/Content';
import Chart from '../components/Calendario';
import Chart2 from '../components/Trands';
import PieChart from '../components/PieChart';
import Grafico1 from '../components/Grafico1';
import Grafico2 from '../components/Grafico2';
import Grafico3 from '../components/Grafico3';
import Grafico4 from '../components/Grafico4';
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
                        <Chart />
                    </div>
                    <div className='grafico2'>
                        <Chart2 />
                        <div sx={{ display: "flex", rowDirection: "row" }}>
                            <Grafico1></Grafico1>
                            <Grafico2></Grafico2>
                            <Grafico3></Grafico3>
                            <Grafico4></Grafico4>
                        </div>
                    </div>

                </Content>
            </MiniDrawer>
            {/* <Footer/> */}
        </>
    );
};

export default Home;
