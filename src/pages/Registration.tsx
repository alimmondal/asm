import { useState } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    if (password !== confirm_password) {
      setPassMatch(false);
    }
    // console.log(email, password, confirm_password);
    if (password === confirm_password) {
      auth?.createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data.user.email,
            name: name,
          };
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          }).then((res) => res.json());
          // .then((data) => console.log(data));
        }
      });
      if (auth?.user) {
        navigate(from);
      }
    }
  };

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Register"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
