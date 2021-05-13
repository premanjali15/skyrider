import React from "react";
import Header2 from './Header2';
import CarouselSlide from "./Carousel";
import WelcomeCont from "../containers/welcomeCont";
import AboutCont from "../containers/aboutCont";
import OurservicesCont from "../containers/OurservicesCont";
import QualityandperformanceCont from "../containers/qualityandperformanceCont";
import ContactCont from "../containers/contactCont";
import BlogCont from "../containers/blogCont";
import ProductsCont from "../containers/ProductsCont";
import FooterCont from "../containers/footerCont";
export default class Home extends React.Component{
    render(){
        const { set_num1,home}= this.props;
        return(
            <div style={{overflow:"hidden"}}>
              <Header2/>
              <CarouselSlide/>
              <WelcomeCont/>
              <OurservicesCont/>
              <QualityandperformanceCont />
              <FooterCont/>            
            </div>
        )
    }
}