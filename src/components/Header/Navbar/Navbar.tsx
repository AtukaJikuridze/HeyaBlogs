import "./Navbar.css";
import logo from "../../../images/Logo.png";
import { NavLinks } from "../../../API/NavLinks";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Navbar() {
  return (
    <nav>
      <div className="container navbar-flex">
        <img src={logo} alt="" />
        <ul className="main-ul">
          {NavLinks.map((e) => (
            <li className="main-li">
              {e.title} {e.dropDown ? <RiArrowDropDownLine /> : ""}
              {e.dropDown ? (
                <ul>
                  {e.dropLinks?.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
