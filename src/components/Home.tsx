import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import ReadmePreview from './readme/ReadmePreview';
import ReadmeControls from './readme/ReadmeControls';
import { saveToFile } from '../utils/fileUtils';

const Home = () => {
  const [repoName, setRepoName] = useState('');
  const [generatedReadme, setGeneratedReadme] = useState('# Your README will appear here');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const generateReadme = async () => {
    if (!repoName) {
      setError('Please enter a repository name');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedReadme('Generating README...');

    try {
      const response = await fetch('http://localhost:5000/generate-readme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repo_name: repoName })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        setGeneratedReadme(data.readme);
      }
    } catch (error) {
      console.error('Error generating README:', error);
      setError(error.message || 'An unexpected error occurred');
      setGeneratedReadme('# Error generating README. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReadme).then(() => {
      alert('README copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Create Professional READMEs
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Generate comprehensive documentation for your GitHub repositories in seconds
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/50">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Repository Details</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="repoName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Repository Name
              </label>
              <input
                id="repoName"
                type="text"
                placeholder="e.g., username/repo"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                className="w-full bg-white/50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>
            {error && (
              <div className="text-red-500 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>{error}</span>
              </div>
            )}
            <Button onClick={generateReadme} disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Generating...
                </div>
              ) : (
                'Generate README'
              )}
            </Button>
          </div>
        </Card>

        <Card className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-blue-600">Generated README</h2>
            <ReadmeControls
              isPreviewMode={isPreviewMode}
              onPreviewToggle={() => setIsPreviewMode(!isPreviewMode)}
              onCopy={copyToClipboard}
              onSave={() => saveToFile(generatedReadme, 'README.md')}
            />
          </div>
          <div className="font-mono text-sm bg-white/50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 h-[400px] overflow-y-auto">
            <ReadmePreview
              content={generatedReadme}
              isPreviewMode={isPreviewMode}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
