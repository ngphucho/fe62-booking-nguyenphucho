import React, { useState } from "react";
import PropTypes from "prop-types";
import MyCollapse from "../Collapse";

function MultiCollapse(props) {
  const { collapseList, isShowTheFirst, isAdmin } = props;
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
          {...props}
        />
      ))}
    </>
  );
}

MultiCollapse.propTypes = {
  collapseList: PropTypes.array,
  isShowTheFirst: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

MultiCollapse.defaultProps = {
  collapseList: [],
  isShowTheFirst: true,
  isAdmin: false,
};

export default MultiCollapse;
