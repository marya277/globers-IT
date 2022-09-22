

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpg';
const Gallery = () => {
    return (
        <div className="container-fluid d-grid p-0">
            <div className="row">
                <div className="col-sm-6">
                    <div className="">
                        <img src={img1} alt="" className=" img-fluid" />
                        <div className="card-img-overlay">
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="mt-3">
                        <img src={img2} alt="" className="mx-auto d-block mt-5" width="200" height="200" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pufi RAIN</h5>
                            <p className="mt-5">Descripción del producto. Este es <br /> un texto simulado</p>
                            <div className='d-inline-flex'>
                                <i className="bi bi-chevron-right"></i>
                                <p>VER MAS</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="mt-3">
                        <img src={img3} alt="" className="mx-auto d-block mt-5" width="200" height="200" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pufi PUFF</h5>
                            <p className="mt-5">Descripción del producto. Este es <br /> un texto simulado</p>
                            <div className='d-inline-flex'>
                                <i className="bi bi-chevron-right"></i>
                                <p>VER MAS</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <img src={img4} alt="" className=" img-fluid" />
                        <div className="card-img-overlay">
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="">
                        <img src={img5} alt="" className=" img-fluid" />
                        <div className="card-img-overlay">
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="mt-3">
                        <img src={img6} alt="" className="mx-auto d-block mt-2" width="200" height="200" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pufi CART</h5>
                            <p className="mt-5">Descripción del producto. Este es <br /> un texto simulado</p>
                            <div className='d-inline-flex'>
                                <i className="bi bi-chevron-right"></i>
                                <p>VER MAS</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-6">
                    <div className="mt-3">
                        <img src={img7} alt="" className="mx-auto d-block mt-5" width="200" height="200" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Pufi NAP</h5>
                            <p className="mt-5">Descripción del producto. Este es <br /> un texto simulado</p>
                            <div className='d-inline-flex'>
                                <i className="bi bi-chevron-right"></i>
                                <p>VER MAS</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <img src={img8} alt="" className=" img-fluid" />
                        <div className="card-img-overlay">
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Gallery;
