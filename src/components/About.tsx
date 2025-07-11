import { Code, Palette, Smartphone, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach for all screen sizes"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern frameworks and cutting-edge technologies"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions. 
            I love turning complex problems into simple, beautiful designs that provide exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I started out driven by curiosity and a love for building with code. Over time, that curiosity grew into a career spanning data science, data engineering, and full-stack development. I'm always learning — whether it's exploring new tools, refining product strategy, or diving into emerging technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Outside of work, I enjoy mentoring early-career developers, contributing to open-source projects, and staying hands-on with the latest advances in data science, data engineering, and data visualization.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code size={40} className="text-white" />
                </div>
                <p className="text-gray-300">Profile Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <feature.icon className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
