import axios from 'axios'
import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import Stories from './Stories'

export default function Storylatest() {
    const [detail,setdetail]=useState()
    const [data, setdata] = useState([])
    const temp = useRef()
    const [load, setload] = useState(false)
    const path=window.location.pathname
    temp.current = fil
    let arr;
    useEffect(() => {

        axios.get("https://young-cliffs-77803.herokuapp.com/api/v1/blog" + path).then((response) => {
            setdetail(response.data)
            temp.current()
        })

    }, [path]);
    function fil() {
        arr = detail.filter((item) => item.type === 'story')

        arr = arr.filter((item, index) => index < 3)
        setdata([...arr])
    }
    const change = () => {
        arr = detail.filter((item) => item.type === 'story')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>Latest Stories</h2>
            <hr className='line'></hr>
            <div className='storymain'>

                
                    {
                        data.map((item) => <Stories key={item.id} title={item.title} desc={item.description} date={item.date} image={item.image} />
                        )
                    }
                </div>

                

        
            {
                load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
            }
        </>
    )
}