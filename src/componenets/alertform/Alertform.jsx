import React, { Component } from 'react'
import Ban from '../../assests/img/formb.jpg';




export default class Alertform extends Component {
  render() {
    return (
      <div>

<div class="container">

    <div>
    <img src={Ban} class="card-img-top"  />
    </div>

    <div>
        <form>
         
          <div class="form-outline mb-4">

          <label class="form-label" for="form4Example1"></label>
            <label class="form-label" for="form4Example1">Disease ID</label>
            <input type="text" id="form4Example1" class="form-control" />
          </div>

          <div class="form-outline mb-4">
            
            <label class="form-label" for="form4Example1">Disease Name</label>
            <input type="text" id="form4Example1" class="form-control" />
            
          </div>

          
          <div class="form-outline mb-4">

            <label class="form-label" for="form4Example3">Symptoms</label>
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            
          </div>


          <div class="d-grid gap-2 d-md-block">
          <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark"><h2>Predict</h2></button>
          </div>

          <div class="form-outline mb-4">
            
            <label class="form-label" for="form4Example3">Predicted Crops</label>
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            
          </div>

          <div class="form-outline mb-4">

          <label class="form-label" for="form4Example3">Prevent Methods</label>
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            
          </div>

          <div class="form-outline mb-4">

          <label class="form-label" for="form4Example3">Other Details</label>
            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
            
          </div>

          <div>
          <label for="formFileMultiple" class="form-label">Picture Upload</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
          <label class="form-label" for="form4Example1"></label>
          </div>
          

          <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark"> <h4>Next</h4> </button>
          </div>
        </form>
    </div>

   



</div>
      </div>
    )
  }
}
