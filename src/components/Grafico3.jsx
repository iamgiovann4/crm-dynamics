import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";




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

export function Grafico3() {

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
        <div>
            {console.log(data,"bomdia")}
            {console.log(dados,"boanoite")}
                <Chart
                    chartType="Line"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />


        </div>
    )
}
export default Grafico3
