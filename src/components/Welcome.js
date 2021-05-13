import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import welcome from './images/welcome/welcome.png';
export default class Welcome extends Component {

    render() {
     return (
        <div>
          <div>
              <span style={{backgroundColor:'#0099ff',color:'#fff',fontWeight:600,fontSize:40}} className="p-3">
                WELCOME TO SKYYRIDE EV
              </span>
          </div>

            <Grid container direction="row" style={{ paddingTop: 20,width:'90%',margin:'auto' }} className="mb-4">
              <Grid item xs={12} lg={6} style={{backgroundColor:'#d3d4d6'}}>
              <h1 style={{ fontWeight: 600, color:"#5b5b5b"}} className="ml-5">We are qualified <br/>& of experience<br/> in this field
              </h1>
                <p style={{ fontSize: 20,fontWeight:600, color:'#5a595e'}} className="px-2">At our AutoService garage, we fully appreciate how difficult it is for people to find reliable and trustworthy garages where they can service and repair their cars. We are always keen to prove to our customers that we are different!</p>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={welcome} width="100%"/>
              </Grid>
            </Grid>
           
        </div>
        );
    }
};

