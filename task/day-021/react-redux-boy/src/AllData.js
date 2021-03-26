import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVendor } from "./redux";

const AllData = ({ getVendor, vendor }) => {
  useEffect(() => {
    getVendor();
  }, []);

  console.log(vendor);
  return (
    <div>
      <h1>Data</h1>
      <ul>
        <li>{vendor[0].harga}</li>
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    vendor: state.item,
  };
};

export default connect(mapState, { getVendor })(AllData);
