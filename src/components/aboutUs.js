import React, { Component } from "react";
// import Counter from "../components/Counter";
import Grid from '@material-ui/core/Grid';
import img from './images/about/about.png';
import img1 from './images/about/img1.png';
import img2 from './images/about/img2.png';
import Check from '@material-ui/icons/Check';
import Container from '@material-ui/core/Container';
export default class About extends Component {
    render() {
        return (
        <div style={{overflow:"hidden"}} className="mb-5">
           <div style={{backgroundColor:'#f0f0f0',overflowX:"hidden"}}>
              <div className="p-3">
                 <span style={{fontSize:'1.8em',fontWeight:'500'}}>ABOUT US</span>
              </div>
           </div>
          <Container maxWidth="lg">
              <Grid container direction="row" style={{ paddingTop: 20 }}>
                  <Grid item xs={12} lg={6}>
                    <p style={{ fontSize: 20}}>Al our AutoService garage, we fully appreciate<br/> how difficult it<br/> is for people to find reliable and trustworthy<br/> garages where the can service and repair their <br/>there cars. We are always keen to prove to our <br/>customers that we are different!</p>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <img src={img} width="100%"/>
                  </Grid>
                </Grid>
          </Container>
                <span style={{fontSize:40, marginLeft:40}}>WHY CHOOSE US</span>
                <div style={{marginLeft:40,backgroundColor:'#0099ff',width: 80,height:5}} className="uline"></div>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                      <ul style={{ listStyle: 'none'}}>
                        <li>{<Check style={{color:'red', fontSize:40}} />}We make auto repair and maintenance more convenient for you</li>
                        <li style={{marginTop:15}} >{<Check style={{color:'red', fontSize:40}} />}We are a friendly, helpful and professional group of people</li>
                        <li style={{marginTop:15}} >{<Check style={{color:'red', fontSize:40}} />}Our professionals know how to handle a wide range of car services</li>
                        <li style={{marginTop:15}} >{<Check style={{color:'red', fontSize:40}} />}Some day service for most repairs and maintenance</li>
                      </ul>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                      <div>
                        <img src={img1} width="100%"/>
                      </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                      <div>
                        <img src={img1} width="100%"/>
                      </div>
                  </Grid>
                </Grid>
        </div>
        );
    }
};

