import { useForm } from "react-hook-form";
import { useState } from "react";
import google from "../images/google.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert("🎉 Your account has been created successfully!");
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <>
      <div className="w-fit my-4 mx-5 text-[24px] text-[#b0c4b1] font-black overflow-hidden sm:mx-20 md:mx-40 lg:mx-68 lg:w-[480px] xl:mx-100 2xl:mx-130">
        <h1>For Sign up first create Stripe account thanks</h1>
      </div>
      <div className="mx-6 rounded-2xl shadow-lg my-4 max-h-[80rem] overflow-hidden bg-gray-100 sm:mx-20 md:mx-50 lg:mx-70 xl:mx-90 2xl:mx-110">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-2 py-2 text-[20px] text-[#414552] font-bold">
            <h1>Create your Stripe account</h1>
          </div>
          <div className="flex justify-center items-center">
            <div
              onClick={() => {
                window.location.href = "https://accounts.google.com";
              }}
              className="flex justify-center items-center mx-6 my-2 h-[45px] w-[250px] text-[#414551] font-semibold border border-[#414551] rounded-xl hover:border-2 active:border-blue-300 hover:cursor-pointer"
            >
              <img src={google} className="h-[20px]" />
              <h1>sign up with google</h1>
            </div>
          </div>
          <div className="flex items-center my-6 mx-2">
            <div className="flex-grow border-t border-[#414552]"></div>
            <span className="mx-2 text-[12px] font-semibold text-[#414552]">
              OR
            </span>
            <div className="flex-grow border-t border-[#414552]"></div>
          </div>
          <div className="mx-6">
            <h1 className="text-[14px] text-[#353a44] font-bold">Email</h1>
            <input
              {...register("email", {
                required: "email is required",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 50, message: "Maximum length is 50" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              className="my-2 h-[36px] w-[70vw] rounded font-semibold px-2 border border-[#414551] hover:border-2 focus:border-blue-300 outline-none sm:w-[60vw] md:w-[40vw]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="mx-6">
            <h1 className="text-[14px] text-[#353a44] font-bold">Full Name</h1>
            <input
              {...register("fullName", {
                required: "Please enter your name",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 50, message: "Maximum length is 50" },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should only contain letters and spaces",
                },
              })}
              type="text"
              className="my-2 h-[36px] w-[70vw] rounded font-semibold px-2 border border-[#414551] hover:border-2 focus:border-blue-300 outline-none sm:w-[60vw] md:w-[40vw]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          <div className="mx-6">
            <h1 className="text-[14px] text-[#353a44] font-bold">Password</h1>

            <div className="relative w-[70vw] sm:w-[60vw] md:w-[40vw]">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be less than 20 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                    message:
                      "Password must include uppercase, lowercase, number & special character",
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="my-2 h-[36px] w-full rounded font-semibold px-2 pr-10 border border-[#414551] hover:border-2 focus:border-blue-300 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} className="hover:cursor-pointer" />
                ) : (
                  <AiOutlineEye size={20} className="hover:cursor-pointer" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="mx-6 my-4">
            <h1 className="text-[14px] text-[#353a44] font-bold">
              Select Country
            </h1>
            <select
              {...register("country", {
                required: "Please select your country",
              })}
              className="my-2 h-[40px] w-[70vw] rounded px-2 border border-[#414551] hover:border-2 focus:border-blue-300 outline-none sm:w-[60vw] md:w-[40vw] hover:cursor-pointer"
            >
              <option value="">Choose a country...</option>
              <option value="IN">🇮🇳 India</option>
              <option value="US">🇺🇸 United States</option>
              <option value="GB">🇬🇧 United Kingdom</option>
              <option value="CA">🇨🇦 Canada</option>
              <option value="AU">🇦🇺 Australia</option>
              <option value="JP">🇯🇵 Japan</option>
              <option value="FR">🇫🇷 France</option>
              <option value="DE">🇩🇪 Germany</option>
              <option value="BR">🇧🇷 Brazil</option>
              <option value="IT">🇮🇹 Italy</option>
              <option value="ES">🇪🇸 Spain</option>
              <option value="RU">🇷🇺 Russia</option>
              <option value="CN">🇨🇳 China</option>
              <option value="ZA">🇿🇦 South Africa</option>
              <option value="KR">🇰🇷 South Korea</option>
              <option value="MX">🇲🇽 Mexico</option>
              <option value="AE">🇦🇪 UAE</option>
              <option value="SA">🇸🇦 Saudi Arabia</option>
              <option value="AR">🇦🇷 Argentina</option>
              <option value="NG">🇳🇬 Nigeria</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl transition-all duration-200 hover:cursor-pointer ${
                isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
