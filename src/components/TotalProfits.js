import React from 'react'

const TotalProfits = ({profits}) => {
    return <h3 class="mt-4">Total Net Profit: ${profits.toFixed(2)}</h3>
}

export default TotalProfits
