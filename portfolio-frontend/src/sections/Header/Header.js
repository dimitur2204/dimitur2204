import React from "react";
import AvatarImage from "../../components/AvatarImage/AvatarImage";

export default function Header() {
  return (
    <header className="flex items-center">
      <div className="flex-1">
        <h1 className="font-bold text-5xl text-black mb-5">
          <span className="block mb-2">Hello stranger!</span>
          <span className="block">
            This is <span className="text-violet-500">Dimitar</span>
          </span>
        </h1>
        <div className="flex justify-between">
          <div className="mr-5">
            <p>Student Developer</p>
            <a className="text-blue-500" href="https://www.uniwise.co.uk/">
              @UNIWise
            </a>
          </div>
          <span className="block font-bold text-xl mr-5">&</span>
          <div className="mr-2">Passionate to work with the greatest</div>
        </div>
      </div>
      <AvatarImage />
    </header>
  );
}
