import axios from 'axios'
import React, { useState, useRef} from 'react'
import { useEffect } from 'react'
import Post from './Post'

export default function Thepost() {
const path=window.location.pathname

    const[detail,setdetail]=useState()
    const [data, setdata] = useState([])
    const temp = useRef()
    const[load,setload]=useState(false)

    temp.current = fil
    let arr;
    useEffect(() => {

        axios.get("https://young-cliffs-77803.herokuapp.com/api/v1/blog" + path).then((response) => {
            setdetail(response.data)
            temp.current()
        })

    }, [path]);
    function fil() {
        arr = detail.filter((item) => item.type === 'post')
        
        arr= arr.filter((item, index) => index < 3)
        setdata([...arr])
        }
    const change=()=>{
        arr = detail.filter((item) => item.type === 'post')
        setdata([...arr])
        setload(true)
    }
    return (
        <>
            <h2 className='thetitle'>The Latest</h2>
            <hr className='line'></hr>
            <div className='latestmain'>

            <div className='box'>
                {
                    data.map((item) => <Post key={item.id} title={item.title} desc={item.description} id={item.id} date={item.date} image={item.image} />
                    )
                }
            </div> 

            <div className='adv'>Advertisement</div>

        </div>
            {
                load ? null : <h3 className='load'><button onClick={change}>Load more</button></h3>
            }
        </>
    )
}
