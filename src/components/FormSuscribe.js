import gallery2 from '../assets/gallery2.png';
const FormSuscribe = () => {
    return (
        <div ClassName="container d-inline-flex">

            <article className="text-center">
                <p className="text-muted">INSTAGRAM</p>
                <p className="fs-1">#ESPUFI</p>
                <img src={gallery2} alt="" className="mx-auto d-block mt-2" width="600" height="500" />
                <div className="container">
                    <p className="mt-3 text-muted">NEWSLETTER</p>
                    <p className="fs-1">SUSCRIBITE</p>
                    <p> Y enterate de todas las novedades</p>
                </div>
                
                <form className="row g-3"
                    action="https://formspree.io/f/xgeqaknv"
                    method="POST"
                >
                    <div className=" col-md-6 mx-auto input group ">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="ingresa tu email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text"> <button type="button" class="btn btn-link"><i class="bi bi-arrow-right"></i></button></span>
                        </div>
                    </div>
                </form>
            
            </article>

        </div>


    )
}

export default FormSuscribe;
