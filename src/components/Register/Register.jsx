import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [succses, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
    // reset success
    setSuccess("");
    // reset error
    setRegisterError("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms & conditions.")
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id="a"
            required
          />
          <br />
          <div className="relative mb-4">
            <input
              className="w-full py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id="b"
              required
            />
            <span className="absolute top-1/3 right-2"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms & Conditions</a></label>
          <br />
          <input
            className="mb-4 w-full btn btn-secondary"
            type="submit"
            value="Register"
            id="c"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {succses && <p className="text-green-700">{succses}</p>}
        <p>Already have an account? Please <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
