import React from 'react'

const AddStock = ({stocks}) => {

    const submitStock = () => {
        
    }

    return (<form>
            <label for="code">Stock Code: </label>
            <input id="code" name="code"/><br/>
            <label for="bought">Bought Price: </label>
            <input id="bought" name="bought"/><br/>
            <input className="btn" type="submit" onSubmit={submitStock()}/>
        </form>);
}

export default AddStock
