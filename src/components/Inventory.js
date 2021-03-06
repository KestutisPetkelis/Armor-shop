import React from 'react'
import Warehouse from '../pages/Warehouse';
import Equipment from '../pages/Equipment';

const Inventory = ({money}) => {
    const divStyle = {
        width: "90%", 
        minHeight: "400px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        padding: "10px 40px",
        backgroundColor: "lightgreen"
    };
    
    


    return (
        <div style={divStyle}>
            <h1>Inventory</h1>
            <h4>Money: {money}</h4>
            <div className='d-flex'>
                <Warehouse/>
                <Equipment/>

            </div>

        </div>
    )
}

export default Inventory
