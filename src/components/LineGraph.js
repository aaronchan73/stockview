import React from 'react'
import { VictoryBar } from 'victory'

const LineGraph = () => {

    const data = [{quarter: 1, earnings: 3000}, {quarter: 2, earnings: 4000}];

    return <VictoryBar data={data} x="quarter" y="earnings" />
}

export default LineGraph
