import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Donezo",
    description:
      "A full-stack task management app with JWT-based auth, task CRUD, priority levels, deadlines, and a clean, responsive UI.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Zod",
      "MongoDB",
      "JWT",
      "TailwindCSS",
      "TypeScript",
    ],
    link: "https://donezo-eta.vercel.app",
    github: "https://github.com/upansh522/TaskManagement",
  },
  {
    title: "DashPilot",
    description:
      "An admin dashboard for monitoring sales, revenue, ratings, and user activity with rich charts and secure GET-only API routes.",
    techStack: [
      "React.js",
      "Material UI",
      "Redux",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    link: "https://dashboard-five-kappa-83.vercel.app/dashboard",
    github: "https://github.com/upansh522/Dashboard",
  },
  {
    title: "Blogify",
    description:
      "A blogging platform that lets users write, view, and comment on posts with secure JWT-based login and MongoDB data storage.",
    techStack: [
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
      "JWT",
      "HTML",
      "TailwindCSS",
    ],
    link: "https://github.com/upansh522/Blogging-App",
    github: "https://github.com/upansh522/Blogging-App",
  },
  {
    title: "ASKQ ChatBot Website",
    description:
      "An AI-powered chatbot built with React and OpenAI API, offering real-time responses, search history, and tested for performance.",
    techStack: ["React.js", "CSS", "JavaScript", "OpenAI API"],
    link: "https://ask-q-ten.vercel.app/",
    github: "https://github.com/upansh522/askQ",
  },
  {
    title: "Landing Page",
    description:
      "A responsive landing page showcasing modern UI/UX design using pure HTML, CSS, JavaScript, and Bootstrap.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://upansh522.github.io/LandingPage/", 
    github: "https://github.com/upansh522/LandingPage", 
  },
  {
    title: "Calculator",
    description:
      "A basic calculator web app with arithmetic operations, built using HTML and styled with CSS.",
    techStack: ["HTML", "CSS"],
    link: "https://github.com/upansh522/calculator", 
    github: "https://github.com/upansh522/calculator", 
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A simple interactive Tic-Tac-Toe game using JavaScript logic and styled with HTML and CSS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/upansh522/Tic-tac-toe", 
    github: "https://github.com/upansh522/Tic-tac-toe", 
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, description, techStack, link, github }, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      🔗 Live
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
