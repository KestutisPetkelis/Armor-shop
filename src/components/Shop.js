import React from 'react'

import Agrade from '../pages/Agrade';
import Sgrade from '../pages/Sgrade';
import Bgrade from '../pages/Bgrade';

const Shop = () => {
    const divStyle = {
        width: "100%", 
        minHeight: "160px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        padding: " 10px 40px",
        
        backgroundColor: "lightblue"
       
    };


    return (
        <div style={divStyle} >
            <h1>Shop</h1>
            <div className='d-flex column'> 
                <Sgrade />
                <Agrade/>
                <Bgrade/>
            </div>
            

        </div>
    )
}

export default Shop
