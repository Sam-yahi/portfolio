import React from 'react';

interface CardProps {
  projectNumber: string;
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
  technologies: string[];
  githubLink: string;
}

export const ProjectCard: React.FC<CardProps> = ({
  projectNumber,
  projectImage,
  projectTitle,
  projectDescription,
  technologies,
  githubLink,
}) => {
  return (
    <>
    <div className="flex flex-row w-full justify-between  shadow-md rounded-lg p-20">   
        <div className="w-2/3 overflow-hidden rounded-lg">
      {/* Project Image */}
      <img
        src={projectImage}
        alt={projectTitle}
        className="w-full h-full object-cover rounded-lg mb-4 transition-transform duration-500  hover:scale-110"
      />
    </div>,
      {/* Card Content */}
    <div className="p-6">
        {/* Project Number and Title */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500 mb-2">
            {projectNumber}
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {projectTitle}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {projectDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          View ↗
        </a>
    </div>
    </div>

   </>
  );
};
