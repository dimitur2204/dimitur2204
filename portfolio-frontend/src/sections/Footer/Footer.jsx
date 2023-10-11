import React from "react";
import { GitHub, Linkedin } from "react-feather";

function Footer() {
  return (
    <div className="container m-auto block max-w-5xl items-center justify-between px-2 py-5 md:flex">
      <div className="col-span-1 grid">
        <a href="/" className="mb-3">
          <span className="font-serif text-3xl">D.Hiz</span>
        </a>
        <a href="mailto:dimitur2204@gmail.com" className="mb-3">
          dimitur2204@gmail
        </a>
        <div className="flex">
          <a href="https://github.com/dimitur2204" className="mr-3">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/dimitar-nizamov-9180121a2/">
            <Linkedin />
          </a>
        </div>
      </div>
      <p className="self-end">@ 2022 Dimitar Nizamov - All rights reserved</p>
    </div>
  );
}

export default Footer;
