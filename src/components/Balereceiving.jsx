import React from 'react'
import './balereceiving.css'
import Badge from 'react-bootstrap/Badge';

export const Balereceiving = (props) => {


    const saveBaleData=()=>{

            const barcode = document.getElementById("barcode").value
            const grower_num = document.getElementById("grower_num").value
            const group = document.getElementById("group").value
            const lot = document.getElementById("lot").value

            if (barcode.trim()!=="") {
                const d = new Date();
                let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userid: 1,
                        temp_barcode: barcode,
                        grower_num: grower_num,
                        bale_group:group,
                        lot:lot,
                        created_at: date
                    })
                };


                fetch('http://'+props.id_address+'/king/api/create_bale_junus.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0])
                        if (data[0].response === "success") {

                            document.getElementById("barcode").value = ""
                            document.getElementById("group").value = ""
                            document.getElementById("lot").value = ""
                            document.getElementById("junused").innerText = data[0].junused_bales


                        } else {
                            document.getElementById("response").innerText = data[0].response
                        }
                    });
            }else {
                document.getElementById("response").innerText = " Capture Barcode"
            }

    }



  return (
    <div>
        <div>
            <a href="/home">
            <i className='bi bi-house-door'></i>
                </a>
                
                <h3>Bale Receiving</h3>
            
        </div>
        

        <br />

        <div className='col-auto card_10 col-sm-4'>
            <div className='form'>
                <div>
                    <p id="response">echo #bales received/ echo is balanced</p>
                </div>
                <div action="">
                    <label htmlFor="">Barcode</label>
                    <input type="text" className='form-control' id="barcode"/>
                    <label htmlFor="">Grower</label>
                    <input type="text" className='form-control' id="grower_num"/>
                    <label htmlFor="">Group</label>
                    <input type="text" className='form-control' id="group"/>
                    <label htmlFor="">Lot</label>
                    <input type="text" className='form-control' id="lot"/>
                    <br />
                    <button type='button' className='btn btn-success' onClick={saveBaleData}>Receive <Badge id="junused" bg="secondary"></Badge></button>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <button className='btn btn-primary'>Complete Grower</button>
                    </div>
                    {/*<div className="col">*/}
                    {/*    <output className='btn-success'>1/10</output>*/}
                    {/*</div>*/}


                </div>
                <br/>
                <div className="col-6 col-sm-6 offset-sm-3">
                    {/*    Success Response*/}
                    <p className="card_2"><b>Successful !!!</b></p>
                </div>

            </div>

        </div>

        <br />

        {/* <div className='col-auto card_10 col-sm-4'>
            <div className=''>
              <p>V125160</p>




            </div>

        </div> */}

        {/* modals */}

        



    </div>
  )
}
