import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export default function App() {
  return (
    <div>
      <div class="topnav">
        <Link to="#"><i>Educa</i><b>Onça</b></Link>
        <Link to="/">Sair</Link>
      </div>
      <Outlet />
    </div>
  );
}