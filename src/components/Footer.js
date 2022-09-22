import pufiFooter from '../assets/pufi_footer.png';
import qr from '../assets/qr.png';
import shield from '../assets/shield.png';
import brand from '../assets/brandlive.png';
const Footer = () => {
    return (


        <div className="container-fluid py-5" >
            <hr className="line" />
            <footer>

                <div className="row">
                    <div className="col-2">
                        <img src={pufiFooter} alt="" width="100" height="100" />
                    </div>
                    <div className="col-2 col-md">

                        <ul className="list-unstyled text-small">
                            <li>PUFI RAIN</li>
                            <li>PUFI PUFF</li>
                            <li>PUFI CART</li>
                            <li>PUFI NAP</li>

                        </ul>
                    </div>
                    <div className="col-2 col-md">

                        <ul className="list-unstyled text-small">
                            <li>CONTACTO</li>
                            <li>AYUDA</li>
                            <li>COMO COMPRAR</li>
                            <li>TERMINOS & CONDICIONES</li>
                        </ul>
                    </div>
                    <div className="col-2 col-md">
                        <h6>COMPRA 100% SEGURA</h6>
                        <div className="d-flex bd-highlight mb-3">
                            <div class="p-2 bd-highlight"><img src={qr} alt="" className=" mt-2" width="80" height="80" /></div>
                            <div class="p-2 bd-highlight"> <img src={shield} alt="" className=" mt-2" width="80" height="80" /></div>
                            <div class="p-2 bd-highlight"> <p className="text-small">COMPRÁ CON LA GARANTIA DE PUFI </p></div>
                        </div>

                    </div>
                    <div className="col-3 col-md ">

                        <div className="d-flex flex-row-reverse bd-highlight">

                            <div class="p-2 bd-highlight"> <i class="bi bi-facebook"></i></div>
                            <div class="p-2 bd-highlight"> <i class="bi bi-twitter"></i></div>
                            <div class="p-2 bd-highlight"><i class="bi bi-instagram"></i></div>
                            <p className="mt-2">SEGUINOS EN</p>
                        </div>
                    </div>
                </div>
                <hr className="line" />
                <div className="row">
                    <div className="col-6">
                        <p className="text-muted"> PUFI Copyright 2017 -Todos los derechos reservados</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src={brand} alt="" width="200" height="100" />
                    </div>
                </div>
            </footer>
        </div>


    )
}
export default Footer;