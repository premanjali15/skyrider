import React, { Component } from "react";
import {
  BrowserRouter as Router,Switch ,
  Route
} from "react-router-dom";

import HomeCont from "../../containers/homeCont";
// import Controller from "../../containers/router/controller_cont";
import WelcomeCont from "../../containers/welcomeCont";
import AboutCont from "../../containers/aboutCont";
import BlogCont from "../../containers/blogCont";
import ProductsCont from "../../containers/ProductsCont";
import ContactCont from "../../containers/contactCont";
import FooterCont from "../../containers/footerCont";
// import Login from "../../containers/loginCon";
// import Admin from "../../containers/pages/adminCont";
// import Event from "../../containers/eventCont";
// import Services from "../../containers/serviceCont";
import { withStyles } from "@material-ui/core/styles";
import NewsContainers from '../../containers/news/newsContainers'
import AddNewsContainer from '../../containers/news/addNewsContainer'
import ProductContainer from "../../containers/product/productContainer";
import AddProductContainer from "../../containers/product/addProductContainer";
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  }
})

class Routes extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeCont}/>
            <Route exact path="/home" component={HomeCont}/>
            <Route exact path="/welcome" component={WelcomeCont} />
            <Route exact path="/about" component={AboutCont} />
            <Route exact path="/blog" component={BlogCont} />
            <Route exact path="/products" component={ProductsCont} />
            <Route exact path="/contact" component={ContactCont} />
            <Route exact path="/footer" component={FooterCont} />
            <Route exact path="/news" component={NewsContainers} />
            <Route exact path="/addNews" component={AddNewsContainer} />
            <Route exact path="/product" component={ProductContainer} />
            <Route exact path="/addProduct" component={AddProductContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default withStyles(styles)(Routes);
