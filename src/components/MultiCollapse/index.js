import React, { useState } from "react";
import PropTypes from "prop-types";
import MyCollapse from "../Collapse";

function MultiCollapse(props) {
  const { collapseList } = props;
  const [activeTab, setActiveTab] = useState(1000);

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
};

MultiCollapse.defaultProps = {
  collapseList: [],
};

export default MultiCollapse;
