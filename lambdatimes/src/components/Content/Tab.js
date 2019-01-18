import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let tabClass = "";
  if (props.tab === props.selectedTab) {
    tabClass = "tab active-tab";
  } else {
    tabClass = "tab";
  }
  return (
    <div
      className={tabClass}
      onClick={() => props.selectedTabHandler(props.tab)}
    >
      {props.tab}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};
// Make sure you include PropTypes on your props.

export default Tab;
