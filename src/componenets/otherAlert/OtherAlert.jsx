import React, { Component } from 'react'
import Ban from '../../assests/img/oa.jpg';

export class OtherAlert extends Component {
  render() {
    return (
      <div>

        <div class="container">

        <div>
        <img src={Ban} class="card-img-top"  />
        </div>

        <div class="form-outline mb-4">
            
            <label class="form-label" for="form4Example3"><h2>Type the Message</h2></label>
            <textarea class="form-control" id="form4Example3" rows="5"></textarea>
            
        </div>

          <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark"> <h4>Set on Home Page</h4> </button>
          </div>


        </div>

      </div>
    )
  }
}

export default OtherAlert