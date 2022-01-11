import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const {inventory, setItemOn}= useContext(ItemContext)
    const navigate = useNavigate()

    const goToInventory = ()=>{
        console.log("Navigate?")
        // navigate("/shop")
        // navigate("/inventory")
    }
    // console.log(inventory)

    return (
        <div style={divStyle} className='flex4'> 
            <h4>Warehouse</h4>
            {inventory.map((x,index) => 
            <div  onClick = {()=>{setItemOn(x.title); goToInventory()}} className='armorcard bg-blue ali-center' key={index}>
                <img src={x.img} alt=''/>
                <span>{x.title}</span>
                <span>{x.type}</span>
                <span>{x.grade} grade armor</span>
            </div>
           )} 
        </div>
    )
}

export default Warehouse
