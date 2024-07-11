import About from "./components/about";
import Description from "./components/description";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Links from "./components/links";
import NavBar from "./components/nav";

export default function Home() {
  return (
    <div className="font-figtree bg-base-300">
      <NavBar />
      <main className="px-6 sm:px-40 flex flex-col pb-20">
        <Hero />
        <Description />
        <About />
        <Links />
      </main>

      <Footer />
    </div>
  );
}
