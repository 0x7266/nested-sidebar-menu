import { useState } from "react";
import { Item } from "./sidebar";
import Link from "next/link";

export default function SubmenuItem({ itens }: { itens: Item[] }) {
  const [submenu, setSubmenu] = useState(false);

  return (
    <ul className="flex flex-col gap-3 items-end w-11/12">
      {itens.map((item, i) => (
        <li key={i} className="w-full flex flex-col gap-3 items-end rounded-lg">
          {item.submenu && (
            <>
              <a
                onClick={() => setSubmenu(!submenu)}
                className="w-full flex justify-between items-center bg-white bg-opacity-75 rounded-lg text-primary px-3 py-2 text-xl"
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
                    strokeWidth="0"
                    strokeOpacity="100%"
                    paintOrder="stroke"
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
                      <path
                        fill="currentColor"
                        d="m5 6l5 5l5-5l2 1l-7 7l-7-7z"
                      />
                    </g>
                  </svg>
                </svg>
              </a>
              <div
                className={`${submenu ? "block" : "hidden"} w-full flex justify-end bg-opacity-75 rounded-lg text-primary text-xl`}
              >
                <SubmenuItem itens={item.submenu} />
              </div>
            </>
          )}
          {!item.submenu && (
            <Link
              href={item.link}
              className="w-full bg-white bg-opacity-75 rounded-lg text-primary px-3 py-2 text-xl"
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
