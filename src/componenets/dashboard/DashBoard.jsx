import React, { Component } from 'react'
import Alt from '../../assests/img/alertimg.png';
import Tst2 from '../../assests/img/tst.png';
import Crops from '../../assests/hmpg/phone-features.png';
import All from '../../assests/img/vfs.jpg';
import Cd from '../../assests/img/cd.webp'






export default class dashboard extends Component {
  render() {
    return (
     <div>

      <div class="row">
        <div class="col-sm-10">
          <div class="card">
            <div class="card-body">
              <img src={Tst2} class="d-block w-100"/>
              <a href="#" class="btn btn-primary">Print</a>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
            <div class="card-body">

                    <div class="row">
                      
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Set Alert</h5>
                            <img src={Alt} class="d-block w-100"/>
                            <a href="./alertform/Alertform.jsx" class="btn btn-primary">Go</a>
                          </div>
                        </div>
                      
                      </div>

                      <div class="row">
                      
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Crop Diseases</h5>
                            <img src={Cd} class="d-block w-100"/>
                            <a href="../cropdis/CropDis.jsx" class="btn btn-primary">See More</a>
                          </div>
                        </div>
                      
                    </div>

                    <div class="row">
                      
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Crop Details</h5>
                            <img src={All} class="d-block w-100"/>
                            <a href="../categories/Categories.jsx" class="btn btn-primary">See More</a>
                          </div>
                        </div>
                      
                    </div>
              
            </div>
          </div>
        </div>
      </div>

     

      
     </div>
    )
  }
}
