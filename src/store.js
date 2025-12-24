import { create } from 'zustand';

export const useStore = create((set) => ({
  // Filter states
  selectedCategory: 'all',
  selectedProjectType: 'all',
  selectedApplicability: 'all',
  selectedDocument: '',
  selectedEffectiveDate: '',
  searchQuery: '',
  
  // View state
  currentView: 'timeline', // timeline, table, checklist, documents
  
  // Selected updates for comparison
  selectedUpdates: [],
  
  // Project profile for checklist
  projectProfile: {
    projectType: '',
    status: '',
    registrationYear: '',
    nextAction: '',
    submissionDate: ''
  },
  
  // Actions
  setCategory: (category) => set({ selectedCategory: category }),
  setProjectType: (type) => set({ selectedProjectType: type }),
  setApplicability: (applicability) => set({ selectedApplicability: applicability }),
  setDocument: (document) => set({ selectedDocument: document }),
  setEffectiveDate: (date) => set({ selectedEffectiveDate: date }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentView: (view) => set({ currentView: view }),
  
  toggleUpdateSelection: (updateId) => set((state) => {
    const isSelected = state.selectedUpdates.includes(updateId);
    return {
      selectedUpdates: isSelected
        ? state.selectedUpdates.filter(id => id !== updateId)
        : [...state.selectedUpdates, updateId].slice(-3) // Max 3 for comparison
    };
  }),
  
  clearUpdateSelection: () => set({ selectedUpdates: [] }),
  
  setProjectProfile: (profile) => set({ projectProfile: profile }),
  
  resetFilters: () => set({
    selectedCategory: 'all',
    selectedProjectType: 'all',
    selectedApplicability: 'all',
    selectedDocument: '',
    selectedEffectiveDate: '',
    searchQuery: ''
  })
}));
