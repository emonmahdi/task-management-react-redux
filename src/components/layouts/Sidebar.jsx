import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-purple-500 h-screen">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <div>
        <Link to="/chat">Chat</Link>
      </div>
      <div>
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
};

export default Sidebar;
