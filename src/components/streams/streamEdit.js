import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
  return <div></div>;
};

// props is available for only Stream edit component. In order to use the values, ownProps property is used.
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps)(StreamEdit);
