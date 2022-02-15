import React from 'react';
import SideBar from '../components/SideBar';

export default function Login() {
  return (
    <>
      <SideBar />

      <div className="col-10">
        <form>
          <section className="row">
            <div className="col-5 mx-auto">
              <section className="bg-light mb-5 p-5">
                <h2 className="mb-4 text-center">Log into Account</h2>
                <div className="mb-3">
                  <input id="username" name="username" className="form-control" placeholder="Username" type="text" value="" />
                </div>
                <div className="mb-3">
                  <input id="password" name="password" className="form-control" placeholder="Password" type="password" value="" />
                </div>
                <button type="submit" className="btn btn-warning w-100">Login</button>
              </section>
            </div>
          </section>
        </form>
      </div>
    </>
  )
}
