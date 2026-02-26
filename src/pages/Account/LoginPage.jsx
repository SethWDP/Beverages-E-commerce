import "../../App.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <section className="min-h-screen bg-[#F2FCFC] container mx-auto px-4 py-30">
      <article className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[520px] bg-white p-6">
            <img
              className="w-full h-auto object-contain"
              src="https://cdn.vectorstock.com/i/500p/81/36/young-woman-using-smartphone-in-cart-vector-60888136.jpg"
              alt="Shopping illustration"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[520px]">
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 leading-snug">
              Welcome back, Please Log In
              <br /> To Your Account
            </h1>

            <form className="mt-8 space-y-6">
              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
              />

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm text-zinc-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  Remember Me
                </label>

                <button type="button" className="hover:underline text-zinc-600">
                  Forget Password
                </button>
              </div>

              {/* Buttons row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/profile" className="w-full">
                  {" "}
                  <button
                    type="submit"
                    className="w-full rounded-md bg-sky-500 py-3 text-white font-medium hover:bg-sky-600 text-center"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/create_Account" className="w-full">
                  {" "}
                  <button
                    type="button"
                    className="w-full rounded-md bg-white py-3 text-zinc-700 font-medium border border-zinc-200 shadow-sm hover:bg-zinc-50"
                  >
                    Create Account
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 text-zinc-500">
                <div className="h-px flex-1 bg-zinc-300" />
                <span className="text-sm">Or</span>
                <div className="h-px flex-1 bg-zinc-300" />
              </div>

              {/* Google login */}
              <button
                type="button"
                className="w-full rounded-md bg-white py-3 border border-zinc-200 shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-3"
              >
                <span className="w-5 h-5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png"
                    alt=""
                  />
                </span>
                <span className="text-sm font-medium text-zinc-800">
                  Login with Google
                </span>
              </button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LoginPage;
