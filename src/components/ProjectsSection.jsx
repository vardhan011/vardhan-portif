import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "House Plant Store Landing Page",
    description: "A modern and responsive React landing page designed to showcase a house plant store’s brand and features.",
    image: "/projects/qqqqqq.png",
    tags: ["React", "javascript", "HTML"],
    demoUrl: "https://hou-os-eplant.vercel.app/",
    githubUrl: "https://github.com/vardhan011/HOUOsEplant",
  },
  {
    id: 2,
    title: "QRHealth: Personal Health Records with QR Code Access",
    description:
      "Built a full-stack MERN application to securely collect and manage user health records. Integrated QR code generation for instant access",
    image: "/projects/qrhwlper.png",
    tags: ["javascript", "Tailwindcss", "React.js", "MongoDB"],
    demoUrl: "https://qrhelper.vercel.app/",
    githubUrl: "https://github.com/vardhan011/qrhelper",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Personal Portfolio Website built with React and Tailwind CSS",
    image: "/projects/porttt.png",
    tags: ["React", "Tailwindcss"],
    demoUrl: "https://vardhan-portif.vercel.app/",
    githubUrl: "https://github.com/vardhan011/vardhan-portif",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vardhan011"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
