import Form from './Form';

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
               <Form/>
            
            </article>

        </div>


    )
}

export default FormSuscribe;
