import React from "react";

export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={() => handleToggleModal()}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
      </div>
    </div>
  );
}
