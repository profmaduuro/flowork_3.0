import React from 'react'
import './manageusers.css'

const ManageUsers = (props) => {
  return (
      <div>
          <a href="/">
              <i className='bi bi-house-door'></i>
          </a>
          <h3 className='bi bi-home'>Create Users</h3>
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light card_10">
                  <div className="container-fluid">
                      {/* <a href="#" class="navbar-brand">Brand</a> */}
                      <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                              data-bs-target="#navbarCollapse">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                          <div className="navbar-nav">
                              <a href="" className="nav-item nav-link active" data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_2">Create User</a>
                          </div>
                      </div>
                  </div>
              </nav>
          </div>

          <br/>

          {/*<div className='col-auto'>*/}

          {/*    <button className='btn btn-primary' type='POST' data-bs-toggle="modal"*/}
          {/*            data-bs-target="#exampleModal_2">Create User*/}
          {/*    </button>*/}

          {/*    /!*  *!/*/}

          {/*</div>*/}

          <br/>
          <br/>
          <br/>

         <div className='card_10'>
             <div>
                 <div className="col-6 col-sm-6 offset-sm-3">
                     {/*    Success Response*/}
                     <p className="card_2"><b>Users Accounts</b></p>
                 </div>
             </div>
          <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px",
              overflowY: "auto" }} >
              <table className='table table-striped'>
                  <thead style={{ position: "sticky",
                      top: "0" }} className='card_10'>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">UserName</th>
                      <th scope="col">Name</th>
                      <th scope="col">Surname</th>
                      <th>Role</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>TMADUURO</td>
                      <td>Tafadzwa</td>
                      <td>Maduuro</td>
                      <td>Administrator</td>
                      <td>
                          <a href='#exampleModal' className='bi bi-pencil-square me-3'
                             data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                          <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_4"></a>
                          <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_1"></a>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>TMADUURO</td>
                      <td>Tafadzwa</td>
                      <td>Maduuro</td>
                      <td>Administrator</td>
                      <td>

                          <a href='#exampleModal' className='bi bi-pencil-square me-3'
                             data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                          <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_4"></a>
                          <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_1"></a>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>TMADUURO</td>
                      <td>Tafadzwa</td>
                      <td>Maduuro</td>
                      <td>Administrator</td>
                      <td>
                          <a href='#exampleModal' className='bi bi-pencil-square me-3'
                             data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
                          <a href="" className='bi bi-universal-access me-3' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_4"></a>
                          <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_1"></a>
                      </td>
                  </tr>

                  </tbody>

              </table>
          </div>
         </div>

          {/* Modals */}

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <div>
                              <div className="row">
                                  <div className="col">
                                      <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                      <input type="text" className="form-control" id="" placeholder="Name"/>
                                  </div>
                                  <div className="col">
                                      <label htmlFor="recipient-name" className="col-form-label">Floor Code:</label>
                                      <input type="text" className="form-control" id="" placeholder="Floor Code"/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col">
                                      <label htmlFor="recipient-name" className="col-form-label">Floor ID:</label>
                                      <input type="text" className="form-select" id="" placeholder="Floor ID"/>
                                  </div>
                                  <div className="col">
                                      <label htmlFor="" className="col-form-label">Assign New Role:</label>
                                      <select type="text" className='form-select sm'>
                                          <option value="">Select Role</option>
                                          <option value="">Administrator</option>
                                          <option value="">Reg Clerk</option>
                                          <option value="">Loans Clerk</option>
                                          <option value="">Data Capturer</option>
                                          <option value="">Receiving Clerk</option>
                                          <option value="">Accounts Clerk</option>
                                          <option value="">Accountant</option>
                                          <option value="">Finance Manager</option>
                                          <option value="">Warehouse Supervisor</option>
                                      </select>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-primary">Update</button>
                      </div>
                      <div>
                          <div className="col-6 col-sm-6 offset-sm-3">
                              {/*    Success Response*/}
                              <p className="card_2"><b>Successful !!!</b></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <p>Are you sure you want to delete user???</p>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                          <button type="submit" className="btn btn-primary">YES</button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal fade" id="exampleModal_2" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                         <div className="row">
                             <div className="col">
                                 <label htmlFor="File to Upload">Username</label>
                                 <input type="text" className='form-control' placeholder='Enter Username'/>
                             </div>
                             <div className="col">
                                 <label htmlFor="File to Upload">Name</label>
                                 <input type="text" className='form-control' placeholder='Enter Name'/>
                             </div>
                         </div>
                          <div className="row">
                              <div className="col">
                                  <label htmlFor="File to Upload">Surname</label>
                                  <input type="text" className='form-control sm' placeholder='Enter Surname'/>
                              </div>
                              <div className="col">
                                  <label htmlFor="File to Upload">Surname</label>
                                  <select type="text" className='form-select sm'>
                                      <option value="">Select Role</option>
                                      <option value="">Administrator</option>
                                      <option value="">Reg Clerk</option>
                                      <option value="">Loans Clerk</option>
                                      <option value="">Data Capturer</option>
                                      <option value="">Receiving Clerk</option>
                                      <option value="">Accounts Clerk</option>
                                      <option value="">Accountant</option>
                                      <option value="">Finance Manager</option>
                                      <option value="">Warehouse Supervisor</option>
                                  </select>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col">
                                  <label htmlFor="File to Upload">Create Password</label>
                                  <input type="password" className='form-control sm'/>
                              </div>
                              <div className="col">
                                  <label htmlFor="File to Upload">Verify Password</label>
                                  <input type="password" className='form-control sm'/>
                              </div>
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="submit" className='btn btn-primary' value='Submit'>Submit</button>
                      </div>
                      <div>
                          <div className="col-6 col-sm-6 offset-sm-3">
                              {/*    Success Response*/}
                              <p className="card_2"><b>Successful !!!</b></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal fade" id="exampleModal_4" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Assign Rights</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                          <label htmlFor="File to Upload">Username</label>
                          <select type="text" className='form-control' placeholder='Enter Username'>
                              <option value="">Select User</option>
                              <option value="">Tafadzwa Maduuro</option>
                              <option value="">Tinashe Magari</option>
                              <option value="">Bright Kaponda</option>
                          </select>

                          <br/>

                          <table>
                              <h6>Rights</h6>
                              <thead>
                              <th></th>
                              <th></th>
                              </thead>
                              <tbody>
                              <tr>
                                  <td></td>
                                  <div className="row">
                                      <td type="" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Accounts</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Receiving</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Sales</label>
                                      </td>
                                      <td type="" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Accounts</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Receiving</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Sales</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Reports</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> Start-off</label>
                                      </td>
                                      <td type="" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label">EOD</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label">Settings</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label">GMS</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label">LMS</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <input type="checkbox" className='form-check-input'/>
                                          <label className="form-check-label"> QuickAcc</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <label className="checkbox-inline">
                                              <input type="checkbox" className='form-check-input'/>Stoporders</label>
                                      </td>
                                      <td type="checkbox" className='checkbox col'>
                                          <label className="checkbox-inline">
                                              <input type="checkbox" className='form-check-input'/> Floor</label>
                                      </td>
                                  </div>
                              </tr>

                              </tbody>
                          </table>


                      </div>
                      <div className="modal-footer">
                          <button type="submit" className='btn btn-primary' value='Submit'>Submit</button>
                      </div>
                      <div>
                          <div className="col-6 col-sm-6 offset-sm-3">
                              {/*    Success Response*/}
                              <p className="card_2"><b>Successful !!!</b></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
  );
}

export default ManageUsers;