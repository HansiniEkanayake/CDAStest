import React, { Component } from 'react';
import Cda from '../../assests/img/cda.jpg';
import Pm from '../../assests/img/pm.jpg';
import Dm from '../../assests/img/dm.jpg';

export default class CropDis extends Component {
  render() {
    return (
        <div>
            <div class="container">
                <div class="row">

                <img src={Cda} class="d-block w-100" alt="Exotic Fruits"/>

                </div>

                <div class="row">

                            
                <div class="col">
                <a href={"/Pest"}>
                    <div class="card h-100">
                    <div class="card-body">
                        
                        <h1 class="card-title">Pest Management</h1>
                        
                    </div>

                    <img src={Pm} class="card-img-top" alt="Skyscrapers" />
                    
                    <div class="card-footer">
                        <small class="text-muted">Show More...</small>
                    </div>
                    </div>
                    </a>
                </div>


                <div class="col">
                <a href={"/Dis"}>
                <div class="card h-100">
                    <div class="card-body">
                        <h1 class="card-title">Disease Management</h1>
                        
                    </div>
                    <img src={Dm} class="card-img-top" alt="Skyscrapers"/>
                    
                    <div class="card-footer">
                        <small class="text-muted">Show More...</small>
                    </div>
                    </div>
                    </a>
                </div>



                </div>
            
            </div>
        </div>
    )
  }
}
