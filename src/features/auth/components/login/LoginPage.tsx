import Footer from "../../../../common/components/Footer";
import Hero from  "../../../../assets/images/loginHero.jpg"
import LoginHero from "./LoginHero";
import LoginForm from "./LoginForm";
import Navbar from "../../../../common/components/NavBar";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      {/* Left Side*/}
      <section className="flex flex-col w-full lg:w-[35%] overflow-y-auto">
        <Navbar />
        <LoginForm/>
        <Footer/>
      </section>
      {/* Right Side*/}
      <section className="hidden lg:block lg:w-[65%] h-full">
        <LoginHero src={Hero}/>
      </section>
    </main>
  );
};

export default LoginPage;