import React, { Component } from 'react'
import Ban from '../../assests/img/newc.jpg';


export class NewCrop extends Component {
  render() {
    return (
      <div>

        <div class="container">

        <div>
        <img src={Ban} class="card-img-top"  />
        </div>

        <form action="">


        <div class="form-outline mb-4">

          <label class="form-label" for="form4Example1"></label>
            <label class="form-label" for="form4Example1"><h3>Enter Crop Name</h3></label>
            <input type="text" id="form4Example1" class="form-control" />
        </div>
        
        <div>

        <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
        Select Family Name
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>

        <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
            Select Temperature Range
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>

        <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
        Select PH value Range
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>


        <div class="btn-group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
        Select season
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>


        <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
        Select Zone
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        </div>
                    
        </div>

        <div class="d-grid gap-2 d-md-block">       
            <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark"><h2>Predict Other Crops</h2></button>        
        </div>

        </form>

                
        </div>


        <div>
       
        </div>

      </div>

        
    )
  }
}

export default NewCrop