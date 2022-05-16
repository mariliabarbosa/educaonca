import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export default function App() {
  return (
    <div>
      <div className="Layout-topnav">
        <Link className="Layout-title" to="/log/inicial"><i>Educa</i><b>Onça</b></Link>
        <Link className="Layout-logout"to="/">Sair</Link>
      </div>
      <Outlet />
    </div>
  );
}