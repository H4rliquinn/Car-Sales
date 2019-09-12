import React from "react";
import { buyItemAC } from "../actions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  const buyItem = item => {
    // console.log("buy", item, props);
    return props.buyItemAC(item);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { buyItemAC }
)(AdditionalFeature);
