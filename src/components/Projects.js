import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'E-commerce Platform', description: 'A full-stack e-commerce solution using MERN stack.' },
    { name: 'Task Management App', description: 'A React-based task management application with a Node.js backend.' },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;