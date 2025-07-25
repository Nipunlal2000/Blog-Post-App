import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-amber-800">
        <ul className="flex gap-7 p-3 ml-15 font-bold text-2xl">
          <li>
            <Link className="text-white" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white" to="/api">Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

