import React from 'react';
import { Search, X } from 'lucide-react';
import { useStore } from '../store';
import { categories, projectTypes, applicabilityTypes, documents } from '../data';

export const Filters = () => {
  const {
    selectedCategory,
    selectedProjectType,
    selectedApplicability,
    selectedDocument,
    selectedEffectiveDate,
    searchQuery,
    setCategory,
    setProjectType,
    setApplicability,
    setDocument,
    setEffectiveDate,
    setSearchQuery,
    resetFilters
  } = useStore();
  
  const hasActiveFilters = 
    selectedCategory !== 'all' ||
    selectedProjectType !== 'all' ||
    selectedApplicability !== 'all' ||
    selectedDocument !== '' ||
    selectedEffectiveDate !== '' ||
    searchQuery !== '';
  
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
            />
          </div>
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
          
          {/* Project Type Filter */}
          <select
            value={selectedProjectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
          >
            {projectTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
          
          {/* Applicability Filter */}
          <select
            value={selectedApplicability}
            onChange={(e) => setApplicability(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
          >
            {applicabilityTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Document Filter and Reset */}
        <div className="flex gap-4 mt-4">
          <select
            value={selectedDocument}
            onChange={(e) => setDocument(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
          >
            <option value="">All Documents</option>
            {documents.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>
          
          <select
            value={selectedEffectiveDate}
            onChange={(e) => setEffectiveDate(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent text-gray-900"
          >
            <option value="">All Effective Dates</option>
            <option value="immediate">Immediate (Dec 16, 2025)</option>
            <option value="2026-02-28">February 28, 2026</option>
            <option value="2026-04-15">April 15, 2026</option>
            <option value="2027-01-01">January 1, 2027</option>
            <option value="2030-01-01">January 1, 2030</option>
          </select>
          
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <X size={18} />
              Clear Filters
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};
