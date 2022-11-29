import React, { Component } from 'react'
import Pm from '../../assests/img/dpic/cropDis/pm.webp';
import Pm2 from '../../assests/img/dpic/cropDis/pm2.jpg';
import Pm3 from '../../assests/img/dpic/cropDis/2.png';

export default class pm extends Component {
  render() {
    return (
      <div>
        <div class='Container'>

          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={Pm3} class="card-img-top" alt="Skyscrapers"/>
                
                
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src={Pm3} class="card-img-top" alt="Skyscrapers"/>
                
                
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src={Pm3} class="card-img-top" alt="Skyscrapers"/>
                
                
              </div>
            </div>
            
              </div>
            </div>


            <button type="button" class="btn btn-primary btn-lg">Button</button>
          </div>
    
    )
  }
}
