import Fuse from 'fuse.js';
import { format, parseISO, isBefore, isAfter } from 'date-fns';

export const filterUpdates = (updates, filters) => {
  let filtered = [...updates];
  
  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(update => update.category === filters.category);
  }
  
  // Filter by project type
  if (filters.projectType && filters.projectType !== 'all') {
    filtered = filtered.filter(update => 
      update.projectTypes?.includes(filters.projectType) || 
      update.projectTypes?.includes('all')
    );
  }
  
  // Filter by applicability
  if (filters.applicability && filters.applicability !== 'all') {
    filtered = filtered.filter(update => 
      update.effectiveDates?.some(ed => 
        ed.applicability?.includes(filters.applicability) ||
        ed.applicability?.includes('all')
      )
    );
  }
  
  // Filter by effective date
  if (filters.effectiveDate) {
    filtered = filtered.filter(update =>
      update.effectiveDates?.some(ed => ed.date === filters.effectiveDate)
    );
  }
  
  // Filter by document
  if (filters.document) {
    filtered = filtered.filter(update =>
      update.documents?.some(doc => doc.name === filters.document)
    );
  }
  
  // Search
  if (filters.searchQuery) {
    const fuse = new Fuse(filtered, {
      keys: ['id', 'title', 'description'],
      threshold: 0.3
    });
    filtered = fuse.search(filters.searchQuery).map(result => result.item);
  }
  
  return filtered;
};

export const groupUpdatesByDate = (updates) => {
  const groups = {};
  
  updates.forEach(update => {
    update.effectiveDates?.forEach(ed => {
      const date = ed.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      // Only add if not already in this date group
      if (!groups[date].find(u => u.id === update.id)) {
        groups[date].push(update);
      }
    });
  });
  
  return groups;
};

export const formatDate = (dateString) => {
  if (dateString === 'immediate') return 'Immediate (Dec 16, 2025)';
  try {
    return format(parseISO(dateString), 'MMMM d, yyyy');
  } catch {
    return dateString;
  }
};

export const getApplicabilityBadge = (applicability) => {
  const badges = {
    new: { label: 'New Projects', className: 'badge-red' },
    existing: { label: 'Existing Projects', className: 'badge-green' },
    all: { label: 'All Projects', className: 'badge-yellow' },
    methodology: { label: 'Methodologies', className: 'badge-blue' }
  };
  
  return badges[applicability] || badges.all;
};

export const getCategoryColor = (category) => {
  const colors = {
    eligibility: 'blue',
    design: 'green',
    stakeholder: 'purple',
    safeguards: 'orange',
    reporting: 'yellow',
    procedures: 'gray',
    methodology: 'pink'
  };
  return colors[category] || 'gray';
};

export const generateChecklist = (projectProfile, allUpdates) => {
  const checklist = {
    mustDo: [],
    prepare: [],
    optional: []
  };
  
  // Simple logic based on submission date and project status
  const submissionYear = projectProfile.submissionDate ? 
    parseInt(projectProfile.submissionDate.split('-')[0]) : 2027;
  
  allUpdates.forEach(update => {
    update.effectiveDates?.forEach(effectiveDate => {
      const edYear = effectiveDate.date === 'immediate' ? 2025 : 
        parseInt(effectiveDate.date.split('-')[0]);
      
      // Check if applicable to project type
      const typeMatch = !projectProfile.projectType || 
        update.projectTypes?.includes(projectProfile.projectType) ||
        update.projectTypes?.includes('all');
      
      if (!typeMatch) return;
      
      // Check applicability
      const isNew = projectProfile.status === 'new' || projectProfile.status === 'pipeline';
      const isExisting = projectProfile.status === 'registered';
      
      const applicabilityMatch = 
        effectiveDate.applicability?.includes('all') ||
        (isNew && effectiveDate.applicability?.includes('new')) ||
        (isExisting && effectiveDate.applicability?.includes('existing'));
      
      if (!applicabilityMatch) return;
      
      // Categorize based on effective date and submission date
      if (edYear <= submissionYear) {
        checklist.mustDo.push({
          update,
          effectiveDate,
          deadline: effectiveDate.date
        });
      } else if (edYear === 2030) {
        checklist.prepare.push({
          update,
          effectiveDate,
          deadline: effectiveDate.date
        });
      } else {
        checklist.optional.push({
          update,
          effectiveDate,
          deadline: effectiveDate.date
        });
      }
    });
  });
  
  // Remove duplicates
  const uniqueById = (items) => {
    const seen = new Set();
    return items.filter(item => {
      if (seen.has(item.update.id)) return false;
      seen.add(item.update.id);
      return true;
    });
  };
  
  return {
    mustDo: uniqueById(checklist.mustDo),
    prepare: uniqueById(checklist.prepare),
    optional: uniqueById(checklist.optional)
  };
};

export const buildDocumentTree = (updates) => {
  const tree = {};
  
  updates.forEach(update => {
    update.documents?.forEach(doc => {
      if (!tree[doc.name]) {
        tree[doc.name] = {};
      }
      
      doc.sections?.forEach(section => {
        if (!tree[doc.name][section]) {
          tree[doc.name][section] = [];
        }
        
        if (!tree[doc.name][section].find(u => u.id === update.id)) {
          tree[doc.name][section].push(update);
        }
      });
    });
  });
  
  return tree;
};

export const exportToPDF = (content, filename) => {
  // Simple HTML to PDF export using window.print
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>' + filename + '</title>');
  printWindow.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;}</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
};
