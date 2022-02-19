import React, { useState, useRef} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Article from './Article'

export default function Latest() {
    const [detail,setdetail]=useState()
    const[data,setdata]=useState([])
    const temp=useRef()
    const path=window.location.pathname
    temp.current = fil
    let arr;
    useEffect(() => {

        axios.get("https://young-cliffs-77803.herokuapp.com/api/v1/blog" + path).then((response) => {
            setdetail(response.data)
            temp.current()
        })



    }, [path]);
    function fil(){
        arr=detail.filter((item) => item.type === 'latest')
       
    
       setdata([...arr])

       

    }
    return (
        <>
        <h2 className='thetitle'>The Post</h2>
        <hr className='line'></hr>
                <div className='latestbox'>
                    {
                        data.map((item) => <Article  key={item.id} title={item.title} id={item.id} desc={item.description} date={item.date} image={item.image} />
                        ) 
                    }
                </div>
              
         
            
        </>
    )
}
