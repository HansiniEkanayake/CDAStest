import React, { Component } from 'react'
import All from '../../assests/img/vfs.jpg';
import Vege from '../../assests/img/vege.jpeg';
import Fruits from '../../assests/img/fruits.jpg';
import Spi from '../../assests/img/spices.jpg';




export default class Categories extends Component {

  render() {

    return (

      <div>

        <div>

         <div class="container">

            <div class='row'>

            <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={All} class="d-block w-100" alt="Exotic Fruits"/>
            </div>
            <div class="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
            </div>
            <div class="carousel-item">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

            </div>

            <div class="row">

               
                <div class="col">
                <a href={"../vegetables/Vegetables.jsx"}>
                    <div class="card h-100">
                    <div class="card-body">
                        
                        <h1 class="card-title">Vegetables</h1>
                        
                    </div>

                    <img src={Vege} class="card-img-top" alt="Skyscrapers" />
                    
                    <div class="card-footer">
                        <small class="text-muted">Show More...</small>
                    </div>
                    </div>
                    </a>
                </div>
                

                
                <div class="col">
                <a href={"../Fruit/Fruit.jsx"}>
                <div class="card h-100">
                    <div class="card-body">
                        <h1 class="card-title">Fruits</h1>
                        
                    </div>

                    
                    <img src={Fruits} class="card-img-top" alt="Skyscrapers"/>
                    
                    <div class="card-footer">
                        <small class="text-muted">Show More...</small>
                    </div>
                    </div>
                    </a>
                </div>
                


                
                <div class="col">
                <a href={"../spi/Spi.jsx"}>
                <div class="card h-100">
                    <div class="card-body">
                        <h1 class="card-title">Spices</h1>
                        
                    </div>
                    <img src={Spi} class="card-img-top" alt="Skyscrapers"/>
                    
                    <div class="card-footer">
                        <small class="text-muted">Show More...</small>
                    </div>
                    </div>
                    </a>
                </div>
                


            </div>
            
         </div>  

         
        </div>

      </div>
    )
  }
}
