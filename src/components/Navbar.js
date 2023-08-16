import React, { useState, useEffect } from 'react';



const Navbar = () => {
  const [navbarDark, setNavbarDark] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setNavbarDark(true);
    } else {
      setNavbarDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="home"
      className={`navbar navbar-expand-lg text-white fixed-top ${
        navbarDark ? 'navbarScroll' : ''
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#"> Tomiwa Odutemowo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
                </li>

            <li className="nav-item">
              <a className="nav-link" href="#services"> Services
                  </a>
           
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio"> Portfolio   </a>
                 </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#contact"> Contact </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
