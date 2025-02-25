import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="form w-50 mx-auto mt-5 bg-light p-5">
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control" id="name" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readonly className="form-control" id="staticEmail" placeholder="email@example.com" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Gender" className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

        </div>
        <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-success p-3">Sign up</button>
        </div>

        <div className="helloUser mb-3 row d-none">
          <h2>hello Ahmed</h2>
          <h3>your email is </h3>
          <h4> and your Gender</h4>
        </div>
      </div>
    </>
  )
}

export default App