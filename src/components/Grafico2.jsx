import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import Box from '@mui/material/Box';




export const dados = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];
export const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };

export function Grafico2() {

    const [data, setData] = useState([]);

    useEffect((data) => {
        axios.get("http://localhost:3100/product")
        .then(response => {
           data = response.data.map(item => [item.name, item.stock]);
           data = [['Task', 'Hours per Day'], ...data];
          setData(data);
          console.log(data)
        })
        .catch(error => {
          console.error("Erro ao obter os dados:", error);
        });

    }, []);
  

    const options = {
        title: "PJ3",
        pieHole: 0.4,
        is3D: false,
    };


    return (
      <div className="chartContainer" style={{display:'flex', justifyContent:'center', borderRadius: '20px', margin: '20px'}}>
            <Box 
            width={980} height={500}
            chartType="PieChart"
             style={{
              borderRadius: '20px',
              backgorundColor: 'white',
              backgorund: 'white',
              boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',}}>
                <Chart width={980} height={500}
                    chartType="PieChart"
                     data={data} >
                </Chart></Box>



        </div>
    )
}
export default Grafico2
