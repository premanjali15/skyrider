import React, { Component } from "react";
// import Counter from "../components/Counter";
import Grid from '@material-ui/core/Grid';
import img1 from './images/services/img1.jpeg';
import img2 from './images/services/img2.jpeg';
import img3 from './images/services/img3.jpeg';
import Check from '@material-ui/icons/Check';
import Container from '@material-ui/core/Container';
export default class Ourservices extends Component {
    render() {
        return (
        <div style={{overflow:"hidden",backgroundColor:"#1a1a1a"}}>
          <div>
            <span style={{backgroundColor:'#c01616',color:'#fff',fontWeight:600,fontSize:40}} className="pl-2 pr-5">
              OUR SERVICES
            </span>
          </div>
          <h2 className="p-3 text-center" style={{color:"#6198c1"}}>Great car service</h2>
           <Grid  className="py-3" style={{display:"flex",width:"90%",margin:"auto"}}>
              <Grid item>
                 <img src={img3} width="85%" height="90%"/>
              </Grid>
              <Grid item>
                 <img src={img1} width="85%" height="90%"/> 
              </Grid>
              <Grid item >
                 <img src={img2} width="85%" height="90%"/>
              </Grid>

           </Grid>
        </div>
        );
    }
};

