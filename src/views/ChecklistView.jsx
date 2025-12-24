import React, { useState } from 'react';
import { CheckCircle2, Clock, Info, Download } from 'lucide-react';
import { UpdateCard } from '../components/UpdateCard';
import { generateChecklist, exportToPDF, formatDate } from '../utils/helpers';
import { projectTypes } from '../data';

export const ChecklistView = ({ updates }) => {
  const [profile, setProfile] = useState({
    projectType: '',
    status: '',
    registrationYear: '',
    nextAction: '',
    submissionDate: ''
  });
  
  const [checklist, setChecklist] = useState(null);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  
  const generateList = () => {
    const list = generateChecklist(profile, updates);
    setChecklist(list);
  };
  
  const handleExport = () => {
    const content = `
      <h1>VCS Version 5 Compliance Checklist</h1>
      <h2>Project Profile</h2>
      <ul>
        <li>Project Type: ${profile.projectType}</li>
        <li>Status: ${profile.status}</li>
        <li>Registration Year: ${profile.registrationYear}</li>
        <li>Next Action: ${profile.nextAction}</li>
        <li>Submission Date: ${profile.submissionDate}</li>
      </ul>
      <h2>Required Actions (${checklist.mustDo.length})</h2>
      <ul>
        ${checklist.mustDo.map(item => `<li>${item.update.id}: ${item.update.title}</li>`).join('')}
      </ul>
      <h2>Prepare for Future (${checklist.prepare.length})</h2>
      <ul>
        ${checklist.prepare.map(item => `<li>${item.update.id}: ${item.update.title}</li>`).join('')}
      </ul>
    `;
    exportToPDF(content, 'vcs-v5-compliance-checklist.pdf');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          My Compliance Checklist
        </h2>
        <p className="text-gray-300">
          Generate a personalized checklist based on your project profile
        </p>
      </div>
      
      <div className="card mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Project Profile Builder
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              value={profile.projectType}
              onChange={(e) => setProfile({ ...profile, projectType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent"
            >
              <option value="">Select project type...</option>
              {projectTypes.filter(t => t.id !== 'all').map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={profile.status}
              onChange={(e) => setProfile({ ...profile, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent"
            >
              <option value="">Select status...</option>
              <option value="pipeline">Pipeline (Under Validation)</option>
              <option value="new">New (Not Yet Registered)</option>
              <option value="registered">Registered</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Year (if applicable)
            </label>
            <select
              value={profile.registrationYear}
              onChange={(e) => setProfile({ ...profile, registrationYear: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent"
            >
              <option value="">Select year...</option>
              {Array.from({ length: 15 }, (_, i) => 2025 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Next Action
            </label>
            <select
              value={profile.nextAction}
              onChange={(e) => setProfile({ ...profile, nextAction: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent"
            >
              <option value="">Select action...</option>
              <option value="registration">Registration</option>
              <option value="verification">Verification</option>
              <option value="renewal">Crediting Period Renewal</option>
              <option value="baseline">Baseline Reassessment</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Submission Date
            </label>
            <input
              type="date"
              value={profile.submissionDate}
              onChange={(e) => setProfile({ ...profile, submissionDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verra-teal focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={generateList}
          disabled={!profile.projectType || !profile.status || !profile.submissionDate}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Checklist
        </button>
      </div>
      
      {checklist && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">
              Your Compliance Checklist
            </h3>
            <button
              onClick={handleExport}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={18} />
              Export to PDF
            </button>
          </div>
          
          {/* Must Do Section */}
          {checklist.mustDo.length > 0 && (
            <div className="card border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-red-500" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">
                  Must Do Before Submission ({checklist.mustDo.length})
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                These requirements must be completed before your submission date of{' '}
                <span className="font-semibold">{formatDate(profile.submissionDate)}</span>
              </p>
              <div className="space-y-3">
                {checklist.mustDo.map((item, idx) => (
                  <div key={idx} className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-mono text-sm font-semibold text-verra-teal mb-1">
                          {item.update.id}
                        </div>
                        <div className="font-medium text-gray-900 mb-1">
                          {item.update.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          📅 Deadline: {formatDate(item.deadline)}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          📄 {item.update.documents.map(d => d.name).join(', ')}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedUpdate(item.update)}
                        className="text-verra-teal hover:text-blue-700 text-sm whitespace-nowrap"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Prepare Section */}
          {checklist.prepare.length > 0 && (
            <div className="card border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-yellow-500" size={24} />
                <h4 className="text-lg font-semibold text-gray-900">
                  Prepare for Future ({checklist.prepare.length})
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Optional early adoption - these will be required in 2030 or later
              </p>
              <div className="space-y-3">
                {checklist.prepare.map((item, idx) => (
                  <div key={idx} className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-mono text-sm font-semibold text-verra-teal mb-1">
                          {item.update.id}
                        </div>
                        <div className="font-medium text-gray-900 mb-1">
                          {item.update.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          📅 Required by: {formatDate(item.deadline)}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedUpdate(item.update)}
                        className="text-verra-teal hover:text-blue-700 text-sm whitespace-nowrap"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Info Section */}
          {checklist.mustDo.length === 0 && checklist.prepare.length === 0 && (
            <div className="card border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <Info className="text-blue-500" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    No immediate action required
                  </h4>
                  <p className="text-sm text-gray-600">
                    Based on your project profile, no VCS Version 5 updates require immediate action before your submission date.
                  </p>
                </div>
              </div>
            </div>
          )}
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
