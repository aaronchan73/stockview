import React from 'react'
import { VictoryLine, VictoryChart } from 'victory'

const LineGraph = ({ data, profit }) => {
    
    let newData = [];

    for (let i = 0; i < 7; i++) {
        newData.unshift({
            x: data[i].x,
            y: parseFloat(data[i].y)
        });
    }

    return <VictoryChart>
        {profit ?
            <VictoryLine
                style={{ data: { stroke: "#00ff4c" } }}
                data={newData}>
            </VictoryLine> :
            <VictoryLine
                style={{ data: { stroke: "#ff2e2e" } }}
                data={newData}>
            </VictoryLine>}
    </VictoryChart>
}

export default LineGraph
