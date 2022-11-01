import { useRef } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
  const auth = getAuth();
  const inputRefEmail = useRef("");
  const inputRefPass = useRef("");

  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      inputRefEmail.current.value,
      inputRefPass.current.value
    )
      .then((userCredential) => {
        // Signed in
        props.setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const showSignup = () => {
    props.setShowLoginPage(false);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#242d34] flex justify-center items-center">
      <div className="w-[600px] h-[505px] bg-black text-white rounded-2xl flex flex-col items-center justify-center relative">
        <MdClose className="absolute top-4 left-4 text-xl" />
        <FaTwitter className="absolute top-3 text-3xl" />
        <div className="inputs flex flex-col space-y-8">
          <p className="text-3xl text-center text-white">Login your account</p>
          <input
            type="text"
            className="w-[445px] h-14 rounded-md bg-black border-[1px] border-[#ffffff48] focus:outline-none focus:border-2 focus:border-[#1d9bf0] indent-2"
            placeholder="Email"
            ref={inputRefEmail}
          />
          <input
            type="text"
            className="w-[445px] h-14 rounded-md bg-black border-[1px] border-[#ffffff48] focus:outline-none focus:border-2 focus:border-[#1d9bf0] indent-2"
            placeholder="Password"
            ref={inputRefPass}
          />
          <div className="btn h-24 flex items-end">
            <button
              className="h-14 w-[445px] bg-[#787a7a] rounded-full text-black font-bold"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </div>
        <p>
          Don&#39;t have an account?{" "}
          <span className="text-blue-600" onClick={showSignup}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
