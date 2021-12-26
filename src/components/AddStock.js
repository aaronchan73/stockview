import React from 'react'

const AddStock = ({stocks}) => {

    const submitStock = () => {
        // STUB
    }

    return (<form>
            <label for="code">Stock Code: </label>
            <input id="code" name="code"/><br/>
            <label for="bought">Bought Price: </label>
            <input id="bought" name="bought"/><br/>
            <label for="quantity">Quantity: </label>
            <input id="quantity" name="quantity"/><br />
            <input className="btn" type="submit" onSubmit={submitStock()}/>
        </form>);
}

export default AddStock
