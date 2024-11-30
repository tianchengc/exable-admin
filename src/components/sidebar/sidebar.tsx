// import '../App.css';
import bookmark from './asset/bookmark.png';
import calendar from './asset/calendar.png';
import user from './asset/user.png';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <div className="user-avatar"></div>
        <p>Hello, User!</p>
        <p>Monday, Sept 27th 2022</p>
      </div>
      <nav className="menu">
        <a href="#">
          <img src={calendar} alt="Schedule Icon" className="menu-icon" />
          Schedule
        </a>
        <a href="#">
          <img src={user} alt="Participants Icon" className="menu-icon" />
          Participants
        </a>
        <a href="#">
          <img src={bookmark} alt="Resources Icon" className="menu-icon" />
          Resources
        </a>
        <a href="#">
          <img src={bookmark} alt="Reports Icon" className="menu-icon" />
          Reports
        </a>
        <a href="#">
          <img src={bookmark} alt="Exercise Icon" className="menu-icon" />
          Exercise library
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
