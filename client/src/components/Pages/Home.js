import React from "react";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MiniMenuWrapper from "../MiniMenuWrapper/MiniMenuWrapper";
import { fetchProducts } from "../../redux/actions";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <Header />
          <Hero />
          <Market />
        </div>
        <Footer />
        <MiniMenuWrapper />
      </div>
    );
  }
}

export default connect(null, { fetchProducts })(Home);
