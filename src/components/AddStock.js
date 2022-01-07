import React from 'react'
import { useState } from 'react'

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

    return (<form class="text-gray-50">
        <label htmlFor="code">Stock Code: </label>
        <input id="code" name="code" value={code} onChange={(e) => setCode(e.target.value)} /><br />
        <label htmlFor="bought">Bought Price: </label>
        <input id="bought" name="bought" value={bought} onChange={(e) => setBought(e.target.value)} /><br />
        <label htmlFor="share">Shares:  </label>
        <input id="share" name="share" value={share} onChange={(e) => setShare(e.target.value)} /><br />
        <input className="btn" type="submit" onClick={submitStock} />
    </form>);
}

export default AddStock
