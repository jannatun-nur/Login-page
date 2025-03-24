import { useState } from "react";

export const SignupPage = () => {
  return (
    
      <div className="h-[550px]">
        <h2 className="text-xl text-startfont-bold mb-6 text-gray-900 w-5/12 ">
          Create your PopX account
        </h2>
        <form className="space-y-2 px-1">
          {[
            { label: "Full Name", type: "text" },
            { label: "Phone number", type: "text" },
            { label: "Email address", type: "email" },
            { label: "Password", type: "password" },
            { label: "Company name", type: "text" },
          ].map(({ label, type }, index) => (
            <FloatingLabelInput key={index} label={label} type={type} />
          ))}

          <div className="text-gray-700 text-start">



            <span className="font-medium text-start p-2">Are you an Agency?</span>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center ">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600 px-5"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

         
        </form>

       <div className="mt-24 mx-4">
       <button className="w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700">
            Create Account
          </button>
       </div>
      </div>

  );
};

const FloatingLabelInput = ({ label, type }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(value !== "")}
        className="w-full p-3 border bg-gray-200 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
      />
      <label
        className={`absolute left-3 px-1 text-gray-600 bg-gray-200 transition-all duration-200 ${
          focus || value ? "-top-3 text-xs text-purple-600" : "top-3 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
