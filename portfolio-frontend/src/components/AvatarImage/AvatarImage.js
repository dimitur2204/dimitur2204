import React from "react";
import "./AvatarImage.css";
import avatar from "./dimitar-work.jpg";

function AvatarImage() {
  return (
    <div className="h-96 flex-1">
      <div id="circle-orbit-container">
        <div id="outer-orbit" className="flex justify-center items-center">
          <img className="rounded-full w-2/3" src={avatar} alt="Avatar" />
          <div class="outer-orbit-cirlces"></div>
        </div>
      </div>
    </div>
  );
}

export default AvatarImage;
