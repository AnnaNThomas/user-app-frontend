import React from 'react'
import Nav from './Nav'

const Signup = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAv2SzopG8pBzJhCxKprxgPEQb5pH1g44jQ&s" class="rounded mx-auto d-block" alt="..." />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">NAME</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">DOB</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">BLOOD GROUP</label>
                        <select name="" id="" class="form-control">
                            <option class="option">A+ve</option>
                            <option class="option">B+ve</option>
                            <option class="option">B-ve</option>
                            <option class="option">A-ve</option>
                            <option class="option">O-ve</option>
                            <option class="option">O-ve</option>
                        </select>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">MOBILE NUMBER</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="form-label">ADDRESS</label>
                        <textarea name="" id="" class="form-control"></textarea>
                    </div><br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">PIN CODE</label>
                        <input type="text" className="form-control" />
                    </div><br></br>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">DISTRICT</label>
                    <select name="" id="" class="form-control">
                        <option class="option">THRISSUR</option>
                        <option class="option">Thiruvananthapuram</option>
                        <option class="option">Kollam</option>
                        <option class="option">Alappuzha</option>
                        <option class="option">Pathanamthitta</option>
                        <option class="option">Kottayam</option>
                        <option class="option">Idukki</option>
                        <option class="option">Ernakulam</option>
                        <option class="option">Palakkad</option>
                        <option class="option">Malappuram</option>
                        <option class="option">Kozhikode</option>
                        <option class="option">Wayanadu</option>
                        <option class="option">KANNUR</option>
                        <option class="option">KASARGOD</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">PLACE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">EMAIL ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label className="form-label">USERNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label className="form-label">PASSWORD</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label className="form-label">CONFIRM PASSWORD</label>
                    <input type="text" className="form-control" />
                </div>
                <br></br>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-dark">REGISTER</button>
                </div><br></br>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p><a href="Addlogin.jsx" class="link-dark">BACK TO LOGIN PAGE</a></p>
                </div>
            </div>
        </div>


    )
}


export default Signup