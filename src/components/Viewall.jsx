import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewall = () => {

    const [data, changedata] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:8083/view")
            .then(response => {
                changedata(response.data)
            })
            .catch()
            .finally()
    }
    useEffect(() => { fetchData(); }, [])

    return (
        <div>
            <Nav />
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
                                {data.map(
                                    (value, index) => {
                                        return <tr>

                                            <td>{value.name}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.bloodgrp}</td>
                                            <td>{value.mobileno}</td>
                                            <td>{value.address}</td>
                                            <td>{value.pincode}</td>
                                            <td>{value.district}</td>
                                            <td>{value.place}</td>
                                            <td>{value.emailid}</td>
                                            <td>{value.username}</td>
                                            <td>{value.password}</td>
                                            <td>{value.confirmpassword}</td>
                                        </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall