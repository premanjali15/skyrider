import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import img from './images/blog/blog.png';
import img1 from './images/blog/blog1.png';
import img2 from './images/blog/blog2.png';

export default class Blog extends Component {

    render() {
      const {blog} = this.props
     return (
        <div>
           <div style={{backgroundColor:'#f0f0f0'}}>
              <div className="p-3">
                 <span style={{fontSize:'1.8em',fontWeight:'500'}}>NEWS AND BLOGS</span>
              </div>
           </div>
           <Container maxWidth="lg">
              <Grid container direction="row" justify="space-between" className="my-5">
                    <Grid item xs={12} lg={8}>
                              <img src={img} width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                       <h3 className="px-4 mb-3"><span style={{textDecoration:"underline #0099ff"}}>LATEST </span>POSTS</h3>
                         <Grid container direction="row">
                            <Grid item className="px-4 mb-4">
                              <Grid container direction="row" >
                                 <Grid item xs={6} lg={6}>
                                    <span>Article<br/>Name<br/>1 Sept,2020</span>
                                 </Grid>
                                 <Grid  item xs={6} lg={6}>
                                      <img src={img1} width="75%"/>
                                 </Grid>
                               </Grid>
                          </Grid>

                            <Grid container direction="row">
                              <Grid item className="px-4" >
                                <Grid container direction="row" >
                                   <Grid item xs={6} lg={6}>
                                      <span>Article<br/>Name<br/>1 Sept,2020</span>
                                   </Grid>
                                   <Grid  item xs={6} lg={6}>
                                        <img src={img2} width="75%"/>
                                 </Grid>
                                 </Grid>
                              </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                   
              </Grid>

              <Grid container direction="row">
                  <Grid item lg={6}  style={{border:'2px solid grey'}}>
                        <h3 className="p-3"><u style={{color:'#0099ff'}}>ARTICLE NAME</u></h3>
                        <p className="pl-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </p>
                        <div className="p-3">
                         <button className="btn btn-primary px-5" style={{borderRadius:"0px"}}>Read More</button>
                        </div>
                  </Grid>
              </Grid>

              <div className="pt-5">
                <ul className="pagination">
                  <li className="page-item active"><a className="page-link mr-2" href="#">1</a></li>
                  <li className="page-item"><a className="page-link mr-2" href="#">2</a></li>
                  <li className="page-item"><a className="page-link mr-2" href="#">3</a></li>
                </ul>
              </div>
          </Container>
        </div>
        );
    }
};

