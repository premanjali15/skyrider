import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Phone from '@material-ui/icons/Phone';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import Email from '@material-ui/icons/Email';
import Close from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import logo from './images/logo.png';
export default class Header2 extends Component {

clickClose = () => {
   var closeMenu=document.getElementById('closeMenu');
   var menuListt=document.getElementById('menuListt');
   var menuList=document.getElementById('menuList');
   document.getElementById('menuListt').display='block';
   closeMenu.style.display="block";
   closeMenu.style.flexDirection="column";
   closeMenu.style.alignItems="start";
   closeMenu.style.padding="60px";
   menuList.style.color="#fff";
   menuList.style.display="none";
   menuListt.style.display="block";
}
clickMenu = () => {
 var closeMenu=document.getElementById('closeMenu');
 var menuList=document.getElementById('menuList');
 var menuListt=document.getElementById('menuListt');
 closeMenu.style.display="none";
 menuListt.style.display="none";
 menuList.display="block";

}
render(){
  return (
    <div>
        <Grid container direction="row" alignItems="center" style={{paddingTop:10,backgroundColor:'#f0f0f0'}}>
            <Grid item xs={12} md={6} lg={2} style={{display:"flex",justifyContent:"center"}}>
                <div style={{justifyContent:"center"}}>
                  <img src={logo} style={{width:100}}/>
                </div>  
            </Grid>
            <Grid item xs={12} md={6} lg={3} style={{display:"flex",justifyContent:"center"}}>
                <div>
                   {<QueryBuilder style={{fontSize:50, color:'red'}} />}
                </div>
                <div style={{borderRight:"2px solid grey"}}>
                    <span style={{fontSize:30,marginRight:9,color:'#0099ff'}}>12:00 22:00</span>
                </div>  
            </Grid>
            <Grid item xs={12} md={6} lg={4} style={{display:"flex",justifyContent:"center"}}>
                <div>
                   {<Email style={{fontSize:50, color:'red'}} />}
                </div>
                <div style={{borderRight:"2px solid grey"}}>
                    <span style={{fontSize:30,marginRight:9,color:'#0099ff'}}>e-vehicle@skyyrider.com</span>
                </div>  
            </Grid>
            <Grid item xs={12} md={6} lg={3} style={{display:"flex",justifyContent:"center"}}>
                <div>
                   {<Phone style={{fontSize:50, color:'red'}} />}
                </div>
                <div>
                    <span style={{fontSize:30,marginRight:9,color:'#0099ff'}}><span>+91 9999999999</span></span>
                </div>  
            </Grid>
        </Grid>
        <div style={{position:'relative'}}>
        <Grid container id="closeMenu" style={{backgroundColor:'#0099ff',minHeight:60,flexWrap:'wrap'}}>
            <Grid item>
              <a href="/home" style={{color:"#fff",fontSize:20,textDecoration:"none"}}>HOME</a>
            </Grid>
            <Grid item>
              <a href="/about" style={{color:"#fff",fontSize:20,textDecoration:"none"}}>ABOUT US</a>
            </Grid>
            <Grid item>
              <a href="/products" style={{color:"#fff",fontSize:20,textDecoration:"none"}}>PRODUCTS</a>
            </Grid>
            <Grid item>
             <a href="/blog" style={{color:"#fff",fontSize:20,textDecoration:"none"}}>NEWS & EVENTS</a>
            </Grid>
            <Grid item>
              <a href="/contact" style={{color:"#fff",fontSize:20,textDecoration:"none"}}>CONTACT US</a>
            </Grid>
        </Grid>

            <span onClick={this.clickMenu} id="menuListt">{<Close style={{fontSize:50}} />}</span>

         <span onClick={this.clickClose} id="menuList">{<Menu style={{fontSize:50}} />}</span>
         
        </div>
    </div>
  );
}}
