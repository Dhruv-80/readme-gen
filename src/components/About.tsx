import React from 'react';
import { Github, Code2, BookOpen, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About README Gen</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          An intelligent README generator that helps developers create professional and comprehensive documentation for their GitHub repositories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Code2 className="h-8 w-8 text-blue-600" />}
          title="Smart Generation"
          description="Analyzes your repository structure and generates contextually relevant documentation."
        />
        <FeatureCard
          icon={<BookOpen className="h-8 w-8 text-blue-600" />}
          title="Best Practices"
          description="Follows documentation best practices and industry standards for README creation."
        />
        <FeatureCard
          icon={<Star className="h-8 w-8 text-blue-600" />}
          title="Customizable"
          description="Easily customize and edit the generated README to match your project's needs."
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">How It Works</h2>
        <div className="space-y-6">
          <Step number={1} title="Enter Repository Details">
            Simply input your GitHub repository name in the format username/repository.
          </Step>
          <Step number={2} title="Generate README">
            Our AI-powered system analyzes your repository and generates a comprehensive README.
          </Step>
          <Step number={3} title="Customize and Export">
            Preview, edit, and export your README in markdown format.
          </Step>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/Dhruv-80/readme-gen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Github className="h-6 w-6" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{children}</p>
    </div>
  </div>
);

export default About;