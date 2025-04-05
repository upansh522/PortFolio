import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Languages = ["C++", "C", "JavaScript", "TypeScript", "Python"];
  const frontendSkills = [
    "React.js",
    "next.js",
    "Redux",
    "Recoil",
    "TailwindCSS",
    "BootStrap",

  ];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST API"];
  const DevopsSkills = ["Git", "AWS", "Vercel", "Render"];
  const OtherSkills = ["Redux", "Recoil", "postman"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {Languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">      

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">DevOps Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {DevopsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Technology in CSE</strong> - Indian Institute
                  of Information Technology, Bhopal (2022-Present)
                </li>
                
                  <span className="font-semibold">Relevant Coursework:</span>
                  <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                    <li>Data Structures</li>
                    <li>Computer Networks</li>
                    <li>Object Oriented Programming</li>
                    <li>DBMS</li>
                    <li>Operating System</li>
                  </ul>
                
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎯 Achievements</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">1800+ Rating on LeetCode</h4>
                  <p>
                    Shows good command on Data Structures and Algorithms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Pupil on CodeForces (1236)
                  </h4>
                  <p>
                    Shows good command in competitive programming.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">3 ⭐ on CodeChef (1681)</h4>
                  <p>
                    Demonstrates solid problem-solving skills in timed environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
