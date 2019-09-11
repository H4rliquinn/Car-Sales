import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    console.log("buy", item, props);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures buy={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
