// Real URLs for VCS Version 5 documents from Verra website
export const documentUrls = {
  "VCS Standard": "https://verra.org/documents/vcs-standard-v5-0/",
  "VCS Program Guide": "https://verra.org/documents/vcs-program-guide-v5-0/",
  "VCS Program Definitions": "https://verra.org/documents/vcs-program-definitions-v5-0/",
  "VCS Methodology Requirements": "https://verra.org/documents/vcs-methodology-requirements-v5-0/",
  "Registration and Issuance Process": "https://verra.org/documents/registration-and-issuance-process-v5-0/",
  "AFOLU Non-Permanence Risk Tool": "https://verra.org/documents/procedure-for-applying-the-afolu-non-permanence-risk-tool-v5-0/",
  "GCS Non-Permanence Risk Tool": "https://verra.org/documents/procedure-for-applying-the-gcs-non-permanence-risk-tool-v5-0/",
  "GCS Requirements": "https://verra.org/documents/gcs-requirements-v5-0/",
  "VCS Sectoral Scopes and Project Classification Guidance": "https://verra.org/documents/vcs-sectoral-scopes-and-project-classification-guidance-v5-0/",
  "Methodology Development and Review Process": "https://verra.org/documents/methodology-development-and-review-process-v5-1/"
};

// Helper to get URL for a document
export const getDocumentUrl = (documentName) => {
  return documentUrls[documentName] || null;
};
