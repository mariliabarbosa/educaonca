import { NavLink, useNavigate } from "react-router-dom"

import { BarraSuperior } from "./style";
import { MdLogout } from 'react-icons/md';

import { useAuth } from '../../utils/auth';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const activeLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'azure' : 'white',
    }
  }

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <BarraSuperior>
      <NavLink class='logo' style={activeLinkStyle} to="/">
        EducaOnça
      </NavLink>
      <div>
        { auth.user && (
          <>
            <NavLink style={activeLinkStyle} to="/turmas">
              Turmas
            </NavLink>
            <NavLink style={activeLinkStyle} to="/profile">
              Perfil
            </NavLink>

            <button onClick={handleLogout}><MdLogout /></button>
          </>
        ) }
        {
          !auth.user && (<NavLink style={activeLinkStyle} to="/login">
          Login
        </NavLink>)
        }
      </div>
    </BarraSuperior>
  )
}

export default Navbar;