import "./Header.scss";

function Header() {
  return (
    <div className="container">
      <header>
        <div className="head-first">
          <img src="/src/assets/header-img.png" alt="" />
          <h2>Product</h2>
        </div>
        <div className="head-second">
          <a href="#sec3">Product</a>
          <a href="#sec4">Customers</a>
          <a href="#sec5">Pricing</a>
          <a href="#sec1">Resources</a>
        </div>
        <div className="head-third">
          <button>Sign In</button>
          <button>Sign Up</button>
          <img className="dark-img" src="/src/assets/dark.png" alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
