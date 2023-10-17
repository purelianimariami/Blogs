import { Link } from 'react-router-dom';


export function Navbar () {
  
  return(
    <nav className="navbar">
      <h2>Mariamy's blog</h2>
     <div className="links"> 
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
    </div>
  </nav>

)
}
