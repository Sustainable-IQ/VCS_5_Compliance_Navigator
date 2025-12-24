import React from 'react';
import { FileText, Calendar, List, FolderTree } from 'lucide-react';
import { useStore } from '../store';

export const Header = () => {
  const { currentView, setCurrentView } = useStore();
  
  const views = [
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'table', label: 'Update Browser', icon: List },
    { id: 'checklist', label: 'My Checklist', icon: FileText },
    { id: 'documents', label: 'Documents', icon: FolderTree }
  ];
  
  return (
    <header className="bg-verra-navy border-b border-white border-opacity-20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-verra-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">SIQ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-100">
                VCS Version 5 Compliance Navigator
              </h1>
            </div>
          </div>
          
          <nav className="flex gap-2">
            {views.map((view) => {
              const Icon = view.icon;
              const isActive = currentView === view.id;
              
              return (
                <button
                  key={view.id}
                  onClick={() => setCurrentView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-verra-teal text-white'
                      : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline">{view.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
