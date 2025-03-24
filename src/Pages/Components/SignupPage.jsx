export const SignupPage = () => (
    <div className="signupPage h-[450px]">
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name" className="inputField" />
      <input type="text" placeholder="Phone number" className="inputField" />
      <input type="email" placeholder="Email address" className="inputField" />
      <input type="password" placeholder="Password" className="inputField" />
      <input type="text" placeholder="Company name" className="inputField" />
      <div className="radioGroup">
        <span>Are you an Agency?</span>
        <label><input type="radio" name="agency" /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>
      <button className="primaryButton">Create Account</button>
    </div>
  );