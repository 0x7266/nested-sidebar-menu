"use client";
import Link from "next/link";
import { Item } from "./sidebar";
import { useState } from "react";
import SubmenuItem from "./sub-menu";

export default function MenuItem({ item }: { item: Item }) {
  const [submenu, setSubmenu] = useState(false);
  return (
    <li className="text-2xl flex flex-col gap-3 items-end justify-center">
      {item.submenu && (
        <>
          <a
            onClick={() => setSubmenu(!submenu)}
            href={item.link}
            className="bg-primary w-full flex justify-between items-center px-3 py-2 text-white rounded-lg shadow"
          >
            {item.name}
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 transition-all ${submenu ? "rotate-180" : "rotate-0"}`}
            >
              <rect
                width="512"
                height="512"
                x="0"
                y="0"
                rx="30"
                fill="transparent"
                stroke="transparent"
                stroke-width="0"
                stroke-opacity="100%"
                paint-order="stroke"
              ></rect>
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 20 20"
                fill="currentColor"
                x="128"
                y="128"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path fill="currentColor" d="m5 6l5 5l5-5l2 1l-7 7l-7-7z" />
                </g>
              </svg>
            </svg>
          </a>
          <div
            className={`${submenu ? "block" : "hidden"} w-full flex justify-end`}
          >
            <SubmenuItem itens={item.submenu} />
          </div>
        </>
      )}
      {!item.submenu && (
        <Link
          href={item.link}
          className="bg-primary w-full flex justify-between items-center px-3 py-2 text-white rounded-lg shadow"
        >
          {item.name}
        </Link>
      )}
    </li>
  );
}
