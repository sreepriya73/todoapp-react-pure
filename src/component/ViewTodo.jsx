import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewTodo = () => {
    const [data, setdata] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
               setdata(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

  return (

    <div>
        <NavBar/>
        <h1><center>post</center></h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table" border="3" >
                            <thead>
                                <tr>
                                    <th scope="col">tid</th>
                                    <th scope="col">title</th>
                                   
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            

                                        </tr>


                                    </tbody>
                                }
                            )
                        }
</table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewTodo