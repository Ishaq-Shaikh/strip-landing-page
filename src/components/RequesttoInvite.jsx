import { useForm } from "react-hook-form";
import { useState } from "react";

function RequesttoInvite() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        "Success! We've received your information and will be in touch shortly."
      );
      console.log("Form Data:", data);

      setIsSubmitting(false);

      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white min-w-[18rem] max-w-[1150px] max-h-[70rem] mx-5 my-4 overflow-hidden sm:mx-10 md:mx-20 lg:mx-30 xl:mx-40 2xl:mx-50"
      >
        <div>
          <div className="text-[24px] text-[#0a2540] font-bold py-4 px-4">
            <h1>How can we reach you?</h1>
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Work email</h1>
            <input
              {...register("workEmail", {
                required: "Work email is required",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 50, message: "Maximum length is 50" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="jim@example.com"
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded font-semibold px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            />

            {errors.workEmail && (
              <p className="text-red-500 text-xs">{errors.workEmail.message}</p>
            )}
          </div>
          <div className="px-4">
            <h1 className="text-[#0a2540] font-semibold text-[15px]">
              Country/Region
            </h1>
            <select
              {...register("country", { required: "Please select a country" })}
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            >
              <option value="">Select a country</option>
              <option value="IN">India</option>
              <option value="AF">Afghanistan</option>
              <option value="AU">Australia</option>
              <option value="BD">Bangladesh</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="ID">Indonesia</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="KE">Kenya</option>
              <option value="MX">Mexico</option>
              <option value="NG">Nigeria</option>
              <option value="RU">Russia</option>
              <option value="SA">Saudi Arabia</option>
              <option value="ZA">South Africa</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
            </select>

            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>
          <div className="text-[13px] text-[#3f4b66] h-[36px] w-[80vw] my-2 px-4 overflow-hidden">
            <p>
              Stripe is invite-only in India. Complete this form to be notified
              when your business is eligible.
            </p>
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">First name</h1>
            <input
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 20, message: "Maximum length is 20" },
              })}
              type="text"
              placeholder="Jim"
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded font-semibold px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            />

            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Last name</h1>
            <input
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 20, message: "Maximum length is 20" },
              })}
              type="text"
              placeholder="Dan"
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded font-semibold px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            />

            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Phone number</h1>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              type="tel"
              placeholder="Enter your phone number"
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded font-semibold px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Company website</h1>
            <input
              {...register("companyWeb", {
                required: "Please enter/paste website link",
              })}
              type="text"
              placeholder="example.com"
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded font-semibold px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            />
            {errors.companyWeb && (
              <p className="text-red-500 text-xs">
                {errors.companyWeb.message}
              </p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Job level</h1>
            <select
              {...register("jobLevel", {
                required: "Please select a job level",
              })}
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            >
              <option value="">Select a job level</option>
              <option value="CL">C-Level</option>
              <option value="VSE">VP/SVP/EVP</option>
              <option value="DT">Director</option>
              <option value="MG">Manager</option>
              <option value="N-MG">Non-Manager</option>
            </select>

            {errors.jobLevel && (
              <p className="text-red-500 text-xs">{errors.jobLevel.message}</p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">Job level</h1>
            <select
              {...register("jobFunction", {
                required: "Please select a job function",
              })}
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            >
              <option value="">Select a job function</option>
              <option value="CEO">Cheif Execution Officer</option>
              <option value="E-C">E-Commerce</option>
              <option value="FI">Finance</option>
              <option value="IT">Information Technology</option>
              <option value="MK">Marketing</option>
              <option value="OP">Operations</option>
              <option value="PY">Payments</option>
              <option value="PR">Procurement</option>
              <option value="PD">Product</option>
              <option value="SL">sales</option>
              <option value="SD">Software Development</option>
              <option value="OT">Other</option>
            </select>

            {errors.jobLevel && (
              <p className="text-red-500 text-xs">
                {errors.jobFunction.message}
              </p>
            )}
          </div>
          <div className="px-4 text-[15px]">
            <h1 className="text-[#0a2540] font-semibold">
              Cross-border volume
            </h1>
            <div className="text-[13px] text-[#3f4b66] h-[36px] w-[70vw] my-2">
              <p>
                What percentage of your payment volume is from customers outside
                of India?
              </p>
            </div>
            <select
              {...register("amount", { required: "Please select amount %" })}
              className="my-2 bg-[#F6F9FC] h-[36px] w-[70vw] rounded px-2 border border-gray-300 focus:border-2 focus:border-[#A5E2FC] outline-none"
            >
              <option value="">Select an amount...</option>
              <option value="none">None</option>
              <option value="LS">Less than 25%</option>
              <option value="OM">25% or more</option>
            </select>

            {errors.amount && (
              <p className="text-red-500 text-xs">{errors.amount.message}</p>
            )}
          </div>
          <div className="flex justify-center items-center my-8 w-full">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default RequesttoInvite;
