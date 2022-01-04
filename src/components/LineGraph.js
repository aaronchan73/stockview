import React from 'react'
import { VictoryLine, VictoryChart } from 'victory'

const LineGraph = ({ data, profit }) => {
    return <VictoryChart>
        {profit ? 
        <VictoryLine
            style={{ data: { stroke: "#00ff4c" }}}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 6 }
            ]}></VictoryLine> :
            <VictoryLine
                style={{ data: { stroke: "#ff2e2e" }}}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 }
                ]}></VictoryLine>}
    </VictoryChart>
}

export default LineGraph
