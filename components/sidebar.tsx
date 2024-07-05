import MenuItem from "./menu-item";

const menuList: Item[] = [
  { name: "Dashboard", link: "#" },
  {
    name: "Products",
    link: "#",
    submenu: [
      { name: "Add", link: "#" },
      { name: "Update", link: "#" },
    ],
  },
  {
    name: "Inventory",
    link: "#",
    submenu: [
      {
        name: "Add",
        link: "#",
        submenu: [{ link: "#", name: "Nested submenu" }],
      },
      { name: "Update", link: "#" },
    ],
  },
  {
    name: "Invoices",
    link: "#",
    submenu: [
      { name: "Add", link: "#" },
      { name: "Update", link: "#" },
    ],
  },
];

export default function Sidebar() {
  return (
    <ul className="p-3 flex flex-col gap-3">
      {menuList.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </ul>
  );
}

export type Item = {
  name: string;
  link: string;
  submenu?: Item[];
};
