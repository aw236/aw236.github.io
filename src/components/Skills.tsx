
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS", "HTML5", "CSS3"],
      color: "bg-blue-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "bg-green-500"
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "Webpack", "Linux"],
      color: "bg-teal-500"
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Mentoring", "Agile"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-900 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-slate-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-slate-900 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl">
            <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
