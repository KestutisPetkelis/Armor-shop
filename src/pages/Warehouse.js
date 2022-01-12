import React from 'react'
import { useContext } from 'react';

import { ItemContext } from '../contexts/ItemContext';

const Warehouse = () => {
    const divStyle = {
        width: "400pc", 
        minHeight: "160px",
        border: "1px solid blue",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
        paddingTop: "0px",
        backgroundColor: "lightgrey"
    };

    const {inventory, setItemOn, sellItem}= useContext(ItemContext)
    
    // console.log(inventory)

    return (
        <div style={divStyle} className='flex4'> 
            <h4>Warehouse</h4>
            {inventory.map((x,index) => 
            <div   className='armorcard bg-blue ali-center whouse' key={index}>
                <img onClick = {()=>setItemOn(x.title, index)} className='w-img' src={x.img} alt=''/>
                <span>{x.title}</span>
                <span>{x.type}</span>
                <span>{x.grade} grade armor</span>
                <span>Sell price: {x.price/2}</span>
                <button onClick= {()=>sellItem()}>Sell</button>
            </div>
           )} 
        </div>
    )
}

export default Warehouse
