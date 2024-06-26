import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios';

const Addlogin = () => {
  
    const [data,setData] = useState(
        {

            "username": "",
            "password": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
    }
    
  return (
    <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <img src="data:image/png;base64,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" class="rounded mx-auto d-block" alt="..."/>
            
                </div>
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label className="form-label">USERNAME</label>
              <input type="text" className="form-control" username={data.username} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label className="form-label">PASSWORD</label>
              <input type="text" className="form-control" password={data.password} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-primary" onClick={readValue}>LOGIN</button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <p><a href="/Signup" class="link-primary">NEW USER CLICK HERE</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Addlogin