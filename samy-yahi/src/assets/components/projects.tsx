import { ProjectCard } from "./cards";
import ProjectImg1 from "../images/sauvetontel.png";
import ProjectImg2 from "../images/garderie.png";
import ProjectImg3 from "../images/hotel.png";

export const Projects = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-left mt-10">My Projects</h1>
        <p className="text-lg text-gray-300  rounded-lg  ">
            A selection of projects that reflect my practice — from the React product to the customer site, to automation.
        </p>
        <div className="flex flex-wrap gap-4 flex-col">
            <ProjectCard
                projectNumber="01"
                projectImage={ProjectImg1}
                projectTitle="Sauve ton Tel"
                projectDescription="Made a wordpress website for a phone repair company, showcasing their services and products. The website is designed to be user-friendly and visually appealing, with a focus on providing information about the company's offerings."
                technologies={["Wordpress", "Php", "CSS"]}
                githubLink="https://sauvetontel.com/"
            />
            <ProjectCard
                projectNumber="02"
                projectImage={ProjectImg2}
                projectTitle="Garderie"
                projectDescription="Made a wordpress website for a daycare, showcasing their services and products. The website is designed to be user-friendly and visually appealing, with a focus on providing information about the company's offerings."
                technologies={["Wordpress", "Php", "CSS"]}
                githubLink="https://garderiebourque.ca/"
            />
            <ProjectCard
                projectNumber="03"
                projectImage={ProjectImg3}
                projectTitle="Hotel"
                projectDescription="Made a React website for a hotel, showcasing their services and products. The website is designed to be user-friendly and visually appealing, with a focus on providing information about the company's offerings."
                technologies={["React", "Tailwind", "CSS"]}
                githubLink="https://hotel-booking-one-ruby.vercel.app/"
            />
         
        </div>
        <div className="flex justify-center mt-8">
            <a href="https://github.com/samy-yahi" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold py-2 px-4 rounded">
                View all projects on GitHub
            </a>
        </div>

    </div>
  )
}
