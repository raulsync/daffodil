function NavBar() {
  return (
    <div className="nav-bar sticky top-0 z-50 w-full py-3 flex items-center h-16 bg-white px-8 shadow-md justify-between">
      <div className="logo flex items-center">
        <img
          src="logo.png"
          alt="Daffodil Logo"
          className="h-12"
        />
      </div>
      <nav className="flex space-x-8">
        <ul className="flex items-center space-x-6 text-black">
          <li>Services</li>
          <li>Industries</li>
          <li>Our Expertise</li>
          <li>Client Success</li>
          <li>Discover Daffodil</li>
        </ul>
        <button className="bg-yellow-600 font-semibold text-white py-2 px-4 rounded-full shadow hover:bg-yellow-600">
          Get in Touch
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
