import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/partials/Button";
import { storeData } from "../../shared/helpers/localStorage";
import { IUser } from "../../shared/interfaces/user";

interface IRegisterProps {
  setUser: (user: IUser) => void
}

const Register = ({setUser} : IRegisterProps) => {
  const navigateLink = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IUser>({});
  const password = watch('passWord');
  const onSubmit = (data: IUser) => {
    setUser(data)
    storeData('account', data);
    navigateLink('/');
  };
  return (
    <div className="form-signup">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Sign up</h1>
        <div className="form-content">
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
        <div className="form-content">
          <input
            type="password"
            className={errors.passWord ? "error-input" : "input"}
            placeholder="password"
            {...register("passWord", { required: true, minLength: 8 })}
          />
          <label className="label">Password</label>
        </div>
        {errors.passWord && (
          <p className="text-danger">Please check the Password</p>
        )}
        <div className="form-content">
          <input
            type="password"
            className={errors.passWord ? "error-input" : "input"}
            placeholder="confirmPassword"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "The password do not match",
            })}
          />
          <label className="label">Confirm Password</label>
        </div>
        {errors.confirmPassword && (
          <p className="text-danger">Please check the Password</p>
        )}
        <Button type="primary" classButton="btn-submit" text="Sign up" />
      </form>
    </div>
  );
};

export default Register;
