import React from 'react'





export const Deliverynotes = (props) => {

    let truckid=0;

    const createTransporter=()=>{
        const location=document.getElementById("location").value
        const vehicleid=document.getElementById("vehicleid").value
        const phone=document.getElementById("phone").value
        const driverid=document.getElementById("driverid").value
        const name=document.getElementById("name").value
        const sale_date=document.getElementById("sale_date").value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: 1,
                seasonid:1,
                name:name,
                id_num:driverid,
                truck_num:vehicleid,
                location:location,
                phone:phone,
                created_at:sale_date
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_transporter_dnote.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                //console.log(data.response)
                if (data[0].response==="success"){

                    // const location=document.getElementById("location").clear
                    // const vehicleid=document.getElementById("vehicleid").clear
                    // const phone=document.getElementById("phone").clear
                    // const driverid=document.getElementById("driverid").clear
                    // const name=document.getElementById("name").clear
                    // const sale_date=document.getElementById("sale_date").clear
                    truckid=data[0].id


                }else {

                }
            });
    }


    const createTransporterGrowers=()=>{

        const bales=document.getElementById("bales").value
        const grower_num=document.getElementById("grower_num").value
        const d = new Date();
        let date=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: 1,
                transporterid:truckid,
                grower_num:grower_num,
                selling_pointid:1,
                bales:bales,
                created_at:date
            })
        };


        fetch('http://'+props.id_address+'/king/api/create_transporter_grower.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                if (data[0].response==="success"){

                    // const location=document.getElementById("location").clear
                    // const vehicleid=document.getElementById("vehicleid").clear
                    // const phone=document.getElementById("phone").clear
                    // const driverid=document.getElementById("driverid").clear
                    // const name=document.getElementById("name").clear
                    // const sale_date=document.getElementById("sale_date").clear
                    //truckid=data[0].id

                }else {

                }
            });
    }



  return (
    <div>
        <div>
            <a href="/home">
                <i className='bi bi-house-door'></i>
            </a>

            <h3 className='bi bi-home'>Deliveries</h3>
        </div>

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
                <div class="container-fluid">
                    {/* <a href="#" class="navbar-brand">Brand</a> */}
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Create Transporter</a>
                            {/* <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Create Delivery Note</a> */}
                            {/* <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Bale Receiving</a> */}
                            <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example4"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <br />
        <br />

        <div className='card_10'>
        
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i> Transporters Delivery Note</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i> Grower Delivery Notes</a>
                </li>
                <li class="nav-item" role="presentation">

                    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> </a>
                </li>
            </ul>
            <div class="tab-content pt-5" id="tab-content">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='table table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
                        <table className='table table-striped table-hover'>
                            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                                <th>TDN #</th>
                                <th>Delivery By</th>
                                <th>ID</th>
                                <th>Vehicle Reg</th>
                                <th>Growers</th>
                                <th>Bales</th>
                                <th>Season</th>
                                <th>Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody>

                            {
                                props.deliveryNoteData.map((u,i)=>{

                                    return(
                                            <tr className='' href="" data-bs-toggle="modal" data-bs-target="#example2">
                                                <td>{props.deliveryNoteData[i].id}</td>
                                                <td>{props.deliveryNoteData[i].name}</td>
                                                <td>{props.deliveryNoteData[i].id_num}</td>
                                                <td>{props.deliveryNoteData[i].truck_num}</td>
                                                <td>{props.deliveryNoteData[i].growers}</td>
                                                <td>{props.deliveryNoteData[i].bales}</td>
                                                <td>2024</td>
                                                <td>{props.deliveryNoteData[i].created_at}</td>
                                                <td>Open</td>
                                            </tr>
                                        )

                                })
                            }


                            </tbody>
                        </table>

                    </div>
                    
                </div>
                <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='table table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
                        <table className='table table-striped table-hover'>
                            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                                <th>GDN #</th>
                                <th>Grower</th>
                                <th>Name</th>
                                <th>Selling Point</th>
                                <th>Floor</th>
                                <th>Bales Delivered</th>
                                <th>Bales Received</th>
                                <th>Date Created</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                            {
                                props.growerDeliveryNoteData.map((u,i)=>{
                                    return(
                                        <tr>
                                            <td>{props.growerDeliveryNoteData[i].id}</td>
                                            <td>{props.growerDeliveryNoteData[i].grower_num}</td>
                                            <td>{props.growerDeliveryNoteData[i].name +" "+props.growerDeliveryNoteData[i].surname}</td>
                                            <td>{props.growerDeliveryNoteData[i].selling_point_name}</td>
                                            <td>{props.growerDeliveryNoteData[i].location}</td>
                                            <td>{props.growerDeliveryNoteData[i].bales}</td>
                                            <td>{props.growerDeliveryNoteData[i].junused_bales}</td>
                                            <td>{props.growerDeliveryNoteData[i].created_at}</td>
                                            <td>Closed</td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>

                    </div>
                </div>
                
                </div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Laying</div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Booking</div>
            </div>
       
        </div>

{/* Modals */}

        <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body form-group row">
                            <form>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Name</label>
                                        <input type="name" class="form-control" id="name" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">ID</label>
                                        <input type="name" class="form-control" id="driverid" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Vehicle Reg</label>
                                        <input type="name" class="form-control" id="vehicleid" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Contact</label>
                                        <input type="phone" class="form-control" id="phone" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Location</label>
                                        <input type="name" class="form-control" id="location" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Date</label>
                                        <input type="date" class="form-control" id="sale_date" />
                                    </div>
                                </div>
                                
                                </form>

                            </div>
                            <br />

                            <button className='btn btn-success' onClick={createTransporter}>Save</button>

                            <br />

                            <div className='modal-body form group'>
                            <form action="">
                            <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Enter  Grower</label>
                                        <input type="name" class="form-control" id="grower_num" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Number Of Bales</label>
                                        <input type="number" class="form-control" id="bales" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">.</label>
                                        <button type="button" class="btn btn-primary"  onClick={createTransporterGrowers} id="">Submit</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button class="btn btn-primary" type="button">Complete Delivery</button>
                            </div>

                        </div>

                        

                    </div>
                </div>
            
         

            <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Grower Delivery Notes</h5>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <br />

                        <div className='row'>
                            <div className='col'>
                                <h6></h6>
                            </div>
                            <div className='col'>                                
                                <button type="button" class="btn btn-primary">TDN00021546</button>
                            </div> 
                            <div className='col'>
                                <h6></h6>
                            </div>
                        </div>
                        
                        <div class="modal-body form-group row">
                            <form>
                            <div className='row'>
                            <div class="col">
                                <label for="recipient-name" class="col-form-label">Search</label>
                                <input type="search" class="form-control" id="sale_date"/>
                            </div>
                            <div class="col">
                                <label for="recipient-name" class="col-form-label"></label>
                                {/* <input type="number" class="form-control" id="sale_date" /> */}
                            </div>

                            {/* <div class="col">
                                <label for="recipient-name" class="col-form-label">Contact</label>
                                <input type="name" class="form-control" id="sale_date" />
                            </div> */}

                            </div>
                            <br />

                            {/* <button className='btn btn-success'>Save</button> */}


                            </form>
                        </div>
{/* Echo a table showing the growers that have been place in the tdn */}
                        <div className='card_10 table-responsive'>
                            <table className='table table-striped'>
                                <thead>
                                    <th>Grower</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Bales</th>
                                    <th>GDN Number</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>10</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>10</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>10</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>10</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                </tbody>

                            </table>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button class="btn btn-primary" type="button">Complete Delivery</button> */}
                        </div>
                        </div>
                    </div>
            </div>

    </div>
  )
}

