import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Phone from '@material-ui/icons/Phone';
import Check from '@material-ui/icons/Check';
import Map from '@material-ui/icons/Map';
import DepartureBoard from '@material-ui/icons/DepartureBoard';



export default class Contact extends Component {
    render() {
        return (
          <div className="mb-5">
          <div style={{backgroundColor:'#f0f0f0'}}>
              <div className="p-3">
                 <span style={{fontSize:'1.8em',fontWeight:'500'}}>CONTACT US</span>
              </div>
           </div>
            <div style={{width:"80%",margin:'auto'}} className="mt-3">
                <div id="map-container-google-3" class="z-depth-1-half map-container-3 mb-5">
                   <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    allowfullscreen style={{width:"100%",height:"50vh"}}>
                   </iframe>
                </div>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                     <p style={{fontSize:20}}>CALL US NOW AT</p>
                  </Grid>
                  <Grid item>
                     <p style={{fontSize:20}}>SKYYRIDER EV OFFICE</p>
                  </Grid>
                  <Grid item>
                     <p style={{fontSize:20}}>24/7 ASSISTANCE</p>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between" style={{border:'2px solid grey',padding:20}}>
                  <Grid item style={{display:"flex"}}>
                      <div style={{marginRight:6}}>
                         {<Phone style={{fontSize:50, color:'#0099ff',border:'2px solid #0099ff',borderRadius:'50%'}} />}
                      </div>
                      <div>
                        <span>
                          Mobile:(520)5772710<br/>Assistance:(520)5772710<br/>WeekCavs:(520)577
                        </span>
                      </div>  
                  </Grid>
                  <Grid item style={{display:"flex"}}>
                      <div style={{marginRight:6}}>
                         {<Map style={{fontSize:50, color:'#0099ff'}} />}
                      </div>
                      <div>
                          Nayapali,<br/>Bhubaneswar,<br/>Odisha
                      </div>  
                  </Grid>
                  <Grid item style={{display:"flex"}}>
                      <div style={{marginRight:6}}>
                         {<DepartureBoard style={{fontSize:50, color:'#0099ff'}} />}
                      </div>
                      <div>
                          Services consiquet<br/>luctus at justo auctor
                      </div>  
                  </Grid>
                </Grid>
                <form class="mt-5">
                    <div class="container">
                      <div class="row">
                         <div class="col-6 col-sm-4">
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="YOUR NAME"/>
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="YOUR EMAIL"/>
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="YOUR PHONE NO"/>
                              </div>
                              <div>
                                 <button class="btn btn-primary">SUBMIT</button>
                              </div>
                         </div>
                        <div class="col-6 col-sm-8">
                            <div class="form-group">
                                <textarea class="form-control" rows="5" placeholder="MESSAGE..."></textarea>
                            </div>
                        </div>
                      </div>
                    </div>
                </form>
          </div>

      </div>
        );
    }
};

