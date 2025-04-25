
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

const frontendSkills: Skill[] = [
  { name: 'HTML', icon: '🌐', level: 75 },
  { name: 'CSS', icon: '🎨', level: 75 },
  { name: 'JavaScript', icon: 'JS', level: 50 },
  { name: 'Material UI', icon: '👨🏼‍💻', level: 45 },
  { name: 'React', icon: '⚛️', level: 45 },
];

const backendSkills: Skill[] = [
  { name: 'Python', icon: '🐍', level: 90 },
  { name: 'Machine Learning', icon: '📈', level: 85 },
  { name: 'Deep Learning', icon: '🧠', level: 85 },
  { name: 'SQL', icon: '🗃️', level: 80 },
  { name: 'FastAPI', icon: '🗃️', level: 70 }, 
  { name: 'PostgreSQL', icon: '◼️', level: 70 },
  { name: 'R', icon: '®️', level: 75},
];
const otherSkills: Skill[] = [
  { name: 'Excel', icon: '🟢', level: 90 },
  { name: 'VS Code', icon: 'VS', level: 85 },
  { name: 'Jupyter', icon: '🪐', level: 85 },
  { name: 'PowerBI', icon: '📚', level: 75 },
  { name: 'Git', icon: '📚', level: 75 },
  { name: 'Docker', icon: '🐳', level: 65 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mijn Skills</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Ik heb in de loop van mijn carrière een breed scala aan vaardigheden ontwikkeld. Hieronder vind je een overzicht van mijn technische expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend (Data)" skills={backendSkills} />
          <SkillCategory title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-primary">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-2 w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center text-primary font-medium">
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={cn(
                  "h-2.5 rounded-full transition-all duration-1000",
                  getSkillLevelColor(skill.level)
                )}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get color based on skill level
function getSkillLevelColor(level: number): string {
  if (level >= 90) return "bg-green-500";
  if (level >= 80) return "bg-blue-500";
  if (level >= 70) return "bg-purple-500";
  if (level >= 60) return "bg-yellow-500";
  return "bg-orange-500";
}

export default SkillsSection;
