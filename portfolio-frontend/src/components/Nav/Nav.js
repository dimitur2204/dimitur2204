import React from "react";
import { Moon, Search } from "react-feather";

function Link({ href, button, children, ...props }) {
  return (
    <li className="font-medium flex items-center justify-center" {...props}>
      {button ? <button>{children}</button> : <a href={href}>{children}</a>}
    </li>
  );
}
function Nav() {
  return (
    <nav className="flex justify-between">
      <a href="/">
        <span className="font-serif text-3xl">D.Huz</span>
      </a>
      <ul className="grid gap-2 grid-cols-6">
        <Link button>БГ 🇧🇬</Link>
        <Link>Home</Link>
        <Link>Blog</Link>
        <Link>Projects</Link>
        <Link button>
          <Search />
        </Link>
        <Link button>
          <Moon />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
