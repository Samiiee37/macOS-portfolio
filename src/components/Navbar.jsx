//imports
import dayjs from "dayjs";
//data import
import { navLinks,navIcons } from "../constants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" />
        <p className="font-bold">Samar's Portfolio</p>
        <ul>
          {navLinks.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
            {navIcons.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img} className="cursor-pointer" />
                </li>
              );
            })}
        </ul>
        <time>{dayjs().format("ddd D MMM h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
