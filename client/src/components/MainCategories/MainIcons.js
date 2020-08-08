import React from "react";
import * as AllIcons from "react-icons/all";

const MainIcons = ({ icon }) => {
  const Icon = AllIcons[icon];
  return <Icon />;
};

export default MainIcons;
