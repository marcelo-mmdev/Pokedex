import { Box } from '@chakra-ui/react'
import React from 'react'

import { Chart } from "react-google-charts";

export const data = [
  ["x", "Product", "Celular"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];


export const options = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

const Graphic = () => {
    
  return (
    <> 
        <Box w='900px' h='200px' bg='red'>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />            
        </Box>   
    </>
  )
}

export default Graphic