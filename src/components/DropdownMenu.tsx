import React, { FC } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  link: string;
}

interface DropdownMenuProps {
  navLinks: NavLink[];
}

const DropdownMenu: FC<DropdownMenuProps> = ({ navLinks }) => {
  return (
    <div className="relative group">
      <button className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200">
        Pages
      </button>
      <ul className="z-10 p-4 absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md">
        {navLinks.map((navLink) => (
          <li key={navLink.link}>
            <Link
              href={navLink.link}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
