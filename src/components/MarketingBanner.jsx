import React from 'react';

export const MarketingBanner = () => {
  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-verra-teal rounded-lg shadow-lg p-4 sm:p-6">
          <div className="text-white space-y-3">
            <p className="text-sm md:text-base">
              This online dynamic tool is powered by{' '}
              <a
                href="https://www.linkedin.com/in/robin-duchesneau/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline transition-all"
              >
                SUSTAINABLE IQ
              </a>
              .
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              This navigator tool helps project proponents, developers, verifiers, and other
              stakeholders understand which updates apply to their projects based on effective
              dates (ranging from immediate to 2030), project type, and current status. Use the
              filters to identify your compliance obligations, track implementation timelines,
              and ensure your projects meet the enhanced standards for credibility, transparency,
              and impact. It was created using Verra's "VCS VERSION 5: OVERVIEW OF VCS PROGRAM
              UPDATES AND EFFECTIVE DATES" document. This tool is a work in progress and may not
              contain all updates in the VCS Version 5 program. Sustainable IQ is not responsible
              for any errors, omissions, or decisions made based on this information—users should
              verify all requirements directly with official Verra documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
