import React from "react";

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

// Make sure you include PropTypes on your props.

export default Tab;
