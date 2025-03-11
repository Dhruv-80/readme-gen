import React from 'react';
import { Copy, Download } from 'lucide-react';
import Button from '../ui/Button';

interface ReadmeControlsProps {
  isPreviewMode: boolean;
  onPreviewToggle: () => void;
  onCopy: () => void;
  onSave: () => void;
}

const ReadmeControls: React.FC<ReadmeControlsProps> = ({
  isPreviewMode,
  onPreviewToggle,
  onCopy,
  onSave,
}) => {
  return (
    <div className="space-x-2">
      <button
        onClick={onPreviewToggle}
        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isPreviewMode ? 'Raw' : 'Preview'}
      </button>
      <Button variant="icon" onClick={onCopy}>
        <Copy className="h-5 w-5" />
      </Button>
      <Button variant="icon" onClick={onSave}>
        <Download className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ReadmeControls;