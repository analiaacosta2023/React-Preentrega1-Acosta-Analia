import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./StockDisplay.scss"

function StockDisplay(props) {
    const { stockArray } = props

    const [stock, setStock] = useState()

    return (
        <div className='stock-display'>
            <div className='size-selector'>
                <h6>Talle:</h6>
                <select value={stock} onChange={e => setStock(e.target.value)}>
                    <option value={stockArray[0]} className='btn-outlined-primary'>35</option>
                    <option value={stockArray[1]} className='btn-outlined-primary'>36</option>
                    <option value={stockArray[2]} className='btn-outlined-primary'>37</option>
                    <option value={stockArray[3]} className='btn-outlined-primary'>38</option>
                    <option value={stockArray[4]} className='btn-outlined-primary'>39</option>
                    <option value={stockArray[5]} className='btn-outlined-primary'>40</option>
                </select>
            </div>

            <ItemCount stockSelected={stock} />
        </div>
    )
}

export default StockDisplay