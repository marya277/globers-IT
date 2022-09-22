
import logo from '../assets/puffi.png';
import puff from '../assets/puff.png';
import rain from '../assets/rain.png';
import cart from '../assets/cart.png';
import nap from '../assets/nap.png';
const Header = () => {
  return (
    <div className=" container-fluid background">
      <div className="row">
        <div className="col-2">
          <nav classNameName="navbar navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="100" height="100" />
              </a>
            </div>

          </nav>
        </div>
        <div className="col-7 d-inline-flex justify-content-around">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item mx-2">
                    <img src={puff} alt="" width="80" height="80" />
                    <a class="nav-link active" aria-current="page" href="#">PUFI PUF</a>
                  </li>
                  <li class="nav-item mx-2">
                    <img src={rain} alt="" width="80" height="80" />
                    <a class="nav-link" href="#">PUFI RAIN</a>
                  </li>
                  <li class="nav-item mx-2">
                    <img src={cart} alt="" width="80" height="80" />
                    <a class="nav-link" href="#">PUFI CART</a>
                  </li>
                  <li class="nav-item mx-2">
                    <img src={nap} alt="" width="80" height="80" />
                    <a class="nav-link" href="#">PUFI NAP</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-3 d-inline-flex justify-content-around">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MI CUENTA
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MI COMPRA
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>


      <main className='d-flex justify-content-center mt-5'>
        <p className='fs-2 fw-bolder'>ESTÁR CÓMODO,<br />NUNCA FUE TAN FÁCIL.</p>
      </main>
      <div className="d-flex justify-content-center mt-5">
        <button type='buton' className="">SHOP</button>
      </div>
    </div>
  )
}

export default Header;