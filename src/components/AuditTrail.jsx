import React from "react";

const AuditTrail = (props) => {
    return (
        <div className="">
            <a href="/home">
                <i className='bi bi-house-door'></i>
            </a>
            <h3 className='bi bi-home'>Audit Trail</h3>

            {/*<div>*/}
            {/*    <nav className="navbar navbar-expand-lg navbar-light bg-light card_10">*/}
            {/*        <div className="container-fluid">*/}
            {/*            /!* <a href="#" class="navbar-brand">Brand</a> *!/*/}
            {/*            <button type="button" className="navbar-toggler" data-bs-toggle="collapse"*/}
            {/*                    data-bs-target="#navbarCollapse">*/}
            {/*                <span className="navbar-toggler-icon"></span>*/}
            {/*            </button>*/}
            {/*            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">*/}
            {/*                <div className="navbar-nav">*/}
            {/*                    <a href="" className="nav-item nav-link active" data-bs-toggle="modal"*/}
            {/*                       data-bs-target="#exampleModal_2">Create User</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            <br/>
            <br/>

            <div>
                <div className="col-6 col-sm-6 offset-sm-3">
                    {/*    Success Response*/}
                    <p className="card_2"><b>Users Actions</b></p>
                </div>
            </div>

            <div className='card_10'>

                <div className='table-responsive' data-bs-spy="scroll" style={{
                    maxHeight: "auto",
                    overflowY: "auto"
                }}>
                    <table className='table table-striped'>
                        <thead style={{
                            position: "sticky",
                            top: "0"
                        }} className='card_10'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Section</th>
                            <th scope="col">Date</th>
                            <th>Timestamp</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>TMADUURO</td>
                            <td>Balanced the sale</td>
                            <td>Sale Processing</td>
                            <td>25-05-2025</td>
                            <td>09:10:15</td>
                            <td>
                                <a href='#' className='bi bi-trash ' data-bs-toggle="modal"
                                   data-bs-target="#exampleModal_1"></a>
                            </td>
                        </tr>

                        </tbody>

                    </table>
                </div>
            </div>

            {/*    modals*/}

            <div className="modal fade" id="exampleModal_1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Record</h5>
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

        </div>
    )
}
export default AuditTrail;