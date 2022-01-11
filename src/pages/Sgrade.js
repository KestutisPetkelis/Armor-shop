import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

const Sgrade = () => {

    const {clothes, buyItem} =useContext(MyContext)
    const sGrade = clothes.filter(x => x.grade==="S")
    // console.log (clothes, sGrade)


    return (
        <div>
            <h2>S grade</h2>
           {sGrade.map((x,index) => 
            <div  onClick = {()=>buyItem(x.title)}className='armorcard bg-blue ali-center' key={index}>
                <img src={x.img} alt=''/>
                <span>{x.title}</span>
                <span>{x.type}</span>

            </div>
           )} 

            
        </div>
    )
}

export default Sgrade
