import React, { useState } from "react";
import PropTypes from "prop-types";
import MyCollapse from "../Collapse";

function MultiCollapse(props) {
  const { collapseList, isShowTheFirst } = props;
  const [activeTab, setActiveTab] = useState(isShowTheFirst ? 0 : 1000);

  const handleActiveTab = (tab) => {
    if (tab === activeTab) {
      setActiveTab(1000);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <>
      {collapseList.map((item, index) => (
        <MyCollapse
          key={index}
          header={item.header}
          body={item.body}
          isOpen={activeTab === index}
          setIsOpen={handleActiveTab}
          tab={index}
        />
      ))}
    </>
  );
}

MultiCollapse.propTypes = {
  collapseList: PropTypes.array,
  isShowTheFirst: PropTypes.bool,
};

MultiCollapse.defaultProps = {
  collapseList: [],
  isShowTheFirst: true,
};

export default MultiCollapse;
