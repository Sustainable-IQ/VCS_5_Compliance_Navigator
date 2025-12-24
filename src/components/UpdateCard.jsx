import React, { useState } from 'react';
import { Eye, ExternalLink, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { getApplicabilityBadge, getCategoryColor, formatDate } from '../utils/helpers';
import { getDocumentUrl } from '../documentUrls';

export const UpdateCard = ({ update, showDetails = false }) => {
  const [isExpanded, setIsExpanded] = useState(showDetails);
  
  const categoryColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
    pink: 'bg-pink-100 text-pink-800'
  };
  
  const categoryColor = getCategoryColor(update.category);
  
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-sm font-semibold text-verra-teal">
              {update.id}
            </span>
            <span className={`badge ${categoryColors[categoryColor]}`}>
              {update.category}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {update.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {update.effectiveDates?.slice(0, 2).map((ed, idx) => {
              const badge = getApplicabilityBadge(ed.applicability?.[0] || 'all');
              return (
                <span key={idx} className={`badge ${badge.className}`}>
                  {formatDate(ed.date)} - {badge.label}
                </span>
              );
            })}
            {update.effectiveDates?.length > 2 && (
              <span className="badge bg-gray-100 text-gray-600">
                +{update.effectiveDates.length - 2} more
              </span>
            )}
          </div>
          
          {!isExpanded && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {update.description}
            </p>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-900 hover:border-verra-teal hover:text-verra-teal transition-colors font-medium"
        >
          <Eye size={18} />
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-sm text-gray-700">{update.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Effective Dates</h4>
            <div className="space-y-2">
              {update.effectiveDates?.map((ed, idx) => {
                const badge = getApplicabilityBadge(ed.applicability?.[0] || 'all');
                return (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {formatDate(ed.date)}
                      </span>
                      <span className={`badge ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{ed.condition}</p>
                    {ed.scope && (
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium">Scope:</span> {ed.scope}
                      </p>
                    )}
                    {ed.exceptions && (
                      <p className="text-sm text-orange-600 mt-1">
                        <span className="font-medium">Exception:</span> {ed.exceptions}
                      </p>
                    )}
                    {ed.details && (
                      <p className="text-sm text-gray-600 mt-1">{ed.details}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Affected Documents</h4>
            <div className="space-y-1">
              {update.documents?.map((doc, idx) => {
                const docUrl = getDocumentUrl(doc.name);
                return (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <FileText size={16} className="text-gray-400 mt-0.5" />
                    <div>
                      {docUrl ? (
                        <a 
                          href={docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-verra-teal hover:underline"
                        >
                          {doc.name} <ExternalLink size={12} className="inline" />
                        </a>
                      ) : (
                        <span className="font-medium text-gray-900">{doc.name}</span>
                      )}
                      <span className="text-gray-500"> {doc.version}</span>
                      {doc.sections.length > 0 && (
                        <span className="text-gray-600">
                          {' '}
                          - Section{doc.sections.length > 1 ? 's' : ''}: {doc.sections.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {update.projectTypes && update.projectTypes.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Project Types</h4>
              <div className="flex flex-wrap gap-2">
                {update.projectTypes.map((type, idx) => (
                  <span key={idx} className="badge bg-blue-50 text-blue-700">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {update.relatedUpdates && update.relatedUpdates.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Related Updates</h4>
              <div className="flex flex-wrap gap-2">
                {update.relatedUpdates.map((relId, idx) => (
                  <span key={idx} className="badge bg-gray-100 text-gray-700 font-mono">
                    {relId}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2 pt-2">
            <a
              href="https://verra.org/wp-content/uploads/2025/12/Dec-2025-VCS-Version-5-Overview-of-Program-Updates-and-Effective-Dates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-verra-teal hover:underline flex items-center gap-1"
            >
              <ExternalLink size={14} />
              View in PDF (Page {update.pdfPage})
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
