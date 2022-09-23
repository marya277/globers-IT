import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    
});

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <form className="row g-3"
        action="https://formspree.io/f/xgeqaknv"
        method="POST"
       >
            <div className=" col-md-6 mx-auto input group ">
                        <div class="input-group mb-3">
                            <input  {...register("email")}  type="email"   required class="form-control" placeholder="ingresa tu email"  name="Email" id="email"/>
                            <span className="input-group-text"> <button  onSubmit={handleSubmit(onSubmitHandler)}  type="submit" class="btn btn-link"><i class="bi bi-arrow-right"></i></button></span>
                        
                            <p>{errors.email?.message}</p>
                            <br />
                        </div>
                    </div>
        </form>
    );
};

export default Form;