import React from 'react';

const Skills = () => {
  const skills = ['React.js', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Docker'];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;