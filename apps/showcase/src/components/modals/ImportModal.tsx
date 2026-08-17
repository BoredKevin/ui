import React, { useState } from 'react';
import { Download, Check, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  useTheme,
} from '@boredkevin/ui';

interface ImportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ImportModal: React.FC<ImportModalProps> = ({ open, onOpenChange }) => {
  const { importThemeJson } = useTheme();
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImport = () => {
    setError(false);
    setSuccess(false);
    const ok = importThemeJson(jsonText);
    if (ok) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onOpenChange(false);
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            <DialogTitle>Import Theme JSON</DialogTitle>
          </div>
          <DialogDescription className="text-xs">
            Paste a tweakcn or @boredkevin/ui theme JSON configuration below.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder='{\n  "name": "My Custom Theme",\n  "radius": 0,\n  "dark": { ... }\n}'
            className="w-full h-44 p-3 bg-muted/30 border border-border font-mono text-xs focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {error && (
            <div className="flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span>Invalid theme JSON structure. Ensure it has valid light & dark color sets.</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <Check className="h-4 w-4" />
              <span>Theme imported successfully!</span>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="white" size="sm" onClick={handleImport} disabled={!jsonText.trim()}>
            Import Preset
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
