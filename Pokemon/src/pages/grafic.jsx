import { Box } from '@chakra-ui/react'
import React from 'react'
import { NivoAreaChart } from './terceiraTemp/nivo'

const Grafic = () => {
    
  return (
    <> 
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>

        <Box w='900px' h='200px' bg='red'>
            <NivoAreaChart />
        </Box>
    
    </>
  )
}

export default Grafic