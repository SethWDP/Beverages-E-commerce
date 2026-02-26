import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <section className="min-h-screen bg-[#F2FCFC]">
      <div className="container mx-auto px-4 py-10">
        <article className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-600px] bg-white p-6">
              <img
                className="w-full h-auto object-contain"
                src="https://static.vecteezy.com/system/resources/previews/003/689/228/large_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="Create account illustration"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[520px]">
              <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 text-center">
                Create Your Account
              </h1>

              <form className="mt-8 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm text-zinc-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-zinc-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-zinc-600 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a Password"
                    className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm text-zinc-600 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    className="w-full rounded-md border border-zinc-400 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-sky-500"
                  />
                </div>

                {/* Agree */}
                <label className="flex items-center gap-2 text-xs text-zinc-600">
                  <input type="checkbox" className="h-4 w-4" />I agree to the
                  Term &amp; Privacy Policy
                </label>

                {/* Buttons row */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/login" className="w-full">
                    <button
                      type="button"
                      className="w-full rounded-md bg-sky-500 py-3 text-white font-medium hover:bg-sky-600"
                    >
                      Back
                    </button>
                  </Link>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-white py-3 text-zinc-700 font-medium border border-zinc-200 shadow-sm hover:bg-zinc-50"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 text-zinc-500 pt-2">
                  <div className="h-px flex-1 bg-zinc-300" />
                  <span className="text-sm">Or</span>
                  <div className="h-px flex-1 bg-zinc-300" />
                </div>

                {/* Google sign up */}
                <button
                  type="button"
                  className="w-full rounded-md bg-white py-3 border border-zinc-200 shadow-sm hover:bg-zinc-50 flex items-center justify-center gap-3"
                >
                  <span className="text-xl">
                    <img
                      className="w-5 h-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png"
                      alt=""
                    />
                  </span>
                  <span className="text-sm font-medium text-zinc-800">
                    Sign Up with Google
                  </span>
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CreateAccount;
