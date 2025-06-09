import React from 'react'

export const DailyStats = (props) => {
  return (
      <div>
          <div>
              <div>
                  <a href="/home">
                      <i className='bi bi-house-door'></i>

                  </a>
                  <h3 className='bi bi-home'>Daily Statistics</h3>
              </div>
          </div>

          <div className="card_10">
              <div className='row'>
                  <div className='col-2'>
                      <div className="dropdown">
                          <button className=" btn btn-primary btn-sm col-16"
                                  data-bs-toggle="modal" data-bs-target="#moa">Daily Statistics
                          </button>
                      </div>
                  </div>
                  <div className='col-2'>
                      <div className="dropdown">
                          <button className=" btn btn-primary btn-sm col-16">TIMB EOD Files</button>
                          <div className="dropdown-content">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#daily_stat">Daily Stats File</a>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#rejection">Rejection File</a>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#bale">Bale File</a>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#deduction">Deduction File</a>
                              <a href="#" data-bs-toggle="modal" data-bs-target="#transporter">Transporter File</a>
                          </div>
                      </div>
                  </div>


              </div>
          </div>

          <br/>

          <div className='card_10'>
              <br/>
              <div className="row">
                  <div className="col-3">
                      <select type="search" id="form1" className="form-control input-sm" placeholder='Search'>
                          <option value="">Select Selling Point</option>
                          <option value="">Vision Leaf Tobacco</option>
                          <option value="">Hillfus Leaf Tobacco</option>
                      </select>

                  </div>
                  <div className="col-3">
                      <input type="search" id="" className="form-control input-sm" placeholder='Search by Date'/>

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
                      <th>Date</th>
                      <th>Laid</th>
                      <th>Sold</th>
                      <th>Rejected</th>
                      <th>Mass</th>
                      <th>Gross Value</th>
                      <th>Highest Price</th>
                      <th>Lowest Price</th>
                      <th>Avg Price</th>
                      <th>Rejection Reason</th>
                      </thead>
                      <br/>
                      <tbody>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>
                      <tr>
                          <td>15-06-2024</td>
                          <td>163</td>
                          <td>163</td>
                          <td>0</td>
                          <td>16000</td>
                          <td>38000</td>
                          <td>5.60</td>
                          <td>1.50</td>
                          <td>3.50</td>
                          <td>WR</td>
                      </tr>

                      </tbody>
                  </table>


              </div>

          </div>

          {/* Modals  */}

          <div className="modal fade" id="moa" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Daily Statistics</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>
                                  <div className='col'>
                                      <label htmlFor="">Location</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select All</option>
                                          <option value="">A</option>
                                          <option value="">B</option>
                                          <option value="">C</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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

          <div className="modal fade" id="daily_stat" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Daily Statistics</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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

          <div className="modal fade" id="deduction" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Deduction File</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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

          <div className="modal fade" id="bale" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Bale File</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">

                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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

          <div className="modal fade" id="rejection" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Rejection File</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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

          <div className="modal fade" id="transporter" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
               aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content ">
                      <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Transporter File</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Sale Date</label>
                                      <input type="date" id='' className='form-control'/>
                                  </div>

                              </div>
                              <br/>
                              <div className='row'>
                                  <div className='col'>
                                      <label htmlFor="">Selling Point</label>
                                      <select type="number" id='' className='form-control'>
                                          <option value="">Select</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                          <option value="">Horizon Leaf Tobacco</option>
                                          <option value="">Vision Leaf Tobacco</option>
                                      </select>

                                  </div>

                              </div>
                              <br/>

                      </div>
                      <div className="modal-footer">

                          <a type="button" className="btn btn-primary" href="./FC.csv" download>Generate Report</a>
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
  )
}

