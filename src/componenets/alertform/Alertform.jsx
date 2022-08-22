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
            
            <label class="form-label" for="form4Example1">Affected Crop Name</label>
            <input type="text" id="form4Example1" class="form-control" />
            
          </div>

          
          <div class="form-outline mb-4">

            <label class="form-label" for="form4Example3">Symptoms</label>

              
          <div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

              
 
 
 
             </div>

            
            
          </div>

          <div class="form-outline mb-4">

        <div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

              
 
 
 
             </div>

            
            
          </div>

          <div class="form-outline mb-4">

        <div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Sym1</label>
                </div>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Sym2</label>
                </div>

              
 
 
 
             </div>

            
            
          </div>

          

          <div class="d-grid gap-2 d-md-block">
          <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark"><h2>Predict Disease category</h2></button>
          <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark"><h2>Predict Other Diseases</h2></button>
          <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark"><h2>Predict Prevent Methods</h2></button>
          </div>

          <textarea class="form-control" id="form4Example3" rows="4"></textarea>

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
          <button type="button" class="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark"> <h4>Set As An Alert!!!</h4> </button>
          </div>

            



        </form>
    </div>

   



</div>
      </div>
    )
  }
}
