import React from "react";
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import slider1 from './images/carousel/slider1.png';
import slider2 from './images/carousel/slider2.png';
import slider3 from './images/carousel/slider3.png';
import './style.css'
export default function CarouselSlide() {
return (
<section>
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators justify-content-start">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 py-0 p-md-5">
            <div>
               <span class="px-4" style={{fontSize:'4em',backgroundColor:'#0099ff',color:'#fff'}}>SKKYIDER</span>
            </div>
            <div>
               <span style={{fontSize:'4em',color:'#0099ff',fontWeight:'600'}}><b>EV</b></span>
            </div>
            <div class="py-0 py-md-5">
               <button class="btn btn-outline-primary px-5 py-2" style={{borderRadius:"0px"}}><span style={{fontSize:'2em'}}><b>EXPLORE</b></span></button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src={slider1} class="w-100"/>
          </div>
        </div>
      </div>
       <div class="carousel-item active container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 py-0 p-md-5">
            <div>
               <span class="px-4" style={{fontSize:'4em',backgroundColor:'#0099ff',color:'#fff'}}>SKKYIDER</span>
            </div>
            <div>
               <span style={{fontSize:'4em',color:'#0099ff',fontWeight:'600'}}><b>EV</b></span>
            </div>
            <div class="py-0 py-md-5">
               <button class="btn btn-outline-primary px-5 py-2" style={{borderRadius:"0px"}}><span style={{fontSize:'2em'}}><b>EXPLORE</b></span></button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src={slider2} class="w-100"/>
          </div>
        </div>
      </div>
     <div class="carousel-item container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 py-0 p-md-5">
            <div>
               <span class="px-4" style={{fontSize:'4em',backgroundColor:'#0099ff',color:'#fff'}}>SKKYIDER</span>
            </div>
            <div>
               <span style={{fontSize:'4em',color:'#0099ff',fontWeight:'600'}}><b>EV</b></span>
            </div>
            <div class="py-0 py-md-5">
               <button class="btn btn-outline-primary px-5 py-2" style={{borderRadius:"0px"}}><span style={{fontSize:'2em'}}><b>EXPLORE</b></span></button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img src={slider3} class="w-100"/>
          </div>
        </div>
      </div>
  </div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
</section>
  );
}
