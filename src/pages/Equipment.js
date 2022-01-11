import React from 'react'
import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const Equipment = () => {
    const divStyle = {
        width: "400pc", 
        minHeight: "160px",
        border: "1px solid blue",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
       
        backgroundColor: "lightgrey"
    };

    const {inventory, equipment}= useContext(ItemContext)

    console.log ("SARVAI", equipment)
    
    return (
        <div style={divStyle} className='flex1'>
           <h4>Equipment</h4>
           <div className='equip'> <p>Hat</p>  <img src={equipment.hat} alt='Empty slot'></img></div>
           <div className='equip'> <p>Upper</p> <img src={equipment.upper} alt='Empty slot'></img></div>
           <div className='equip'> <p>Lower</p>  <img src={equipment.lower} alt='Empty slot'></img></div>
           <div className='equip'> <p>Gloves</p>  <img src={equipment.gloves} alt='Empty slot'></img></div>
           <div className='equip'> <p>Boots</p>  <img src={equipment.boots} alt='Empty slot'></img></div>


        </div>
    )
}

export default Equipment
