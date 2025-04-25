import { cn } from '@/lib/utils';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  achievements?: string[];
}

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements?: string[];
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Master Data Science and Society",
    institution: "Tilburg University",
    location: "Tilburg, Nederland",
    duration: "2023 - 2024",
    description: "Vaardigheden: Python · Apache Spark · R · SQL · Data mining · Machine learning · Deep learning · Statistics.",
    achievements: [
      '<a href="/DSS_Masters_Thesis_Marijn_van_Waterschoot.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline"> Thesis:"To what extent do bull and bear market conditions impact the effectiveness of certain features in forecasting Bitcoin price?" ⤓</a>',
      "GPA: 8.1/10",
      "Graduated with Distinction"
    ]
  },
  {
    id: 2,
    degree: "Pre-master Data Science and Society",
    institution: "Tilburg University",
    location: "Tilburg, Nederland",
    duration: "2022 - 2023",
    description: "Courses: Programming and Algorithmic Thinking, Statistics, Introduction to Artificial Intelligence and Calculus",
    achievements: [
      "GPA: 8.5/10"
    ]
  },
  {
    id: 3,
    degree: "Bachelor Finance and Control",
    institution: "Avans Hogeschool",
    location: "Breda, Nederland",
    duration: "2018 - 2022",
    description: "Minor: Data Science - Hogeschool Amsterdam",
    achievements: [
      "Diploma behaald"
    ]
  }
];

const experienceData: Experience[] = [
  {
    id: 1,
    role: "Data/Finance Professional",
    company: "I4Talent (detachering)",
    location: "VolkerWessels Telecom (Nieuwegein)",
    duration: "mei 2024 – heden",
    description: "Gedetacheerd bij VolkerWessels Telecom als financial professional. Ik hielp achterstanden wegwerken, ondersteunde administratieve processen en bracht verbeterpunten in kaart.",
    achievements: [
      "Procesanalyses uitgevoerd en verbetervoorstellen geïmplementeerd",
      "Taken in Excel geautomatiseerd, o.a. verwerking schadetickets",
      "Verwerkingstijd significant verlaagd en productiviteit verhoogd"
    ]
  },
  {
    id: 2,
    role: "Verkoop Assistent",
    company: "Green Menswear",
    location: "Papendrecht, Nederland",
    duration: "oktober 2016 – mei 2024",
    description: "Verantwoordelijk voor het openen/sluiten van de winkel, kassa en klantcontact. Ondersteuning bij inkoop van nieuwe collectie.",
    achievements: [
      "Klantgerichtheid en service als eerste aanspreekpunt",
      "Zelfstandig verantwoordelijk voor winkelbeheer",
      "Bijgedragen aan inkoopbeslissingen van nieuwe collecties"
    ]
  },
  {
    id: 3,
    role: "Afstudeerstage",
    company: "New Horizon",
    location: "Raamsdonksveer, Nederland",
    duration: "februari 2022 – juni 2022",
    description: "Afstudeeropdracht gericht op het berekenen van de verkoopwaarde van circulair beton.",
    achievements: [
      "Verkoopwaarde circulair beton geanalyseerd en onderbouwd"
        ]
  },
  {
    id: 4,
    role: "Afstudeerstage",
    company: "Iv-Groep",
    location: "Papendrecht, Nederland",
    duration: "september 2021 – januari 2022",
    description: "Opstellen van een adviesrapport over Transfer Pricing als afstudeeropdracht.",
    achievements: [
      "Transfer Pricing model uitgewerkt en toegelicht",
      "Adviesrapport opgesteld conform wet- en regelgeving"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Opleiding & Ervaring</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Een overzicht van mijn academische achtergrond en ervaringen die hebben bijgedragen aan mijn ontwikkeling. 
          <a href="/CV_Marijn.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium"> Download CV ⤓</a>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Opleiding
            </h3>
            
            <div className="relative pl-8 border-l-2 border-accent space-y-10">
              {educationData.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  title={item.degree}
                  subtitle={item.institution}
                  location={item.location}
                  duration={item.duration}
                  description={item.description}
                  achievements={item.achievements}
                  isFirst={index === 0}
                  isLast={index === educationData.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Werkervaring
            </h3>
            
            <div className="relative pl-8 border-l-2 border-accent space-y-10">
              {experienceData.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  title={item.role}
                  subtitle={item.company}
                  location={item.location}
                  duration={item.duration}
                  description={item.description}
                  achievements={item.achievements}
                  isFirst={index === 0}
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string;
  achievements?: string[];
  isFirst: boolean;
  isLast: boolean;
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  location, 
  duration, 
  description, 
  achievements,
  isFirst,
  isLast 
}: TimelineItemProps) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[3.25rem] w-6 h-6 bg-accent rounded-full border-4 border-white"></div>
      
      <div className={cn(
        "bg-white p-6 rounded-lg shadow-sm",
        isFirst ? "animate-fade-in" : "", 
      )}>
        <h4 className="text-lg font-semibold text-primary">{title}</h4>
        <div className="flex justify-between items-center mb-2">
          <p className="text-accent font-medium">{subtitle}</p>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm" dangerouslySetInnerHTML={{ __html: achievement }} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
