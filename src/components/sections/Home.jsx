import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Nishant Upadhyay
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer passionate about crafting scalable, efficient web applications and solving challenging problems.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-red-400 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/1-8oTsa2oMdQGPaC6lnuxU0blr1nkN-c8/view?usp=drive_link" target="blank"
              className="bg-blue-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-red-400 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"

            >
              Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
