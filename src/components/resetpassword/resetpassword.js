import React from 'react'
import Navbar from '../NavBar/NavBar'
function resetpassword() {
  return (
    <div className="container-fluid">
         <Navbar />
      <div class=" background row ml-0">
            <div className="container col-5 mt-5">
                <div className="row mt-5 border bg-white rounded border-primary">
                    <div className="col-8 offset-2">
                        <h1 className='text-center text-primary'>Reset Password </h1>
                       
                        <div className="form-group">
                            <label className='text-secondary'>new password:</label>
                            <input
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className='text-secondary'> Conform Password:</label>
                            <input
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary  col-12">
                            Save
                        </button>
                    </div>
        </div>    </div>    </div>    </div>  
    </div>
  )
}

export default resetpassword
