import React from 'react'
import './Data.css';
import Navbar2 from "../Navbar2/Navbar2";
function Data() {
  return (
    <div>
        <Navbar2 />
    <div className='plan'>
      <ul class="list-group">
  <li class="list-group-item text-danger text-center w-50">MY PLAN</li>
  <li class="list-group-item  text-center w-50 ">Monthly Plan</li>
  <li class="list-group-item  text-center w-50  ">you can watch unlimited for a month</li>
  <li class="list-group-item  text-center w-50">RS : 499</li>
  
</ul>
<div className="tble">
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Plan Name</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Weekly</th>
      <td>4-june/2023</td>
      <td>149Rs</td>
      <td><button type="button" class="btn btn-primary">Download</button></td>
    </tr>
    <tr>
      <th scope="row">weekly</th>
      <td>2-oct/2023</td>
      <td>149Rs</td>
      <td><button type="button" class="btn btn-primary">Download</button></td>
    </tr>
    <tr>
      <th scope="row">6 months</th>
      <td>12-jan/2024</td>
      <td>799Rs</td>
      <td><button type="button" class="btn btn-primary">Download</button></td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    </div>
  )
}

export default Data
