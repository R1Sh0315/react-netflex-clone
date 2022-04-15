import { GoSearch } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import "../../App.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navebar-right-container">
        <span className="brand-title">NETFLIX</span>
        <div className="home">
          <b>Home</b>
        </div>
        <div className="tv-shows">TV shows</div>
        <div className="movies">Movies</div>
        <div className="new-populer">New &#38; Popular</div>
        <div className="list">My List</div>
      </div>
      <div className="navebar-left-container">
        <div className="search-icon">
          <GoSearch></GoSearch>
        </div>
        <div className="notification-icon">
          <IoMdNotifications></IoMdNotifications>
        </div>
        <div className="profile-dropdown-container"></div>
      </div>
    </div>
  );
}

export default NavBar;
