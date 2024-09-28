// components/ProjectCard.tsx
interface Project {
    title: string;
    description: string;
  }
  
  const ProjectCard = ({ title, description }: Project) => {
    return (
      <div className="border p-4 rounded">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ProjectCard;