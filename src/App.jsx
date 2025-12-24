import React, { useMemo } from 'react';
import { Header } from './components/Header';
import { MarketingBanner } from './components/MarketingBanner';
import { Filters } from './components/Filters';
import { TimelineView } from './views/TimelineView';
import { TableView } from './views/TableView';
import { ChecklistView } from './views/ChecklistView';
import { DocumentsView } from './views/DocumentsView';
import { useStore } from './store';
import { vcsUpdates } from './data';
import { filterUpdates } from './utils/helpers';

function App() {
  const {
    currentView,
    selectedCategory,
    selectedProjectType,
    selectedApplicability,
    selectedDocument,
    selectedEffectiveDate,
    searchQuery
  } = useStore();
  
  const filteredUpdates = useMemo(() => {
    return filterUpdates(vcsUpdates, {
      category: selectedCategory,
      projectType: selectedProjectType,
      applicability: selectedApplicability,
      document: selectedDocument,
      effectiveDate: selectedEffectiveDate,
      searchQuery: searchQuery
    });
  }, [selectedCategory, selectedProjectType, selectedApplicability, selectedDocument, selectedEffectiveDate, searchQuery]);
  
  const renderView = () => {
    switch (currentView) {
      case 'timeline':
        return <TimelineView updates={filteredUpdates} />;
      case 'table':
        return <TableView updates={filteredUpdates} />;
      case 'checklist':
        return <ChecklistView updates={vcsUpdates} />;
      case 'documents':
        return <DocumentsView updates={filteredUpdates} />;
      default:
        return <TimelineView updates={filteredUpdates} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-verra-navy">
      <Header />
      <MarketingBanner />
      {currentView !== 'checklist' && <Filters />}
      <main>
        {renderView()}
      </main>
      
      <footer className="bg-verra-navy-light border-t border-white border-opacity-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              <p>
                VCS Version 5 Compliance Navigator | Data extracted from official Verra documentation
              </p>
              <p className="mt-1">
                Release Date: December 16, 2025 | {vcsUpdates.length} total updates
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href="https://verra.org/program-notice/verra-launches-version-5-of-the-vcs-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-verra-teal hover:underline"
              >
                VCS Version 5 Launch Page →
              </a>
              <a
                href="https://verra.org/wp-content/uploads/2025/12/Dec-2025-VCS-Version-5-Overview-of-Program-Updates-and-Effective-Dates.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-verra-teal hover:underline"
              >
                Download Overview PDF →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
