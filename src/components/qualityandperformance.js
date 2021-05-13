import React, { Component } from "react";
// import Counter from "../components/Counter";
import Grid from '@material-ui/core/Grid';
import Check from '@material-ui/icons/Check';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import Container from '@material-ui/core/Container';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
export default class Qualityandperformance extends Component {
    render() {
        return (
        <div style={{overflow:"hidden",backgroundColor:"#a3c6cc"}}>
          <div className="py-3 pl-2">
            <span style={{color:'#13415b',fontWeight:600,fontSize:50}}>
              Quality & Performance
            </span>
          </div>
          <Grid container direction="row" className="py-5" style={{backgroundColor:"#e7ecef"}}>
              <Grid item xs={12} md={4}>
                  <div style={{display:"flex"}}>
                    <div className="px-3">
                      {<AssignmentSharpIcon style={{fontSize:50}} />}
                    </div>
                    <div className="px-3">
                      <h5 className="pb-2" style={{color:'#13415b'}}>Break fluid exchange</h5>
                      <p>We provide top-notch service for import and domestic car repairs.Brakes Prepair, Tune Ups, Engine Repair, Electrical and A.C</p>
                    </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={4}>
                  <div style={{display:"flex"}}>
                    <div className="px-3">
                      {<AssessmentSharpIcon style={{fontSize:50}} />}
                    </div>
                    <div className="px-3">
                      <h5 style={{color:'#13415b'}}>Break fluid exchange</h5>
                      <p>We provide top-notch service for import and domestic car repairs.Brakes Prepair, Tune Ups, Engine Repair, Electrical and A.C</p>
                    </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={4}>
                  <div style={{display:"flex"}}>
                    <div className="px-3">
                      {<AssignmentSharpIcon style={{fontSize:50}} />}
                    </div>
                    <div className="px-3">
                      <h5 style={{color:'#13415b'}}>Break fluid exchange</h5>
                      <p>We provide top-notch service for import and domestic car repairs.Brakes Prepair, Tune Ups, Engine Repair, Electrical and A.C</p>
                    </div>
                  </div>
              </Grid>
              
          </Grid>
          <Grid style={{backgroundColor:"#a3c6cc"}} className="p-5">
            <Grid className="p-3" container style={{backgroundColor:"#d0e2e6"}}>
              <Grid item xs={12} md={4}>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#be6e27"}}>ORDERS</h6>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#375a70"}}>5k+</h6>
              </Grid>
              <Grid item xs={12} md={4}>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#be6e27"}}>PRODUCTS</h6>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#375a70"}}>100k+</h6>
              </Grid>
              <Grid item xs={12} md={4}>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#be6e27"}}>PARTNERS</h6>
                  <h6 style={{fontWeight:"400",fontSize:"50px",textAlign:"center",color:"#375a70"}}>1k+</h6>
              </Grid>
            </Grid>
          </Grid>
        </div>
        );
    }
};

