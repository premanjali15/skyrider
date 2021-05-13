import React, { Component } from "react";
// import Counter from "../components/Counter";
import Grid from '@material-ui/core/Grid';
import Phone from '@material-ui/icons/Phone';
import Check from '@material-ui/icons/Check';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Domain from '@material-ui/icons/Domain';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
          <div style={{backgroundColor:"#2e2e2e"}}>
           <div style={{width:"80%",margin:'auto'}}>
                <Grid container direction="row" justify="space-around" style={{borderBottom:"solid 5px #6f6f6f"}} className="pt-3">
                  <Grid item alignItems="center" style={{display:"flex"}}>
                      <div>
                         {<Phone style={{fontSize:60, color:'grey'}} />}
                      </div>
                      <div>
                          <span style={{fontSize:25,color:"#fef9fd"}}>(520) 577 2710</span>
                      </div>  
                  </Grid>
                  <Grid item  alignItems="center" style={{display:"flex"}}>
                      <div>
                         {<DirectionsCar style={{fontSize:60, color:'grey'}} />}
                      </div>
                      <div>
                          <span style={{fontSize:25,color:"#fef9fd"}}>24/7 ASSISTANCE</span>
                      </div>  
                  </Grid>
                  <Grid item style={{display:"flex"}}>
                      <div>
                         {<Domain style={{fontSize:60, color:'grey'}} />}
                      </div>
                      <div>
                          <span style={{fontSize:20,color:"#fef9fd"}}>Nayapalli,<br/>Bhubaneswar,<br/>Odisha.</span>
                      </div>  
                  </Grid>
                </Grid>


                <Grid container alignItems="center" className="py-2">
                  <Grid item md={4} className="pb-3">
                    <span style={{color:'grey',fontSize:30}}><u>ABOUT US</u></span><br/>
                    <span style={{color:'#fef9fd',fontSize:18}}> Nayapalli,<br/>
                     Bhubaneswar,<br/>
                     Odisha.<br/>
                     MOBILE:(520)577 <br/>2710<br/>
                     EMAIL<br/>
                     ID:INFO@SKYYRIDEREV.COM</span>
                  </Grid>
                  <Grid item md={4}>
                      
                      <span style={{color:"grey",fontSize:30}}><u>NAVIGATIONS</u></span><br/>
                      <Link to="/"><span style={{color:'#fef9fd',fontSize:25}}>{<Check style={{color:'grey', fontSize:35}} />}<u>HOME</u></span></Link><br/>
                      <Link to="/about"><span style={{color:'#fef9fd',fontSize:25}}>{<Check style={{color:'grey', fontSize:40}} />}<u>ABOUT US</u></span></Link><br/>
                      <Link to="/products"><span style={{color:'#fef9fd',fontSize:25}}>{<Check style={{color:'grey', fontSize:40}} />}<u>PRODUCTS</u></span></Link><br/>
                      <Link to="/blog"><span style={{color:'#fef9fd',fontSize:25}}>{<Check style={{color:'grey', fontSize:40}} />}<u>BLOGS</u></span></Link><br/>
                      <Link to="/contact"><span style={{color:'#fef9fd',fontSize:25}}>{<Check style={{color:'grey', fontSize:40}} />}<u>CONTACT US</u></span></Link>
                  </Grid>
                  <Grid item md={4}>
                       <div style={{display:"flex"}} className="pt-3">
                         <div>
                           {<EmojiPeople style={{fontSize:50, color:'grey'}} />}
                         </div>
                         <a href="https://wa.me/9668107664"><div>
                           <span style={{fontSize:30,color:"#fef9fd"}}>BECOME A DEALER</span>
                         </div></a>
                       </div>
                       <div style={{display:"flex"}} className="pt-3">
                         <div>
                           {<PeopleAlt style={{fontSize:50, color:'grey'}} />}
                         </div>
                         <div>
                           <span style={{fontSize:30,color:"#fef9fd"}}>LOCATE OUR DEALERS</span>
                         </div>
                       </div>
                  </Grid>
                  <Grid container className="py-2">
                       <Grid>
                         {<FacebookIcon style={{fontSize:30, color:'#000',backgroundColor:"#fff"}} className="mr-2"/>}
                       </Grid>
                       <Grid>
                         {<WhatsAppIcon style={{fontSize:30, color:'#000',backgroundColor:"#fff"}} className="mr-2"/>}
                       </Grid>
                       <Grid>
                         {<InstagramIcon style={{fontSize:30, color:'#000',backgroundColor:"#fff"}} className="mr-2"/>}
                       </Grid>
                  </Grid>
                </Grid>
           </div>
           </div>
        );
    }
};

