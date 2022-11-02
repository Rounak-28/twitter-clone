import { useRef } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Signup = (props) => {
  const auth = getAuth();
  const inputRefEmail = useRef("");
  const inputRefPass = useRef("");
  const inputRefName = useRef("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(
      auth,
      inputRefEmail.current.value,
      inputRefPass.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setUserName(inputRefName.current.value);
        props.setIsLoggedIn(true);
        updateProfile(auth.currentUser, {
          displayName: inputRefName.current.value,
        }).then(() => {
          // Profile updated!
        }).catch((error) => {
          // An error occurred
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const showLogin = () => {
    props.setShowLoginPage(true);
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#242d34] flex justify-center items-center">
      <div className="w-[90%] max-w-[600px] h-[505px] bg-black text-white rounded-2xl flex flex-col items-center justify-center relative">
        <MdClose className="absolute top-4 left-4 text-xl" />
        <FaTwitter className="absolute top-3 text-3xl" />
        <div className="inputs w-[90%] max-w-[445px] flex flex-col space-y-8">
          <p className="text-3xl text-center text-white">Create your account</p>
          <input
            type="text"
            className="h-14 rounded-md bg-black border-[1px] border-[#ffffff48] focus:outline-none focus:border-2 focus:border-[#1d9bf0] indent-2"
            placeholder="Name"
            ref={inputRefName}
          />
          <input
            type="text"
            className="h-14 rounded-md bg-black border-[1px] border-[#ffffff48] focus:outline-none focus:border-2 focus:border-[#1d9bf0] indent-2"
            placeholder="Email"
            ref={inputRefEmail}
          />
          <input
            type="text"
            className="h-14 rounded-md bg-black border-[1px] border-[#ffffff48] focus:outline-none focus:border-2 focus:border-[#1d9bf0] indent-2"
            placeholder="Password"
            ref={inputRefPass}
          />
          <div className="btn max-w-[445px] h-24 flex items-end justify-center">
            <button
              className="h-14 w-full bg-[#787a7a] rounded-full text-black font-bold"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <span className="text-blue-600" onClick={showLogin}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
