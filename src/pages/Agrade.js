import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';


const Agrade = () => {
    const divStyle = {
        width: "100%", 
        minHeight: "160px",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        padding: "40px",
       
        backgroundColor: "lightgrey"
    
    };
    const {clothes, buyItem} =useContext(MyContext)
    const aGrade = clothes.filter(x => x.grade==="A")
    //console.log (clothes, aGrade)

    return (
        <div>
           <h2>A grade</h2>
           {aGrade.map((x,index) => 
            <div  onClick = {()=>buyItem(x.title)} className='armorcard bg-blue ali-center' key={index}>
                <img src={x.img} alt=''/>
                <span>{x.title}</span>
                <span>{x.type}</span>

            </div>
           )} 
        </div>
    )
}

export default Agrade
