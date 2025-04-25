import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CV-Generator",
    description: "Een full-stack CV-generator gebouwd met React, FastAPI en PostgreSQL. De applicatie bevat dynamische invoerformulieren, REST API-integratie, databaseopslag en automatische PDF-generatie met ReportLab.",
    image: "/images/CV-Generator.jpg",
    tags: ["React", "Node.js", "Python", "FastAPI", "SQL", "PostgreSQL", "ReportLab"],
    codeLink: "https://github.com/MarijnvW",
  },
  {
    id: 2,
    title: "(Upcoming) Funda huizenmarkt analyse",
    description: "Analyse van de Nederlandse huizenmarkt met data van de Funda API, gecombineerd met externe bronnen. Met behulp van Python en machine learning voorspel ik de verwachte verkoopprijzen van woningen.",
    image: "/images/Funda_Project.jpg",
    tags: ["Python", "API", "Machine Learning"],
    codeLink: "https://github.com",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Python', 'SQL', 'React', 'Node.js', 'JavaScript', 'Vue.js'];
  
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mijn Projecten</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Hier zie je een aantal van mijn recente projecten, 
          waarin ik mijn passie voor data en technologie heb kunnen toepassen en verder ontwikkelen.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-all',
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
