import React from 'react'
import 'fa-icons';


export const Stoporderverification = (props) => {
  return (
      <div>


          <a href="/home">
              <i className='bi bi-house-door'></i>
          </a>

          <h3>Stoporder Verification</h3>
          <br/>


          <div className='card_10'>
              <h4 className="card_10">Fetched Growers</h4>
              <br/>

              <div className="row">
                  <div className="col-3">
                      <input type="search" id="form1" className="form-control input-sm" placeholder='Search'/>

                  </div>
                  <div className='col-3'>
                      <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                          Submit
                      </button>

                  </div>
              </div>
              <br/>

              <div className='table-responsive' data-bs-spy="scroll" style={{
                  maxHeight: "500px",
                  overflowY: "auto"
              }}>
                  <table className='table table-striped'>
                      <thead style={{
                          position: "sticky",
                          top: "0"
                      }} className='card_10'>
                      <th>File</th>
                      <th>Grower</th>
                      <th>Name</th>
                      <th>Creditor #</th>
                      <th>Amount 1</th>
                      <th>Amount 2</th>
                      <th>Amount 3</th>
                      <th>Paid</th>
                      <th>Priority</th>
                      <th>Season</th>
                      <th>Sale Date</th>
                      <th>Action</th>
                      </thead>
                      <br/>
                      <tbody>
                      <tr>

                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                      <td>VLSO2505</td>
                      <td>V123456</td>
                      <td>Tinashe Bauti</td>
                      <td>61181</td>
                      <td>00001230</td>
                      <td>00001230</td>
                      <td>00001230</td>
                      <td>00001000</td>
                      <td>1</td>
                      <td>2025</td>
                      <td>15-05-2024</td>
                      <td><a href='#example2' className='bi bi-pencil-square me-3'
                             data-bs-toggle="modal" data-bs-target=""></a>
                          <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                             data-bs-target="#exampleModal_1"></a>
                      </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      <tr>
                          <td>VLSO2505</td>
                          <td>V123456</td>
                          <td>Tinashe Bauti</td>
                          <td>61181</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001230</td>
                          <td>00001000</td>
                          <td>1</td>
                          <td>2025</td>
                          <td>15-05-2024</td>
                          <td><a href='#example2' className='bi bi-pencil-square me-3'
                                 data-bs-toggle="modal" data-bs-target=""></a>
                              <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                 data-bs-target="#exampleModal_1"></a>
                          </td>
                      </tr>
                      </tbody>
                  </table>


              </div>




          {/* Modals */}

          <div className="modal fade" id="example2" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-md">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Edit Stoporder</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                          <div className="row">
                              <div className="col-4">
                                  <p className="card_10"><b>V123456</b></p>
                                  <h6 className="card_10">Tafadzwa Maduuro</h6>
                                  <p className="card_10">66-084355-v-04</p>
                              </div>
                              <div className="col">
                                  <label>Stoporder Number</label>
                                  <p className="card_10"><b>61181</b></p>
                                  <label>Edit Amount</label>
                                  <input className="form-control" type="text" name="EditAmount" id="EditAmount" />
                              </div>

                          </div>
                          <div className="col">
                              <button className="btn btn-primary">Save Amount</button>
                          </div>
                          <br/>

                          <div className="row">
                              <div className="col">
                                  <div className="col-6 col-sm-6 offset-sm-3">
                                      {/*    Success Response*/}
                                      <p className="card_2"><b>Successful !!!</b></p>
                                  </div>

                              </div>

                          </div>

                      </div>


                  </div>
              </div>
          </div>

          <div className="modal fade" id="exampleModal_1" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Delete Stoporder</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <p>Are you sure you want to delete this stoporder???</p>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                          <button type="submit" className="btn btn-primary">YES</button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="modal fade" id="example3" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Grower Stoporders</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                          <div>
                              <p className="card_10 col-4"><b>V123456</b></p>
                              <h6 className="card_10 col-4">Tafadzwa Maduuro</h6>
                              <p className="card_10 col-4">66-084355-v-04</p>
                          </div>
                          <div className='card_10'>
                              <div className='table-responsive' style={{
                                  maxHeight: "250px",
                                  overflowY: "auto", maxWidth: "auto"
                              }}>
                                  <table className='table table-striped table-hover tableFixHead '>
                                      <thead className='card_10' style={{
                                          position: "sticky",
                                          top: "0"
                                      }}>
                                      <tr>
                                          <th></th>
                                          <th>Creditor #</th>
                                          <th>Creditor Name</th>
                                          <th>Season</th>
                                          <th>Type</th>
                                          <th>Amount</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>

                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                      </tr>
                                      <tr>

                                          <td>61512</td>
                                          <td>VLT</td>
                                          <td>2024</td>
                                          <td>USD</td>
                                          <td>250</td>
                                          <td><input type="checkbox" className='form-check-input'/></td>
                                      </tr>

                                      </tbody>

                                  </table>
                              </div>
                          </div>

                          <br/>

                          <div className="row">
                              <div className="col">
                                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete
                                  </button>
                              </div>
                              <div className="col">
                                  <div className="col-6 col-sm-6 offset-sm-3">
                                      {/*    Success Response*/}
                                      <p className="card_2"><b>Successful !!!</b></p>
                                  </div>

                              </div>

                          </div>

                      </div>


                  </div>
              </div>
          </div>
          </div>
      </div>



  )
}
