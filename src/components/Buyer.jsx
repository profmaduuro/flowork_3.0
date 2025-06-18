import React from 'react'
import "./buyer.css";

const Buyer = (props) => {


    const createBuyer=()=>{

        const name=document.getElementById("name").value
        const buyer_code=document.getElementById("buyer_code").value
        const selling_points=document.getElementById("selling_points").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name,
                buyer_code:buyer_code,
                userid: 1,
                selling_pointid:selling_points,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_buyer.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")

            });

    }
    const getSellingPoints=(event)=>{
        // id = event.target.id;
        // document.getElementById("id").value=id
        //
        // console.log(id)

        var x = document.getElementById("selling_points");


        var name =null;



        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }

        console.log(props.sellingPointsData,"kkkkkkk")

        props.sellingPointsData.map((u,i)=>{
            console.log(i,"my new data")
            name = document.createElement("option");
            name.value=props.sellingPointsData[i].id


            var opt = document.createTextNode(props.sellingPointsData[i].name);

            name.appendChild(opt)

            x.appendChild(name)


        })



    }


    //getSellingPoints()
    console.log(props.buyersData,"oo");
    return (
        <div>

            <a href="/home">
                <i className='bi bi-house-door'></i>
            </a>
            <br/>


            <div className="card_10">
                <div className='row'>
                    <div className='col'>
                        <div className="dropdown">
                            <button className=" btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#example">Create Buyer</button>
                            <div className="dropdown-content">
                                {/*<a href="#" data-bs-toggle="modal" data-bs-target="#example">Generate Payment*/}
                                {/*    Schedule</a>*/}
                                {/*<a href="#" data-bs-toggle="modal" data-bs-target="#example2">Bank Schedule</a>*/}
                                {/*/!* <a href="#" data-bs-toggle="modal" data-bs-target="#example3">Grower Payment Schedule</a> *!/*/}
                                {/*/!* <a href="#">Link 3</a> *!/*/}
                            </div>
                        </div>
                    </div>
                    {/* <div className='col'>
                    <a class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#example4">Reverse Sales</a>
                </div> */}
                    <div className='col'>
                        {/* <button class=" btn btn-success btn-sm"></button> */}
                    </div>
                    <div className='col'>
                        {/* <button class=" btn btn-success btn-sm"></button> */}
                    </div>
                    <div className='col'>
                        {/* <button class=" btn btn-success btn-sm"></button> */}
                    </div>
                    <div className='col'>
                        {/* <button class=" btn btn-success btn-sm"></button> */}
                    </div>


                </div>
            </div>

            {/*create buyer*/}

            <div className="modal fade" id="example" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="">Create Buyer</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>

                     <div className="modal-body">
                        <div className='row'>
                             <div className='col'>
                                 <label htmlFor="">Buyer Name</label>
                                 <input type="text" className='form-control' id="name" placeholder="Buyer Name" />
                             </div>
                            <div className='col'>
                                <label htmlFor="">Buyer Code</label>
                                <input type="text" className='form-control' id="buyer_code" placeholder="Buyer Code" />
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="text" className='form-select' id="selling_points">
                                        {
                                            props.sellingPointsData.map((u, i) => {
                                                return (
                                                    <option
                                                        value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name} </option>
                                                )
                                            })
                                        }

                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="">
                            <button type="submit" name="" id="" className='btn btn-primary'
                                    onClick={createBuyer}>Submit
                            </button>

                        </div>
                        <br/>
                        <div>
                            <div className="col-6 col-sm-6 offset-sm-3">
                                {/*    Success Response*/}
                                <p className="card_2"><b>Successful !!!</b></p>
                            </div>
                        </div>
                </div>

            </div>
            </div>

                        {/*end of create buyer modal*/}

                        <br/>
                        <br/>

                        <div className='card_1'>
                            <div>
                                <div className="col-auto col-sm-6 offset-sm-3">
                                    {/*    Success Response*/}
                                    <p className="card_2"><b>BUYERS</b></p>
                                </div>
                            </div>

                            <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px",
                                overflowY: "auto" }} >
                                <table className='table table-striped'>
                                    <thead style={{ position: "sticky",
                                        top: "0" }} className='card_10'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Buyer Code</th>
                                    <th scope="col">Selling Point</th>
                                    <th scope='col'>Action</th>
                                </tr>
                                </thead>
                                <tbody id="tbody">


                                {

                                    props.buyersData.map((u, i) => {

                                        return (
                                            <tr>
                                                <th scope="row">{props.buyersData[i].id}</th>
                                                <td>{props.buyersData[i].name}</td>
                                                <td>{props.buyersData[i].buyer_code}</td>
                                                <td>{props.buyersData[i].selling_point_name}</td>
                                                <td>
                                                    <a href='#exampleModal' className='bi bi-pencil-square me-3'
                                                       data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                       id={props.buyersData[i].id}></a>
                                                    <a href='#' className='bi bi-trash' data-bs-toggle="modal"
                                                       data-bs-target="#exampleModal_1" id={props.buyersData[i].id}></a>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                                </tbody>

                            </table>


                        </div>
                        </div>

                        {/* Modals */}

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Buyer</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label for="recipient-name" class="col-form-label">Buyer Name:</label>
                                                <input type="text" class="form-control" id="recipient-name"/>
                                            </div>
                                            <div className="mb-3">
                                                <label for="recipient-name" class="col-form-label">Buyer Code:</label>
                                                <input type="text" class="form-control" id="recipient-name"/>
                                            </div>
                                            <div className="mb-3">
                                                <label for="recipient-name" class="col-form-label">Selling
                                                    Point:</label>
                                                <select type="text" class="form-select" id="recipient-name">
                                                    <option value="select point">Select Selling Point</option>
                                                    <option value="">VisionLeaf Tobacco</option>
                                                    <option value="">Horizon</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="exampleModal_1" tabIndex="-1"
                             aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Delete Buyer</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete???</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel
                                        </button>
                                        <button type="submit" className="btn btn-primary">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                    }

                    export default Buyer;
