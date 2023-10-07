import { Link } from "react-router-dom";
function NavBar()
{
    return(
        <div className="navbar">
           <ul>
            <li><Link to='/' className='navlink' >Home</Link></li>
            <li><Link to='/about' className='navlink'>About</Link></li>
           </ul>
        </div>
    )
}
export default NavBar;