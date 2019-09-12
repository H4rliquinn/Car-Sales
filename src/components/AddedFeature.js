import React from "react";
import { connect } from "react-redux";
import { removeItemAC } from "../actions";

const AddedFeature = props => {
  const removeItem = item => {
    // console.log("buy", item, props);
    return props.removeItemAC(item);
  };

  return (
    <li>
      <button className="button" onClick={() => removeItem(props.feature)}>
        X
      </button>
      {props.feature.name}
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
  { removeItemAC }
)(AddedFeature);
