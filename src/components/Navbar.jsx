import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <NavLink to='/'>
        <div>
          <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt='app-logo' height={170} width={170} />
        </div>
      </NavLink>
      
      <div>
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
        
        <NavLink to='/cart'>
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  )
};

export default Navbar;
