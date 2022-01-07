import React from 'react'
import { useState } from 'react'
import Button from './Button'

const AddStock = ({ onAdd }) => {

    const [code, setCode] = useState("");
    const [bought, setBought] = useState("");
    const [share, setShare] = useState("");

    const submitStock = (e) => {
        e.preventDefault();
        onAdd({
            name: code,
            bought: bought,
            shares: share
        });

        setCode("");
        setBought("");
        setShare("");
    }

    return (<form class="m-2 text-gray-700">
        <label htmlFor="code">Stock Code: </label>
        <input id="code" name="code" value={code} onChange={(e) => setCode(e.target.value)} /><br />
        <label htmlFor="bought">Bought Price: </label>
        <input id="bought" name="bought" value={bought} onChange={(e) => setBought(e.target.value)} /><br />
        <label htmlFor="share">Shares:  </label>
        <input id="share" name="share" value={share} onChange={(e) => setShare(e.target.value)} /><br />
        <Button title="Submit" onClick={submitStock} />
    </form>);
}

export default AddStock
