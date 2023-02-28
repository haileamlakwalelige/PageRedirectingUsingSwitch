import React from 'react';
// import Home from './Home';
// import About from './About';
// import Service from './Service';

function Navbar(){
    return(
        <nav className="nav">
      <a href="/" className="site-title">Site Title</a>
      <ul>
        <CustomLink href="/Service">Service</CustomLink>  
        <CustomLink href="/About">About</CustomLink>   
        </ul>   
        </nav>
    );
}
function CustomLink({href, children, ...props}){
    const path=window.location.pathname;
return(
    <li className={path === href ? "active" : ""}>
    <a href={href} {...props}>{children}</a>
    </li>

);
}
export default Navbar;