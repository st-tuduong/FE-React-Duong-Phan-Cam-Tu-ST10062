import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { storeData } from "../../shared/helpers/localStorage";

const Register = () => {
  const navigateLink = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const password = watch("password");
  const onSubmit = (data: any) => {
    storeData("account", data);
    navigateLink("/");
  };
  return (
    <div className="signupFrm">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Sign up</h1>
        <div className="inputContainer">
          <input
            type="text"
            className={errors.email ? "error-input" : "input"}
            placeholder="email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          <label className="label">Email</label>
        </div>
        {errors.email && (
          <p className="text-danger">Please check the Email!!</p>
        )}
        <div className="inputContainer">
          <input
            type="password"
            className={errors.password ? "error-input" : "input"}
            placeholder="password"
            {...register("password", { required: true, minLength: 8 })}
          />
          <label className="label">Password</label>
        </div>
        {errors.password && (
          <p className="text-danger">Please check the Password</p>
        )}
        <div className="inputContainer">
          <input
            type="password"
            className={errors.password ? "error-input" : "input"}
            placeholder="confirmpassword"
            {...register("confirmpassword", {
              required: true,
              validate: (value) =>
                value === password || "The password do not match",
            })}
          />
          <label className="label">Confirm Password</label>
        </div>
        {errors.confirmpassword && (
          <p className="text-danger">Please check the Password</p>
        )}
        <input type="submit" className="submitBtn" defaultValue="Sign up" />
      </form>
    </div>
  );
};

export default Register;
