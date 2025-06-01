import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    await auth?.signIn(email, password);
  };

  useEffect(() => {
    if (auth?.user) {

      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  if (auth?.loading) {
    return <div className="h-screen flex justify-center items-center"><LoadingSpinner /></div>;
  }

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Before Register/ signup, you should contact with me on mobile which
            is given on footer section otherwise your account may be disabled by
            me. So, feel freedom to contact me.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6">
              <p>
                New here?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
