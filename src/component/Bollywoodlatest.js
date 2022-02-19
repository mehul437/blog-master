import axios from 'axios'
import './Style.css'
import React, {useEffect, useState, useRef } from 'react'
import Post from './Post'
import Topstory from './Topstory'

export default function Bollywoodlatest() {
    
    const [data, setdata] = useState([])
    const[story,setstory]=useState([])
    const temp = useRef()
    const [load, setload] = useState(false)
    const [detail, setdetail] = useState()
    temp.current = fil
    let arr;
   const path=window.location.pathname
   

    useEffect(() => {
        
        axios.get("https://young-cliffs-77803.herokuapp.com/api/v1/blog" + path).then((response) => {
            setdetail(response.data)
            temp.current()
        })
       

    }, [path]);
    function fil() {
        arr = detail.filter((item,index) => item.type === 'post' && index < 4 )

        arr = arr.filter((item, index) => index < 4)
        setdata([...arr])
        arr = detail.filter((item) => item.type === 'toppost')
        setstory([...arr])


    }
    const change = () => {
        arr = detail.filter((item) => item.type === 'post')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>{path.slice(1)}</h2>
            <hr className='line'></hr>
            <div className='latestmain'>

                <div className='box'>
                    {
                        data.map((item) => <Post key={item.id} id={item.id} title={item.title} desc={item.description} date={item.date} image={item.image} />
                        )
                    }
                    {
                        load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
                    }
                </div>

                <div className='yside'>
                    <h2>Top post</h2>
                    <hr className='story'></hr>
                    {
                        story.map((item) => <Topstory key={item.id} id={item.id} title={item.title} desc={item.description} date={item.date} image={item.image}/>
                    )}

                    <div className='advert'>Advertisement</div>    
                </div>
               

            </div>
          
        </>
    )
}
