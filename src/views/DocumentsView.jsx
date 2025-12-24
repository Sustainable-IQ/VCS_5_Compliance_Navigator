import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { UpdateCard } from '../components/UpdateCard';
import { buildDocumentTree } from '../utils/helpers';

export const DocumentsView = ({ updates }) => {
  const [expandedDocs, setExpandedDocs] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  
  const documentTree = buildDocumentTree(updates);
  const documentNames = Object.keys(documentTree).sort();
  
  const toggleDocument = (docName) => {
    setExpandedDocs(prev =>
      prev.includes(docName)
        ? prev.filter(d => d !== docName)
        : [...prev, docName]
    );
  };
  
  const toggleSection = (key) => {
    setExpandedSections(prev =>
      prev.includes(key)
        ? prev.filter(s => s !== key)
        : [...prev, key]
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          Document Navigator
        </h2>
        <p className="text-gray-300">
          Browse updates organized by affected document and section
        </p>
      </div>
      
      <div className="space-y-4">
        {documentNames.map((docName) => {
          const isDocExpanded = expandedDocs.includes(docName);
          const sections = Object.keys(documentTree[docName]).sort();
          const totalUpdates = sections.reduce(
            (sum, section) => sum + documentTree[docName][section].length,
            0
          );
          
          return (
            <div key={docName} className="card">
              <button
                onClick={() => toggleDocument(docName)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="text-verra-teal" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {docName}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {totalUpdates} update{totalUpdates !== 1 ? 's' : ''} across {sections.length} section{sections.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  {isDocExpanded ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {isDocExpanded && (
                <div className="mt-4 space-y-3 border-l-2 border-gray-200 ml-3 pl-6">
                  {sections.length === 0 ? (
                    <div className="text-sm text-gray-500 italic">
                      General updates (no specific section)
                    </div>
                  ) : (
                    sections.map((section) => {
                      const sectionKey = `${docName}-${section}`;
                      const isSectionExpanded = expandedSections.includes(sectionKey);
                      const sectionUpdates = documentTree[docName][section];
                      
                      return (
                        <div key={sectionKey} className="bg-gray-50 rounded-lg p-4">
                          <button
                            onClick={() => toggleSection(sectionKey)}
                            className="w-full text-left"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-gray-900">
                                  Section {section}
                                </div>
                                <div className="text-sm text-gray-300">
                                  {sectionUpdates.length} update{sectionUpdates.length !== 1 ? 's' : ''}
                                </div>
                              </div>
                              {isSectionExpanded ? (
                                <ChevronUp className="text-gray-400" size={20} />
                              ) : (
                                <ChevronDown className="text-gray-400" size={20} />
                              )}
                            </div>
                          </button>
                          
                          {isSectionExpanded && (
                            <div className="mt-3 space-y-2">
                              {sectionUpdates.map((update) => (
                                <div
                                  key={update.id}
                                  className="bg-white p-3 rounded border border-gray-200"
                                >
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="font-mono text-sm font-semibold text-verra-teal mb-1">
                                        {update.id}
                                      </div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {update.title}
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => setSelectedUpdate(update)}
                                      className="text-verra-teal hover:text-blue-700 text-sm whitespace-nowrap"
                                    >
                                      View →
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {documentNames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300">
            No documents match your current filters. Try adjusting your filter criteria.
          </p>
        </div>
      )}
      
      {/* Modal for selected update */}
      {selectedUpdate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">Update Details</h3>
                <button
                  onClick={() => setSelectedUpdate(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <UpdateCard update={selectedUpdate} showDetails={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
