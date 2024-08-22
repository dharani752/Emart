
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className="navbar-section">
      <div className="title">
        <h1>E-mart</h1>
      </div>
      <div className="search">
        <input type='text' placeholder="search here"/>
      </div>
      
      <div className="user">
        <div className="userdetails">
          sign/signup
        </div>
        <div className="card">
          <h1>Card</h1>
        </div>

      </div>
    </div>

    <div className="sub-menu">
      <ul>
        <li> <Link to="/ac">Ac</Link></li>
        <li><Link to="/book">Books</Link></li>
        <li><Link to="/computer">Computer</Link></li>
        <li><Link to="/fridge">Fridge</Link></li>
        <li><Link to="/kitchen">Kitchen</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/mobile">Mobile</Link></li>
        <li><Link to="/watch">Watch</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>
    </div>

    </>
  )
}

export default Navbar