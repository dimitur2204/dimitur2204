import React from "react";
import "./AvatarImage.css";
import avatar from "./avatar-picture.png";
import PopupCircle from "./PopupCircle";

function AvatarImage() {
  return (
    <div className="h-[650px] flex-1 flex justify-end items-center">
      <div id="circle-orbit-container">
        <div id="outer-orbit" className="flex justify-center items-center">
          <img className="rounded-full w-2/3" src={avatar} alt="Avatar" />
          <PopupCircle position="top" />
          <PopupCircle position="bottom" />
          <PopupCircle position="left" />
          <PopupCircle position="right" />
        </div>
      </div>
    </div>
  );
}

export default AvatarImage;
