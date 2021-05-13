import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import img1 from './images/products/img1.png';
import img2 from './images/products/img2.png';
import './style.css';
export default class Products extends Component {
    render() {
      const {products} = this.props
        return (
        <div>
            <div style={{backgroundColor:'#f0f0f0'}}>
              <div className="p-3">
                 <span style={{fontSize:'1.8em',fontWeight:'500'}}>PRODUCT LINE</span>
              </div>
            </div>
            {/*<Grid container direction="row" justify="space-around" className="my-5">
             {products.map(item => {
                  return (
                      <Grid item xs={6} lg={4} className="mb-5">
                           <div>{item.product_name}</div>
                           <img src={item.product_image}/>
                      </Grid>
                  )
              })}
            </Grid>*/}
            <Container maxWidth="lg">
              <Grid container direction="row" justify="space-between" className="my-5">
                    <Grid item xs={12} lg={6}>
                          <img src={img1} width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <h3 className="p-3"><span style={{textDecoration:"underline #0099ff"}}>A BRIEF </span>DESCRIPTION</h3>
                      <p className="pl-3">
                          <p>Al our AutoService garage, we fully appreciate how difficult it is for people to find reliable and trustworthy garages where the can service and repair their there cars. We are always keen to prove to our customers that we are different!</p>
                      </p>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                          <img src={img2} width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <h3 className="p-3">DIMENSIONS</h3>
                      <p className="pl-3">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </p>
                    </Grid>
                
                  <Grid container direction="row" className="my-5">
                    <Grid item xs={12} lg={8}>
                       <Grid container direction="row">
                          <Grid item xs={6} lg={3}>
                              <Grid container direction="column">
                                 <Grid item className="p-3">
                                   <img src={img2} width="100%" style={{border:"8px solid Grey"}} />
                                 </Grid> 
                                 <Grid item className="p-3">
                                   <img src={img2} width="100%" style={{border:"8px solid Grey"}} />
                                 </Grid> 
                                 <Grid item className="p-3">
                                   <img src={img2} width="100%" style={{border:"8px solid Grey"}} />
                                 </Grid> 
                              </Grid>
                          </Grid>
                          <Grid item xs={6} lg={9}  style={{display:"flex",alignItems:"center"}}>
                          
                             <img src={img2} width="100%"/>
                          
                          </Grid>
                       </Grid>

                    </Grid>
                     <Grid item xs={12} lg={4}>
                      <h4 style={{color:"#d45e38"}}><u>LOOK FOR A DEALER</u></h4>
                      <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <h4>PRODUCT NAME</h4>
                      </div>
                      <p>
                        <p style={{fontFamily: 'Great Vibes',fontSize:"30px",color:"black"}}>At our AutoService garage, we fully appriciate how difficult it is for people to find reliable and trustworthy garages where they can service and repair their cars. We are always been to prove to our customers that we are different! </p>
                      </p>
                      <Grid item style={{backgroundColor:"grey"}} className="p-2">
                          <div style={{display:"flex",justifyContent:"center"}}>
                            <h3 style={{color:"#fff"}}>LOOK FOR A DEALER</h3>
                          </div>
                      </Grid>
                      <Grid item style={{backgroundColor:"#0099ff"}} className="p-2 mt-4">
                          <div style={{display:"flex",justifyContent:"center"}}>
                            <h3 style={{color:"#fff"}}>KNOW MORE<span style={{fontSize:"40px"}} className="ml-3">-></span></h3>
                          </div>
                      </Grid>
                     </Grid>
                  </Grid>



                </Grid>
          </Container>

        </div>
        );
    }
};

