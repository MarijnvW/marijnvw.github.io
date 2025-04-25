import { BarChart3, Flame, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="section-title">Over mij</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ik ben een gepassioneerde data scientist met een achtergrond in bedrijfseconomie en een grote interesse in data-analyse en datagedreven oplossingen. 
              Tijdens mijn minor Data Science ontdekte ik mijn liefde voor het analyseren van gegevens en het vertalen van inzichten naar concrete toepassingen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Sindsdien ben ik mij continu blijven ontwikkelen, zowel technisch als analytisch.
              Ik haal veel energie uit het oplossen van complexe vraagstukken en het creëren van slimme oplossingen met behulp van data.
              Of het nu gaat om het bouwen van dashboards, het modelleren van gegevens of het automatiseren van processen – ik zet me graag in om waarde te creëren met data.

            </p>
            <p className="text-lg text-gray-700">
              Wanneer ik niet met data bezig ben, vind ik het heerlijk om te lezen, 
              te sporten (vooral zwemmen, hardlopen en de sportschool), 
              of tijd door te brengen met familie, vrienden of mijn vriendin.
            </p>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Persoonlijke Waarden</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 ">
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Leergierigheid</h4>
                </div>
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Flame className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Doorzettigsvermogen</h4>
                </div>
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Kwaliteitsgerichtheid</h4>
                </div>
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Verantwoordelijkheid</h4>
                </div>
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Analytisch Vermogen</h4>
                </div>
                <div className="text-center p-3 flex flex-col items-center"> 
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium">Samenwerking</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
