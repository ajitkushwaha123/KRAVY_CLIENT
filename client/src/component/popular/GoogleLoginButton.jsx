import { FcGoogle } from "react-icons/fc"; 

const GoogleLoginButton = () => {
  return (
    <a
      href="#"
      className="w-full flex items-center gap-3 justify-center mt-4 p-3 border border-gray-300 bg-white rounded-lg transition-colors duration-300 hover:bg-gray-100"
    >
      <FcGoogle className="text-xl" />
      <span className="font-semibold text-gray-700">Login with Google</span>
    </a>
  );
};

export default GoogleLoginButton;
