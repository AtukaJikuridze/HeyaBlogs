import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "./Navbar/Navbar";
import { PopularTags } from "../../API/PopularTags";
export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-content">
        <h1>Our Newsroom</h1>
        <div className="header-input-main">
          <div className="input-search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search article" />
          </div>
          <button>Search</button>
        </div>
        <div className="tags-main">
          <h3>Popular Tags:</h3>
          {PopularTags.map((e) => (
            <div className="tag">
              <h3>{e}</h3>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
