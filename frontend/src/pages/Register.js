import React from 'react';
import SideBar from '../components/SideBar';
import './Register.css';

export default function Register() {
  return (
    <>
      <SideBar />

      <div className="col-10">
        <form>
          <section className="row">
            <div className="col-5 mx-auto">
              <section className="bg-light mb-5 p-5">
                <h2 className="mb-4 text-center">New User?</h2>
                <div className="mb-3">
                  <input name="fullName" className="form-control" placeholder="Your Name" type="text" value="" />
                </div>
                <div className="mb-3">
                  <input name="username" className="form-control" placeholder="Username" type="text" value="" />
                </div>
                <div className="mb-3">
                  <input name="age" className="form-control" placeholder="Your Age" type="number" value="" />
                </div>
                <div className="mb-3">
                  <input name="password" className="form-control" placeholder="Password" type="password" value="" />
                </div>
                <button type="submit" className="btn btn-warning w-100">Register</button>
              </section>
            </div>
          </section>
        </form>
      </div>
    </>
  )
}
