import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./StockDisplay.scss"

function StockDisplay() {
    //const { stockArray } = props
// El selector de talles todavia no esta funcionando
    return (
        <div className='stock-display'>
            <div className='buttons'>
                <button className='btn-outlined-primary'>35</button>
                <button className='btn-outlined-primary'>36</button>
                <button className='btn-outlined-primary'>37</button>
                <button className='btn-outlined-primary'>38</button>
                <button className='btn-outlined-primary'>39</button>
                <button className='btn-outlined-primary'>40</button>
            </div>
            <ItemCount stockSelected={5} />
        </div>
    )
}

export default StockDisplay