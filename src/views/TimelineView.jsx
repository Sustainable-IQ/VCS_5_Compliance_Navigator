import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { UpdateCard } from '../components/UpdateCard';
import { groupUpdatesByDate, formatDate } from '../utils/helpers';

export const TimelineView = ({ updates }) => {
  const [expandedDates, setExpandedDates] = useState([]);
  
  const grouped = groupUpdatesByDate(updates);
  
  // Sort dates chronologically
  const sortDate = (dateStr) => {
    if (dateStr === 'immediate') return new Date('2025-12-16');
    return new Date(dateStr);
  };
  
  const dates = Object.keys(grouped)
    .filter(date => grouped[date].length > 0)
    .sort((a, b) => sortDate(a) - sortDate(b));
  
  const toggleDate = (date) => {
    setExpandedDates(prev =>
      prev.includes(date)
        ? prev.filter(d => d !== date)
        : [...prev, date]
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          VCS V5 Compliance Timeline
        </h2>
        <p className="text-gray-300">
          Click on each date to see all updates effective on that date
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        <div className="space-y-8">
          {dates.map((date) => {
            const isExpanded = expandedDates.includes(date);
            const updatesForDate = grouped[date];
            
            return (
              <div key={date} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-verra-teal rounded-full border-4 border-verra-navy shadow" />
                
                <div className="ml-16">
                  <button
                    onClick={() => toggleDate(date)}
                    className="w-full text-left bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mb-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-verra-teal" size={24} />
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {formatDate(date)}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {updatesForDate.length} change{updatesForDate.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="text-gray-900" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-900" size={24} />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="space-y-4">
                      {updatesForDate.map((update) => {
                        // Filter to only show effective dates matching this timeline section
                        const relevantDates = update.effectiveDates?.filter(ed => ed.date === date) || [];
                        
                        return (
                          <UpdateCard 
                            key={update.id} 
                            update={{
                              ...update,
                              effectiveDates: relevantDates
                            }} 
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {dates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300">
            No updates match your current filters. Try adjusting your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};
