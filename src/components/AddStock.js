import React from 'react'
import { useState } from 'react'

const AddStock = ({ onAdd }) => {

    const [code, setCode] = useState("");
    const [bought, setBought] = useState("");

    const submitStock = (e) => {
        e.preventDefault();
        onAdd({
            name: code,
            bought: bought
        });

        setCode("");
        setBought("");
    }

    return (<form>
        <label for="code">Stock Code: </label>
        <input id="code" name="code" value={code} onChange={(e) => setCode(e.target.value)} /><br />
        <label for="bought">Bought Price: </label>
        <input id="bought" name="bought" value={bought} onChange={(e) => setBought(e.target.value)} /><br />
        <input className="btn" type="submit" onClick={submitStock} />
    </form>);
}

export default AddStock
