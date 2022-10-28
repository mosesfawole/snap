import React from "react";

const App = () => {
  // initial state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen}>Hamburger icon</button>
      {isMenuOpen ? (
        <div className="menu-content ">
          <button onClick={handleClose}></button>
        </div>
      ) : (
        <div className="page-content"></div>
      )}
    </div>
  );
};

export default App;
