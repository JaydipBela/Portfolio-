import { useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiChevronRight,
  FiInfo,
  FiX,
} from "react-icons/fi";
import "./Projects.css";
import images from "../../assets/Images.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const categories = ["All", "React", "Javascript"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentWorking = {
    id: 1,
    title: "E-commerce",
    description:
      " e-commerce platform for contemporary furniture and home décor, built with React. Featuring responsive design, intuitive navigation, and interactive product displays with hover effects, the site offers a seamless shopping experience across Home, Shop, Blog, About, and Contact sections. Users can browse curated furniture collections, read design-focused blog content, and easily manage their shopping cart, all within an elegant interface that showcases modern living solutions",
    image: images.TheModernLook,
    tags: ["React", "JavaScript", "Responsive" ,"Node.js","Express.js","MongoDB"],
    demoLink: "#",
    githubLink: "#",
  };
  const projectsData = [
    {
      id: 1,
      title: "The Modern Look",
      description:
        "Built a modern e-commerce platform using React, featuring a fully responsive design for seamless performance across all devices. The site includes interactive product listings and dynamic single-page views for both products and blog posts, showcasing detailed content, customer reviews, and smooth user interaction. Implemented Swiper.js to create engaging sliders and carousels for product images and featured blog content. Developed a functional shopping cart system using Redux Toolkit and managed navigation with React Router. The UI is styled entirely with custom CSS to ensure a clean, modern, and user-friendly experience.",
      image: images.TheModernLook,
      tags: ["React", "JavaScript", "Responsive","Redux"],
      demoLink: "https://the-modern-look.vercel.app/",
      githubLink: "https://github.com/JaydipBela/TheModernLook",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application that displays current conditions and forecasts based on user location or search queries.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "JavaScript", "APIs", "Responsive"],
      demoLink: "https://weather-git-main-jaydipbelas-projects.vercel.app/",
      githubLink: "https://github.com/JaydipBela/weather",
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      description:
        "This Tic Tac Toe game is a responsive web application built with HTML, CSS, and JavaScript that allows two players to take turns marking squares on a 3x3 grid. It features score tracking for X wins, O wins, and draws, game reset functionality, visual feedback for winning combinations, and an intuitive interface that works across different screen sizes.",
      image: images.TicTacToe,
      tags: ["Javascript", "Responsive"],
      demoLink: "https://tic-tac-toe-one-peach.vercel.app/",
      githubLink: "https://github.com/JaydipBela/tic-tac-toe",
    },
    {
      id: 4,
      title: "Calculater",
      description:
        "This project is a simple calculator web application built with HTML, CSS, and JavaScript. It features a clean, responsive user interface with a gradient background and a calculator display that includes number buttons, basic arithmetic operators, a decimal point, equals button, and a clear function. The calculator allows users to input mathematical expressions and calculates results using JavaScripts eval() function, with basic error handling for invalid expressions. The design is mobile-friendly with media queries ensuring proper display across different screen sizes.",
      image: images.Calculater,
      tags: ["Javascript", "Firebase"],
      demoLink: "https://calculater-blue.vercel.app/",
      githubLink: "https://github.com/JaydipBela/calculater",
    },
    {
      id: 5,
      title: "Todo List",
      description:
        "This project is a simple yet functional To-Do List web application that allows users to manage their tasks through a clean interface. Users can add new tasks, edit existing ones, and delete completed items, with all data being saved to the browsers local storage for persistence between sessions. The application features a responsive design with color-coded buttons for different actions and a minimalist layout that focuses on usability.",
      image: images.TodoList,
      tags: ["Javascript", "Responsive"],
      demoLink: "https://todo-list-alpha-ashen.vercel.app/",
      githubLink: "https://github.com/JaydipBela/Todo-List",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeCategory));

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".projects .section-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        ".projects-intro",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        ".project-categories .category-btn",
        { opacity: 0, y: 20, stagger: 0.1 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        ".projects-grid .project-card",
        { opacity: 0, scale: 0.95, stagger: 0.1 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 },
        "-=0.4"
      );

    gsap.fromTo(
      ".project-modal",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects">
      <div className="container skillcontainer ">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-intro">
          <p>
            Here are some of my recent projects that showcase my skills and
            experience in building modern, responsive web applications.
          </p>
        </div>

        <div className="projects-gallery">
          <div className="project-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid ">
            {filteredProjects.map((project) => (
              <div key={currentWorking.id} className="project-card ">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Demo"
                      >
                        <FiExternalLink />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Code"
                      >
                        <FiGithub />
                      </a>
                      <button
                        className="project-link project-details-btn"
                        onClick={() => openProjectModal(project)}
                        aria-label="View Details"
                      >
                        <FiInfo />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description.length > 120
                      ? `${project.description.substring(0, 120)}...`
                      : project.description}
                  </p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="read-more-btn"
                    onClick={() => openProjectModal(project)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
        
          </div>

          {isModalOpen && selectedProject && (
            <div className="project-modal-overlay" onClick={closeProjectModal}>
              <div
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close-btn" onClick={closeProjectModal}>
                  <FiX />
                </button>
                <div className="modal-content">
                  <div className="modal-image">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                    />
                  </div>
                  <div className="modal-info">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-description">
                      {selectedProject.description}
                    </p>
                    <div className="modal-tags">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="modal-links">
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FiGithub /> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="more-projects">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="more-link"
          >
            View More Projects <FiChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
