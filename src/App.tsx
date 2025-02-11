import React from 'react';
import { useState } from 'react';
import { ImageIcon, Loader2, Download, RefreshCw } from 'lucide-react';

interface GenerateResponse {
  image: string;
  seed: number;
  cost: number;
}

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.getimg.ai/v1/flux-schnell/text-to-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GETIMG_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
          width: 1024,
          height: 1024,
          steps: 4
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data: GenerateResponse = await response.json();
      const imageUrl = `data:image/jpeg;base64,${data.image}`;
      setImageUrl(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ai-image.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download image');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <ImageIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Image Generator</h1>
          <p className="text-gray-600">Transform your ideas into stunning images with AI</p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 backdrop-blur-sm">
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to generate..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              onKeyDown={(e) => e.key === 'Enter' && generateImage()}
            />
            <button
              onClick={generateImage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all hover:shadow-lg text-white"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  Generate
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {error}
            </div>
          )}

          {loading && !imageUrl && (
            <div className="text-center py-16 px-4 border-2 border-dashed border-gray-200 rounded-xl">
              <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Creating your masterpiece...</p>
            </div>
          )}

          {imageUrl && (
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={imageUrl}
                  alt={prompt}
                  className="w-full rounded-xl shadow-xl border border-gray-200 transition-transform hover:scale-[1.01]"
                  onError={() => setError('Failed to load the generated image')}
                />
                <button
                  onClick={handleDownload}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  title="Download Image"
                >
                  <Download className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
