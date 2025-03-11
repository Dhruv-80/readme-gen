import React from 'react';
import { ArrowRight, Github, Star } from 'lucide-react';
import Button from './ui/Button';

const Landing = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative flex flex-col justify-center items-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
      <h1 className="text-6xl font-bold mb-6 text-black dark:text-white">
  README Generator
</h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Create professional README files for your GitHub repositories in seconds using our AI-powered generator.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://github.com/Dhruv-80/readme-gen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="mr-2 h-5 w-5" />
            Star on GitHub
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <FeatureCard
          title="AI-Powered"
          description="Intelligent analysis of your repository to generate comprehensive documentation"
          gradient="from-blue-500 to-indigo-500"
        />
        <FeatureCard
          title="Customizable"
          description="Easily customize and edit the generated README to match your needs"
          gradient="from-indigo-500 to-purple-500"
        />
        <FeatureCard
          title="Best Practices"
          description="Follows documentation best practices and industry standards"
          gradient="from-purple-500 to-pink-500"
        />
      </div>

      {/* Get Started Button */}
      <div className="fixed bottom-8 left-8 z-20">
        <Button
          onClick={onGetStarted}
          variant="primary"
          className="group px-6 py-3 text-lg !w-auto"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 dark:from-gray-900/50 dark:to-gray-800/50 -z-10" />
    </div>
  );
};

const FeatureCard = ({ title, description, gradient }: { title: string; description: string; gradient: string }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-sm group-hover:opacity-100 transition-opacity rounded-xl" />
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl">
      <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center`}>
        <div className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default Landing;