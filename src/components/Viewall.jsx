import React from 'react'
import Nav from './Nav'

const Viewall = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      
      <th scope="col">name</th>
      <th scope="col">dob</th>
      <th scope="col">bloodgrp</th>
      <th scope="col">mobileno</th>
      <th scope="col">address</th>
      <th scope="col">pincode</th>
      <th scope="col">district</th>
      <th scope="col">place</th>
      <th scope="col">emailid</th>
      <th scope="col">username</th>
      <th scope="col">password</th>
      <th scope="col">confirmpassword</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
    <th scope="col">name</th>
      <td scope="col">dob</td>
      <td scope="col">bloodgrp</td>
      <td scope="col">mobileno</td>
      <td scope="col">address</td>
      <td scope="col">pincode</td>
      <td scope="col">district</td>
      <td scope="col">place</td>
      <td scope="col">emailid</td>
      <td scope="col">username</td>
      <td scope="col">password</td>
      <td scope="col">confirmpassword</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall