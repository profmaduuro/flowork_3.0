import React from "react";


export const Bales = (props) => {
    return (
        <div>
            <a href="/home">
                <i className='bi bi-house-door'></i>

            </a>
            <h3 className='bi bi-home'>Bales </h3>

            <div className='card_10'>

                <div className="">
                    <div className="dropdown">
                        <button className=" btn btn-primary btn-sm col-auto">Bales Action</button>
                        <div className="dropdown-content">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#example1">Bales Export</a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#example2">Adjusted Bales</a>
                        </div>
                    </div>

                    {/*<a href="" className="nav-item nav-link active" data-bs-toggle="modal"*/}
                    {/*   data-bs-target="#example3">Bale Edit</a>*/}
                    {/*/!*<a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#success-animation">test</a>*!/*/}
                    {/*<a href="" className="nav-item nav-link" data-bs-toggle="modal"*/}
                    {/*   data-bs-target="#example4"></a>*/}


                </div>

            </div>
            <br/>

            <br/>
            <div className="card_10">
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
                    <div className='col-3'>
                        <button type="button" className="btn btn-danger" data-mdb-ripple-init>
                            Delete
                        </button>
                    </div>
                </div>

                <br/>

                <div className='table table-responsive' data-bs-spy="scroll" style={{
                    maxHeight: "500px",
                    overflowY: "auto"
                }}>
                    <table className='table table-striped table-hover'>
                        <thead style={{
                            position: "sticky",
                            top: "0"
                        }} className='card_10'>
                        <td><input type="checkbox" className='form-check-input'/></td>
                        <th>Barcode</th>
                        <th>Temp Barcode</th>
                        <th>Grower</th>
                        <th>Dnote</th>
                        <th>Grp</th>
                        <th>Lot</th>
                        <th>Location</th>
                        <th>Season</th>
                        <th>Status</th>
                        <th>Mass</th>
                        <th>US Price</th>
                        <th>Buyer</th>
                        <th>Buyer Gr</th>
                        <th>TIMB Gr</th>
                        <th>Created At</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className='form-check-input'/></td>
                            <td data-bs-toggle="modal" data-bs-target="#example4">6500526312s</td>
                            <td>vl001236</td>
                            <td>V123456</td>
                            <td>TDN001</td>
                            <td>1</td>
                            <td>1</td>
                            <td>A</td>
                            <td>2025</td>
                            <td>Processed</td>
                            <td>100</td>
                            <td>2.20</td>
                            <td>PA2</td>
                            <td>LALI</td>
                            <td>L2O</td>
                            <td>25-05-2025</td>
                        </tr>

                        </tbody>
                    </table>

                </div>
                {/*<div className="row">*/}
                {/*    <div className="col">*/}
                {/*        <button className='btn btn-secondary'> Download Shipment File</button>*/}
                {/*    </div>*/}
                {/*    <div className="col">*/}
                {/*        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#example4"> Edit Shipment</button>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>


            {/* <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Laying</div>
                        <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Booking</div> */}

            <div className="modal fade" id="example2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adjusted Bales</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body form-group row">
                            <form className='col-xs-2'>

                                <div className="inline">
                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="recipient-name" className="col-form-label">Sale Date</label>
                                            <input className="form-control" type="date"/>
                                        </div>
                                        <div className='col'>
                                            <label htmlFor="recipient-name" className="col-form-label">Location</label>
                                            <select id='' className='form-control'>
                                                <option value=''>Select All</option>
                                                <option value='1'>A</option>
                                                <option value=''>A</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="">Selling Point</label>
                                            <select id='' className='form-control'>
                                                <option value=''>Select All</option>
                                                <option value='1'>Vision Leaf Tobacco</option>
                                                <option value=''>Vision Leaf Tobacco</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>

                        </div>
                        <br/>
                        <div className="col-6 col-sm-6 offset-sm-3">
                            {/*    Success Response*/}
                            <p className="card_2"><b>Successful !!!</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="example4" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Bale</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body form-group row">
                            <form className='col-xs-2'>

                                <div className="inline">
                                    <div className='col'>
                                        <label htmlFor="recipient-name" className="col-form-label">Delivery Note</label>
                                        <input className="card_10 form-control" type="text"/>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="recipient-name" className="col-form-label">Barcode</label>
                                            <input className="form-control card_10" type="text"/>
                                        </div>
                                        <div className='col'>
                                            <label htmlFor="recipient-name" className="col-form-label">Mass</label>
                                            <input className="form-control card_10" type="text"/>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col">
                                            <label htmlFor="recipient-name" className="col-form-label">Group</label>
                                            <input className="form-control card_10" type="text"/>

                                        </div>

                                        <div className="col">
                                            <label htmlFor="recipient-name" className="col-form-label">Lot</label>
                                            <input className="form-control card_10" type="text"/>

                                        </div>

                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>

                        </div>
                        <br/>
                        <div className="col-6 col-sm-6 offset-sm-3">
                            {/*    Success Response*/}
                            <p className="card_2"><b>Successful !!!</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="example1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Bales Export</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">Sale Date</label>
                                        <input type="date" id='' className='form-control'/>
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Location</label>
                                        <select id='' className='form-control'>
                                            <option value=''>Select All</option>
                                            <option value='1'>A</option>
                                            <option value=''>A</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                                </div>
                                <br/>

                            </form>

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