import React from 'react'

const StopOrderProcess = (props) => {
    const  runStopOrder=()=> {

        var selling_pointid = document.getElementById("selling_pointid").value;


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                selling_pointid: selling_pointid,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/run_stop_orders.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
    <div>
      <a href="/home">
              <i className='bi bi-house-door'></i>
            </a>
     <h3 className='bi bi-home'>StopOrder Processing</h3>

     <div className=''>
        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example3">Stop-order Processing</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example"></a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2"></a>
                    </div>
                </div>
            </div>
        </nav>
      </div>

      <br />
      <br />

      <div className='card_10'>
      <h5><b>Deductions</b></h5>
      <br />
                    <div class="row">
                        <div class="col-3">
                            <input type="search" id="form1" className="form-control input-sm" placeholder='Search' />
                            
                        </div>
                        <div className='col-3'>
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                            Submit
                            </button>

                        </div>   
                    </div>
                    <br />
        <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
        <table className='table table-striped table-hover'>
            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                <tr>
                  <th>Sale Date</th>
                <th>Grower</th>
                <th>Name</th>
                <th>Creditor</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>DeductionFrom</th>
                <th>Day</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                <tr>
                    <td>15/05/2024</td>
                    <td>V101101</td>
                    <td>61512</td>
                    <td>MTC Rollover</td>
                    <td>150.00</td>
                    <td>USD</td>
                    <td>Internal Invoice</td>
                    <td>4152</td>
                    <td>15/05/2024</td>
                </tr>
                
            </tbody>

        </table>
        </div>

      </div>

      {/* modals */}

      <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Stoporder Processing</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form className='col-xs-2'>
                   
                    <div class="inline">
                        <label for="recipient-name" class="col-form-label">Selling Point</label>
                        <select type="date" class="form-control" id="selling_pointid">
                            <option value="">Select Company</option>
                            {
                                props.sellingPointsData.map((u,i)=>{
                                    return(
                                            <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                        )

                                })
                            }

                        </select>
                        <br />
                        {/* <label for="recipient-name" class="col-form-label">Upload Contract Registry</label>
                        <input type="file" class="form-control" id="" /> */}
                    </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={runStopOrder}>Start Stoporder Processing</button>
                </div>
                </div>
            </div>
      </div>
     
    </div>
  )
}

export default StopOrderProcess;
