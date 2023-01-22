import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { ContextCarro, useContext } from '../contexts/ContextCarro';





export default function Navbar() {
    const setActiveClass = ({ isActive }) => ( isActive ? "active" : "opcion_no_active");
    const { state } = useContext(ContextCarro);
    
    const cartItemCount = state.cart.reduce(
        (acc, data) => (acc += data.count),
        0
      );

    return (
        
        <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            {"  -  "}

            <NavLink className={ setActiveClass } to="/id">
                
            </NavLink>

            <NavLink className="btn" activeClassName="active" to="/carrito">
                Carrito ({cartItemCount > 0 ? cartItemCount : 0})
            </NavLink>

        </Nav>
    );
}

