import Footer from "../../../../common/components/Footer";
import Hero from  "../../../../assets/images/loginHero.jpg"
import LoginHero from "./LoginHero";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      {/* Left Side*/}
      <section className="flex flex-col w-full lg:w-[40%] overflow-y-auto">
        <LoginForm/>
        <Footer/>
      </section>
      {/* Right Side*/}
      <section className="hidden lg:block lg:w-[60%] h-full">
        <LoginHero src={Hero}/>
      </section>
    </main>
  );
};

export default LoginPage;