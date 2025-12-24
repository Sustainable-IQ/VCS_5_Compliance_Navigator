import React, { useState } from 'react';
import { Eye, ArrowUpDown } from 'lucide-react';
import { UpdateCard } from '../components/UpdateCard';
import { getApplicabilityBadge, getCategoryColor, formatDate } from '../utils/helpers';

export const TableView = ({ updates }) => {
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedUpdates = [...updates].sort((a, b) => {
    let aVal, bVal;
    
    switch (sortField) {
      case 'id':
        aVal = a.id;
        bVal = b.id;
        break;
      case 'title':
        aVal = a.title;
        bVal = b.title;
        break;
      case 'category':
        aVal = a.category;
        bVal = b.category;
        break;
      case 'date':
        aVal = a.effectiveDates?.[0]?.date || '';
        bVal = b.effectiveDates?.[0]?.date || '';
        break;
      default:
        return 0;
    }
    
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  const categoryColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
    pink: 'bg-pink-100 text-pink-800'
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          Update Browser
        </h2>
        <p className="text-gray-300">
          Browse and search all VCS Version 5 updates
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center gap-2">
                    ID
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('title')}
                >
                  <div className="flex items-center gap-2">
                    Title
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('category')}
                >
                  <div className="flex items-center gap-2">
                    Category
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center gap-2">
                    Effective Date
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applies To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedUpdates.map((update) => {
                const categoryColor = getCategoryColor(update.category);
                const firstDate = update.effectiveDates?.[0];
                const badge = firstDate ? getApplicabilityBadge(firstDate.applicability?.[0] || 'all') : null;
                
                return (
                  <tr key={update.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-semibold text-verra-teal">
                      {update.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="max-w-md">
                        <div className="font-medium">{update.title}</div>
                        <div className="text-gray-500 text-xs mt-1 line-clamp-1">
                          {update.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`badge ${categoryColors[categoryColor]}`}>
                        {update.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {firstDate ? formatDate(firstDate.date) : 'N/A'}
                      {update.effectiveDates?.length > 1 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{update.effectiveDates.length - 1} more
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {badge && (
                        <span className={`badge ${badge.className} text-xs`}>
                          {badge.label}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedUpdate(update)}
                        className="text-verra-teal hover:text-teal-700 flex items-center gap-1"
                      >
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {sortedUpdates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300">
            No updates match your current filters. Try adjusting your filter criteria.
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
