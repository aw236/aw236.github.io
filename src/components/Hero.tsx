
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
            Hi, I'm <span className="text-blue-400">Andy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            I'm Andy, an experienced data scientist and data engineer who has also taken on product management responsibilities. Explore some of my featured projects below.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://www.canva.com/design/DAGsFGeDar4/LYFYZtnhmPjGMZ7EDRnVzw/view?utm_content=DAGsFGeDar4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb0cae5c78b" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View My CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
