import Input from "./Input";
import RememberMe from "./RememberMe"

const LoginForm = () => {


  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleFormSubmission = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.name)
    console.log(e.target.value)
  }

return (
  <div className="flex-1 flex items-center justify-center">
    <form onSubmit={handleFormSubmission} className="w-full max-w-sm flex flex-col gap-6 px-8">
        
        {/* Login Header */}
        <div className="text-center">
          <h1 className="text-[30px] font-extrabold text-gray-900 tracking-tight leading-none">Welcome Back</h1>
          <p className="text-[14px] font-semibold text-slate-400 mt-2"> Sign in with your username and password.</p>
        </div>

        {/* Login Inputs */}
        <Input onChange={handleFormInput} name="username" label="Username" type="text" placeholder="larry.lester@sidekick.com" />
        <Input onChange={handleFormInput} name="password" label="Password" type="password" placeholder="••••••••"/>

        {/* RememberMe Cookie and Forgot Password */}
        <div className="flex items-center justify-between">
          <RememberMe name="rememberMe" label="Remember me" />
          <a href="/forgot-password" className="text-[12px] font-semibold text-slate-400 hover:text-teal-600 active:text-teal-600 transition-colors duration-300 cursor-pointer"> Forgot Password?
          </a>
        </div>
        
        {/* Sign in Button */}
        <button type="submit" className="text-[16px] text-white font-extrabold tracking-tight w-full h-12 rounded-xl bg-[#265c5c] hover:bg-teal-700 transition duration-300 active:scale-[0.95]"> Sign in
        </button>

        {/* Sign up Link */}
        <div className="group flex justify-center text-[12px] font-semibold text-slate-400"> Don't have an account?
          <a href="/sign-up" className="font-semibold text-[#265c5c] underline group-hover:text-teal-600 active:text-teal-600 transition-colors duration-300 cursor-pointer ml-1"> Sign Up
          </a>
        </div>
    </form>
  </div>
  );
};

export default LoginForm;