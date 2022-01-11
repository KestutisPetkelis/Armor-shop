import React from 'react'
import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const Equipment = () => {
    const divStyle = {
        minWidth: "300px", 
        minHeight: "160px",
        border: "1px solid blue",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
       
        backgroundColor: "lightgrey"
    };

    const {inventory, equipment, removeItem}= useContext(ItemContext)

    console.log ("SARVAI", equipment)
    
    return (
        <div style={divStyle} className='flex1 equipmentBase'>
           <h4>Equipment</h4>
           <div className='equip' onClick={()=>removeItem("hat")}> <p>Hat</p>  <img src={equipment.hat} alt='Empty slot'></img></div>
           <div className='equip' onClick={()=>removeItem("upper")}> <p>Upper</p> <img src={equipment.upper} alt='Empty slot'></img></div>
           <div className='equip' onClick={()=>removeItem("lower")}> <p>Lower</p>  <img src={equipment.lower} alt='Empty slot'></img></div>
           <div className='equip' onClick={()=>removeItem("gloves")}> <p>Gloves</p>  <img src={equipment.gloves} alt='Empty slot'></img></div>
           <div className='equip' onClick={()=>removeItem("boots")}> <p>Boots</p>  <img src={equipment.boots} alt='Empty slot'></img></div>


        </div>
    )
}

export default Equipment
