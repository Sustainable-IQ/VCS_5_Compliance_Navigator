export const vcsUpdates = [
  {
    id: "V5#49",
    title: "Project start date and initial crediting period start date",
    category: "eligibility",
    description: "In the VCS Program Definitions, revised definitions were added for 'project start date' and 'initial crediting period start date' (formerly 'crediting period start date'). Other definitions were revised or removed for 'jurisdictional REDD+ program,' 'program,' 'program crediting period start date,' 'program start date,' 'project,' and 'project activity.' In the VCS Standard, tables with examples of how project start date and initial crediting period start date for all project types can be determined were included. Examples and further guidance or criteria will be incorporated into methodologies over time. All projects are now required to submit a pipeline listing request within 1 year of the initial crediting period start date (VCS Standard, v5.0, section 3.8.2). Registration timeline milestones have been revised to 'initial crediting period start date' and 'initial registration request.'",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.7", "3.8.1-3.8.3"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.2.6", "3.8"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All registration requests submitted on or after",
        exceptions: "Registration requests received after Jan 1, 2027 from projects already listed as under validation on Dec 16, 2025",
        scope: "VCS Standard and VCS Program Definitions",
        applicability: ["new"]
      },
      {
        date: "2027-01-01",
        condition: "Pipeline listing requirement (section 3.8.2) for all project types",
        scope: "All projects",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "Methodology Requirements updates",
        scope: "New and revised methodologies under development for which public consultation has not yet started",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 1,
    relatedUpdates: ["V5#43", "V5#101"]
  },
  {
    id: "V5#43",
    title: "Removal of approved GHG programs and CER conversions",
    category: "eligibility",
    description: "The concept of 'approved greenhouse gas (GHG) programs' has been removed, which means gap validations are no longer permitted. Projects registered with other GHG programs may still register with the VCS Program in accordance with the VCS Program rules after the date of inactivity in the other GHG Program. Verra will also stop accepting Certified Emission Reduction (CER) conversion requests. Projects registering with the VCS Program that were previously registered with another GHG program must establish the project crediting period in accordance with VCS Program rules (i.e., the crediting period length is no longer restricted to the shorter of the VCS Program crediting period length and the other GHG program crediting period length). In the VCS Program Definitions, the definition for 'approved GHG programs' and 'VCU conversion representation' were removed. The definition for 'project description' was revised.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["5-6"] },
      { name: "VCS Standard", version: "v5.0", sections: ["3.4.1", "3.13.2", "3.21.3-3.21.7", "4.1.9", "4.1.15"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["2.3.8", "2.10", "3.5.2(1)"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.2.12"] },
      { name: "AFOLU Non-Permanence Risk Tool", version: "v5.0", sections: ["2.2.1(3)", "Table 1 Q3(h)"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All registration requests submitted on or after",
        scope: "All documents",
        applicability: ["new"]
      },
      {
        date: "2026-02-28",
        condition: "New CER conversion requests will not be accepted after",
        scope: "CER conversions only",
        applicability: ["cer"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 2
  },
  {
    id: "V5#101",
    title: "Crediting period renewal and baseline reassessment intervals",
    category: "design",
    description: "Crediting period lengths have been set to 5 years for many project types to ensure that projects update to an active methodology and reassess their baselines at more frequent intervals, and to create more consistency and alignment with the market. For projects with longer crediting periods (i.e., certain agriculture, forestry, and other land use (AFOLU) projects), baseline reassessment intervals have been shortened to 5 years or in accordance with the applied methodology for the same reasons. Procedures for conducting baseline reassessment have been revised for clarity.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.3-3.2.5", "3.8.4-3.8.11"] },
      { name: "GCS Requirements", version: "v5.0", sections: ["3.3"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Baseline reassessment for IFM, REDD (non-jurisdictional), ACoGS, CIW - all registration requests",
        scope: "New projects",
        applicability: ["new"],
        projectTypes: ["IFM", "REDD", "ACoGS", "CIW"]
      },
      {
        date: "2027-01-01",
        condition: "Baseline reassessment for IFM, REDD, ACoGS, CIW - next crediting period renewal or verification with baseline reassessment",
        scope: "Registered projects",
        applicability: ["existing"],
        projectTypes: ["IFM", "REDD", "ACoGS", "CIW"]
      },
      {
        date: "2030-01-01",
        condition: "Projects with 6 or 10-year baseline validated before Jan 1, 2027 may only use for monitoring periods within first 5 years",
        scope: "Registered projects with existing long baselines",
        applicability: ["existing"],
        projectTypes: ["IFM", "REDD", "ACoGS", "CIW"]
      },
      {
        date: "immediate",
        condition: "GCS projects that initiate listing on or after Dec 16, 2025",
        scope: "New GCS projects",
        applicability: ["new"],
        projectTypes: ["GCS"]
      },
      {
        date: "2027-01-01",
        condition: "E&I, ALM without SOC, LS projects - all registration requests",
        scope: "New projects",
        applicability: ["new"],
        projectTypes: ["E&I", "ALM", "LS"]
      }
    ],
    projectTypes: ["IFM", "REDD", "ACoGS", "CIW", "GCS", "E&I", "ALM", "LS"],
    pdfPage: 3,
    relatedUpdates: ["V5#49", "V5#87"]
  },
  {
    id: "V5#02",
    title: "Regulatory surplus",
    category: "eligibility",
    description: "Changed differentiation between regulatory surplus demonstration requirements from UNFCCC Annex 1 and non-Annex 1 countries to high-income countries and all other countries. Clarified that regulatory surplus must also be demonstrated at baseline reassessment, in addition to validation and crediting period renewal. In the VCS Program Definitions, the definition for 'regulatory surplus' was revised.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.13.1"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.5.3", "3.5.7", "3.5.9"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All registration requests, crediting period renewal requests, and verification approval requests that include a baseline reassessment",
        scope: "VCS Standard and VCS Program Definitions",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "All new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 5
  },
  {
    id: "V5#78",
    title: "Grouped project requirements",
    category: "design",
    description: "New rules for grouped projects require that: capacity limits apply at the project level, not the instance level; instances are added in batches via a Batch Inclusion Form (to be developed); instances added in a batch have been implemented in the monitoring period during which they are added; grouped project eligibility areas align with the physical boundary of a jurisdiction and do not span more than one country. Other updates were made to streamline the clarity and layout of section 3.5 'Project Design' of the VCS Standard. In the VCS Program Definitions, definitions were added or revised for 'project activity instance (instance),' 'grouped project,' 'grouped project eligibility area,' 'initial project activity instance,' and 'jurisdiction.'",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.9-3.2.10", "3.5", "3.9.3"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Capacity limits apply at project-level",
        scope: "All registration requests",
        applicability: ["new"]
      },
      {
        date: "2027-01-01",
        condition: "Grouped project eligibility areas align with jurisdictional boundaries",
        scope: "All registration requests",
        applicability: ["new"]
      },
      {
        date: "2027-01-01",
        condition: "Instances added in batches via Batch Inclusion Form",
        scope: "All project requests",
        applicability: ["all"]
      }
    ],
    projectTypes: ["grouped"],
    pdfPage: 5
  },
  {
    id: "V5#14",
    title: "Right to operate and right to reductions and removals",
    category: "stakeholder",
    description: "Clarified and enhanced requirements for project proponents to hold the right to operate and the right to reductions and removals, including requirements for the analysis needed to substantiate these rights. Added new requirements for project proponents to conduct a land or resource rights analysis where such rights are affected by the project. The analysis will: identify and analyze claims to land or resource rights, and conclude whether additional measures are necessary to establish the right to operate and right to reductions and removals (e.g., obtaining free, prior, and informed consent (FPIC) from customary rights holders and Indigenous Peoples (IPs)). In the VCS Program Definitions, definitions have been added or revised for 'right to operate' (formerly 'project ownership' and 'program ownership'), 'right to reductions and removals' (formerly 'proof of right'), 'land or resource rights' (formerly 'property rights'), 'competing claims to land or resource rights (competing claims),' 'overlapping claims to land or resource rights (overlapping claims,)' 'project proponent,' 'violent conflict,' and 'customary rights.' Definition was removed for 'customary rights holder.' This terminology has been incorporated throughout all other program documents.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["2.6.1"] },
      { name: "VCS Standard", version: "v5.0", sections: ["3.6"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["Appendix 1"] },
      { name: "GCS Requirements", version: "v5.0", sections: ["2.1.1-2.1.2", "2.1.5-2.1.6"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.2.3-4.2.5", "4.2.11"] },
      { name: "AFOLU Non-Permanence Risk Tool", version: "v5.0", sections: ["2.2.4(2)", "2.3.1", "Table 6"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Registration requests from projects with project start date on or after",
        scope: "All documents",
        applicability: ["new"]
      },
      {
        date: "2030-01-01",
        condition: "Next crediting period renewal or verification with baseline reassessment",
        scope: "Existing projects",
        applicability: ["existing"],
        details: "Must demonstrate right to operate and right to reductions/removals (sections 3.6.1-3.6.2) and conduct land/resource rights analysis where applicable (section 3.6.7)"
      }
    ],
    projectTypes: ["all"],
    pdfPage: 6,
    relatedUpdates: ["V5#16", "V5#58"]
  },
  {
    id: "V5#16",
    title: "Stakeholder engagement requirements",
    category: "stakeholder",
    description: "Clarified that meaningful stakeholder engagement must occur before the project start date. Introduced requirements to develop and implement a stakeholder engagement plan that is tailored to stakeholders' needs and required levels of engagement (e.g., FPIC from customary rights holders and IPs, enabling influence from directly affected stakeholders, collaborating with key enabling stakeholders). Enhanced FPIC requirements with revised definitions for customary rights, IPs, local communities (LCs), and FPIC, including to reach a written project implementation agreement, that includes terms of the benefit sharing mechanism, where relevant. Strengthened grievance redress mechanism requirements, including explicit requirements to make the mechanism available to stakeholders at the earliest stages of project development. In the VCS Program Definitions, a definition was added for 'grievance redress mechanism.'",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.17.1-3.17.11", "3.17.17-3.17.23"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Registration requests from projects with project start date on or after",
        scope: "All documents",
        applicability: ["new"]
      },
      {
        date: "2030-01-01",
        condition: "Next crediting period renewal or verification with baseline reassessment",
        scope: "Existing projects",
        applicability: ["existing"],
        details: "Must prepare stakeholder engagement plan (exempt from 'before project start date' clause), stakeholder input tracker, ensure ongoing consent where applicable (exempt from project implementation agreement), and update grievance redress mechanism"
      }
    ],
    projectTypes: ["all"],
    pdfPage: 7,
    relatedUpdates: ["V5#14", "V5#58", "V5#17"]
  },
  {
    id: "V5#58",
    title: "Financial transparency for benefit sharing",
    category: "stakeholder",
    description: "Expanded requirement for project proponents to design a benefit-sharing mechanism jointly with rights holders where land or resource rights are impacted and customary rights holders or IPs are identified in the project area. New requirement for project proponents to provide benefit-sharing mechanism participants with financial information on the project's revenues and costs. New requirements that enable in-kind benefits to be included in the mechanism and clarify what does not constitute a benefit. New requirement to co-develop a plan with mechanism participants for the continuing function and utility of in-kind benefits related to long-term infrastructure not necessary to implement project activities.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.17.12-3.17.16"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Registration requests from projects with project start date on or after",
        scope: "All documents",
        applicability: ["new"]
      },
      {
        date: "2030-01-01",
        condition: "Next crediting period renewal or verification with baseline reassessment",
        scope: "Existing projects",
        applicability: ["existing"],
        details: "Where conditions in section 3.17.12 apply, must design and implement benefit-sharing mechanism in accordance with sections 3.17.13-3.17.16"
      }
    ],
    projectTypes: ["all"],
    pdfPage: 7,
    relatedUpdates: ["V5#14", "V5#16"]
  },
  {
    id: "V5#17",
    title: "Safeguards requirements",
    category: "safeguards",
    description: "Clarified that project proponents must assess risks and apply adaptive management to enhance protections to stakeholders and the environment, as follows: conduct an environmental, social, and governance risk assessment to evaluate the potential negative impacts of the project; design commensurate mitigation measures that address the safeguards requirements and any other risks identified in the assessment; implement the mitigation measures; monitor project risks and the effectiveness of mitigation measures, throughout the project lifetime and apply adaptive management to ensure mitigation measures remain effective. Enhanced governance requirements (e.g., anti-corruption, anti-money laundering, illegal activities, emergency preparedness and response). Enhanced social safeguard requirements, including for gender equality, and armed personnel. In the VCS Program Definitions, definitions were added or revised for 'commercially sensitive information' and 'program sensitive information' (formerly 'sensitive information,') 'free, prior and informed consent (FPIC),' 'Indigenous Peoples (LCs),' 'local communities,' 'marginalized people,' 'project grievance,' 'project worker,' 'safeguard,' 'stakeholder,' 'stakeholder engagement,' 'stakeholder group,' 'stakeholder private and confidential information,' and 'vulnerable people.'",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.1.6", "3.18"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Registration requests from projects with project start date on or after",
        scope: "All documents",
        applicability: ["new"]
      },
      {
        date: "2030-01-01",
        condition: "Next crediting period renewal or verification with baseline reassessment",
        scope: "Existing projects",
        applicability: ["existing"],
        details: "Must prepare risk assessment including mitigation measures addressing safeguards requirements (sections 3.19.4-3.19.7, 3.19.12-3.19.38), exempt from 'before project start date' clause"
      }
    ],
    projectTypes: ["all"],
    pdfPage: 8,
    relatedUpdates: ["V5#23"]
  },
  {
    id: "V5#23",
    title: "Ecosystem conversion safeguards",
    category: "safeguards",
    description: "Clarified that projects must not further degrade or convert an ecosystem to a type T7 ecosystem ('intensive land-use biome,' IUCN GET). Ecosystem conversion is prohibited, except for ARR, ALM, or WRC projects where either of the following conditions are met: The ecosystem exhibits high ecosystem degradation for at least 10 years prior to the project start date; High ecosystem degradation has occurred within 10 years prior to the project start date, and: the disturbances are unrelated to the project, and ecosystem degradation was not carried out by the project proponent. The project proponent provides specific evidence to demonstrate high ecosystem degradation through these criteria: significant historical, present, or imminent drivers of degradation; and that the ecosystem has lost its ability to sustain its biotic or abiotic characteristics compared to a high integrity ecosystem. Proponents of ARR and WRC projects that restore ecosystems must demonstrate that the project activity is improving the ecosystem integrity toward ecologically suitable and appropriate reference conditions justified for the project or an adapted state based on scientific evidence. In the VCS Program Definitions, definitions were added for 'biodiversity,' 'ecosystem degradation,' 'ecosystem integrity,' 'ecosystem restoration,' and 'forest degradation' (formerly 'degradation'). Definitions were revised or removed for 'degraded ecosystem,' 'ecosystem,' 'ecosystem conversion,' 'forest,' 'grassland,' and 'native ecosystem.'",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.1", "3.18.8-3.18.11"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Registration requests from projects with project start date on or after",
        scope: "All documents",
        applicability: ["new"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 9,
    relatedUpdates: ["V5#17"]
  },
  {
    id: "V5#09",
    title: "De minimis requirements",
    category: "reporting",
    description: "De minimis thresholds now apply to all project types. Methodologies will specify different de minimis thresholds (capped at 5%), differentiated by project scale, and establish procedures for determining whether emissions qualify as de minimis.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.14.6"] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.3.5-3.3.8", "3.3.11"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All registration requests, crediting period renewal requests, and verification approval requests that include baseline reassessment",
        scope: "VCS Standard",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "All new and revised methodologies under development for which public consultation has not yet started",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 10
  },
  {
    id: "V5#18",
    title: "Sustainable Development Goal (SDG) contributions reporting",
    category: "reporting",
    description: "Minor update to incorporate existing reporting requirements for a project's SDG contributions from the monitoring report templates into the VCS Standard.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.16"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All projects",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 10
  },
  {
    id: "V5#89",
    title: "Digital project submissions",
    category: "procedures",
    description: "Project documents must now be submitted digitally via the Verra Project Hub where digital versions of methodologies are available. Other forms such as loss event notifications and buffer credit release requests must also be submitted via the Verra Project Hub.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.4.1-3.4.2", "4.1.18-4.1.20"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["1", "2.1.5", "3.1.1-3.1.6", "3.1.10", "3.1.18-3.1.19", "4.2.3-4.2.5", "4.2.9", "5.2.1"] },
      { name: "GCS Non-Permanence Risk Tool", version: "v5.0", sections: ["2.1.1"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents except GCS",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "Projects that initiate pipeline listing on or after Dec 16, 2025",
        scope: "GCS Requirements and GCS Non-Permanence Risk Tool",
        applicability: ["new"],
        projectTypes: ["GCS"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 10
  },
  {
    id: "V5#44",
    title: "VCS sectoral scopes and VCS project classification system",
    category: "procedures",
    description: "Sectoral scope 14 has been split into '14. Forestry and other land use' and '15. Agriculture'. New scopes added for 'Other engineered removals' and 'Ocean and marine resources'. New VCS project classification system defines project categories and project activity types for each sectoral scope.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["2.3", "2.4"] },
      { name: "VCS Standard", version: "v5.0", sections: ["3.2", "Appendix 1"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["2.7.1", "Appendix 1"] },
      { name: "VCS Sectoral Scopes and Project Classification Guidance", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "All new and revised methodologies under development will be assigned to sectoral scopes aligned with VCS Version 5",
        scope: "Methodologies",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 11
  },
  {
    id: "V5#21",
    title: "VCS Program principles and VCU attributes",
    category: "procedures",
    description: "The VCS Program principles have been revised in the VCS Standard and new VCU attributes defined in the VCS Program Guide. New requirements and guidance introduced to clarify how project proponents and VVBs should apply the principles to projects.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["3"] },
      { name: "VCS Standard", version: "v5.0", sections: ["2.2"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 12
  },
  {
    id: "V5#57",
    title: "Separating reporting by country and methodology",
    category: "reporting",
    description: "Project proponents are now required to report reductions and removals with a breakdown of those generated in each country and under each methodology.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.14.2"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All projects",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 12
  },
  {
    id: "V5#79",
    title: "Project location reporting",
    category: "reporting",
    description: "Updated project location requirements clarify expectations for reporting project geographic information and require that updated geolocation file be submitted at both validation and verification. A forthcoming Geolocation File Preparation Tool will specify the required file type format for different project types.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.10.1-3.10.4"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["3.1.7(2)", "4.2.3-4.2.5", "4.4.3"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 12
  },
  {
    id: "V5#115",
    title: "Minor Standard organization improvements",
    category: "procedures",
    description: "Moved two requirements related to implementing partners and ongoing implementation previously under 'AFOLU-specific matters' to 'general requirements' to clarify they are applicable to all project types. The organization of section 3.4 'Project Documentation' was also improved.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.1.9-3.1.10", "3.4"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All projects",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 12
  },
  {
    id: "V5#105",
    title: "Verification deadlines",
    category: "procedures",
    description: "All project proponents are now required to submit a verification approval request within five years of their project's last approved verification approval request. Otherwise, projects will be marked as late to verify on the Verra Registry.",
    documents: [
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.1.2-4.1.3"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All projects",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 13
  },
  {
    id: "V5#87",
    title: "Long-term average",
    category: "procedures",
    description: "The long-term average sections in the VCS Standard and VCS Methodology Requirements have been removed. Projects will be required to use the forthcoming VCS tool 'Calculating the Long-term Average of Forest Carbon Stocks'. The definition for 'harvesting activity' has been removed from the VCS Program Definitions and will be defined in the tool.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.28"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.6.13"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.7.1-4.7.2"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["forestry"],
    pdfPage: 13
  },
  {
    id: "V5#108",
    title: "Buffer pool procedures",
    category: "procedures",
    description: "Verra may use the Long-Term-Monitoring System to detect reversals after the end of a project's longevity period or project crediting period, whichever is longer. Updates clarify handling of buffer credits of projects that are late to verify or have withdrawn from the VCS Program.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.27"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.2.3-4.2.5", "4.7.5(4)", "5.1", "5.2.1", "5.2.5", "5.3.5-5.3.8", "5.3.10"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["AFOLU"],
    pdfPage: 13
  },
  {
    id: "V5#107",
    title: "Updated procedures for project withdrawal",
    category: "procedures",
    description: "Revised conditions under which projects are not eligible to withdraw from the VCS Program (e.g., projects under quality control review). Clarified that Verra cancels approved but not issued VCUs where projects withdraw from the VCS Program.",
    documents: [
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.7.5(3)", "4.7.5(5)", "7.1.4", "7.2.1(2)"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "Cancellation of approved but not issued VCUs where projects withdraw",
        scope: "Registration and Issuance Process",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "All other updates",
        scope: "Registration and Issuance Process",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 14
  },
  {
    id: "V5#06",
    title: "Loss event definitions and procedures",
    category: "procedures",
    description: "In the VCS Standard and Registration and Issuance Process, requirements were revised pertaining to loss event reporting procedures and expectations. Definitions for 'loss event' revised and new definition added for 'net GHG emission reductions and carbon dioxide removals'.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["2.4"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["5.3.1-5.3.3"] }
    ],
    effectiveDates: [
      {
        date: "2027-01-01",
        condition: "All project requests",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 14
  },
  {
    id: "V5#99",
    title: "Effective dates guidance",
    category: "procedures",
    description: "An overview of guiding criteria that Verra uses to set effective dates and timelines of program updates is provided in the VCS Program Guide to increase transparency and clarity for stakeholders.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["1.1"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "VCS Program Guide",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 14
  },
  {
    id: "V5#98",
    title: "Methodology transition periods",
    category: "procedures",
    description: "Reframed requirements to remove references to 'methodology grace periods' and instead clarify where projects must apply active methodologies. The inactivation date of a methodology is now 12 months after the release of a new version.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.1.1-3.1.5"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["3"] },
      { name: "Methodology Development and Review Process", version: "v5.1", sections: ["2.4.2-2.4.5"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 14
  },
  {
    id: "V5#111b",
    title: "Verra-led methodology development",
    category: "procedures",
    description: "Changes made throughout documents to reflect the Verra-led methodology development and review process. Definition for 'methodology developer' removed and definitions for 'module' and 'tool' revised.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["2.6.2", "2.6.5", "5"] },
      { name: "VCS Standard", version: "v5.0", sections: ["4.1.8"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 15
  },
  {
    id: "V5#109",
    title: "Use of C&Cs in methodologies",
    category: "procedures",
    description: "Added a minor note to the Methodology Development and Review Process to explain how correction and clarification documents are used for methodologies.",
    documents: [
      { name: "Methodology Development and Review Process", version: "v5.1", sections: ["2.5.2"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "Methodology Development and Review Process",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 15
  },
  {
    id: "V5#75",
    title: "Quality control review procedures",
    category: "procedures",
    description: "Section 6 of the Registration and Issuance Process has been revised to include new procedures for quality control reviews of projects. The new section includes triggers for identification of potential non-conformances, the process for opening a review, response deadlines, review outcomes, and methods for replacement of excess VCUs.",
    documents: [
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["6"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "Registration and Issuance Process",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 15
  },
  {
    id: "V5#81",
    title: "Procedure for returning project requests",
    category: "procedures",
    description: "'Project request denial' section renamed to 'Process for returned project requests'. Details what happens when Verra does not approve a project request, returns the request, and closes the review. Project proponents may submit new requests in accordance with VCS Program rules.",
    documents: [
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["4.3"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "Registration and Issuance Process",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 15
  },
  {
    id: "V5#104",
    title: "Accession, release, and transfer of project proponents",
    category: "procedures",
    description: "Procedures added for situations where: a project only has one proponent who wishes to be released and a new entity wishes to accede; remaining proponents wish to remove a disputed or nonresponsive proponent; a proponent of an active project no longer exists and a new entity wishes to accede.",
    documents: [
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["7.2"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 16
  },
  {
    id: "V5#80",
    title: "Inactivation and late-to-verify procedures",
    category: "procedures",
    description: "Updates provide clarity on: how to request reactivation of inactive projects; reasons why projects are inactivated; why Verra rejects projects or puts projects on hold; procedures for late-to-verify projects.",
    documents: [
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["3.1.7-3.1.8", "3.1.11-3.1.21", "4.7.1-4.7.4"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Most updates effective immediately",
        scope: "Registration and Issuance Process",
        applicability: ["all"]
      },
      {
        date: "2026-04-15",
        condition: "Verra will start inactivating pipeline projects that do not respond to findings within 90 days (section 3.1.13)",
        scope: "Pipeline projects",
        applicability: ["new"]
      },
      {
        date: "2027-01-01",
        condition: "Verra will start rejecting inactive pipeline projects if reactivation not requested within 12 months (section 3.1.21(1))",
        scope: "Pipeline projects",
        applicability: ["new"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 16
  },
  {
    id: "V5#110",
    title: "GCS buffer pool procedures",
    category: "procedures",
    description: "Procedures for buffer withholding and buffer releases for GCS projects have been incorporated into the Registration and Issuance Process. References to the GCS buffer pool incorporated in other program documents.",
    documents: [
      { name: "VCS Program Guide", version: "v5.0", sections: ["4"] },
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["5"] },
      { name: "GCS Non-Permanence Risk Tool", version: "v5.0", sections: ["1.1.1-1.1.2"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["GCS"],
    pdfPage: 17
  },
  {
    id: "V5#08",
    title: "AFOLU Non-Permanence Risk Tool and GCS Non-Permanence Risk Tool",
    category: "procedures",
    description: "Minor updates to reframe documents as procedural documents that provide guidance for using the digital versions of the NPRTs on the Verra Project Hub.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.2.8", "3.2.11-3.2.12", "3.2.25"] },
      { name: "AFOLU Non-Permanence Risk Tool", version: "v5.0", sections: ["1", "2.1.2"] },
      { name: "GCS Non-Permanence Risk Tool", version: "v5.0", sections: ["1"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["AFOLU", "GCS"],
    pdfPage: 17
  },
  {
    id: "V5#102",
    title: "Durability terminology",
    category: "procedures",
    description: "New definition added for 'durability' to introduce the concept in the context of requirements to manage non-permanence risk.",
    documents: [
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "VCS Program Definitions",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 17
  },
  {
    id: "V5#76",
    title: "Cross references to new procedural documents",
    category: "procedures",
    description: "Cross-references incorporated for two recently released procedural documents: the Exemption Request Procedure and the Procedure to Change Methodology via a Project Description Deviation.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["3.20.2(3)"] },
      { name: "Registration and Issuance Process", version: "v5.0", sections: ["7.6"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "All documents",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 17
  },
  {
    id: "V5#85",
    title: "Vintage periods",
    category: "procedures",
    description: "The definitions for 'vintage' and 'vintage period' were revised.",
    documents: [
      { name: "VCS Program Definitions", version: "v5.0", sections: [] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately",
        scope: "VCS Program Definitions",
        applicability: ["all"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 17
  },
  {
    id: "V5#46",
    title: "Default eligibility for project activities",
    category: "methodology",
    description: "Revised Table 1 in the VCS Standard to reframe default exclusions from VCS Program scope as default eligibility for certain project activities. Certain methodologies may specify applicability conditions for project activities based on geography that take precedence over the default geographic eligibility in Table 1.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: ["2.1.1", "Table 1"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Updates to VCS Standard effective immediately",
        scope: "VCS Standard",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development",
        scope: "Methodologies",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 18
  },
  {
    id: "V5#24",
    title: "Biomass feedstocks",
    category: "methodology",
    description: "New requirements introduced for methodologies that involve use of biomass feedstocks to generate reductions and removals. Definitions added for 'biomass', 'biomass feedstock', 'biomass from waste', 'biomass origin', and 'renewable biomass'.",
    documents: [
      { name: "VCS Program Definitions", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["2.9.1"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Updates to VCS Program Definitions",
        scope: "VCS Program Definitions",
        applicability: ["all"]
      },
      {
        date: "immediate",
        condition: "Updates to VCS Methodology Requirements for all new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["biomass"],
    pdfPage: 18
  },
  {
    id: "V5#116",
    title: "Additionality activity methods",
    category: "methodology",
    description: "Minor revisions made to the activity methods for the additionality demonstration section, including removal of barrier analysis for activity penetration.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.5.10(1)-(3)"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 18
  },
  {
    id: "V5#86",
    title: "Equivalent soil mass (ESM) requirements",
    category: "methodology",
    description: "Methodologies must now specify requirements for periodic soil sampling and soil organic carbon measurements to enable ESM-based accounting.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.6.9"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["ALM"],
    pdfPage: 18
  },
  {
    id: "V5#31",
    title: "Soil organic carbon (SOC) baseline setting",
    category: "methodology",
    description: "Minor updates to requirements for quantifying baseline soil organic carbon stocks.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.4.13", "3.6.5", "3.6.7"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["ALM"],
    pdfPage: 19
  },
  {
    id: "V5#50",
    title: "Uncertainty requirements",
    category: "methodology",
    description: "Added clarification of relevant uncertainty in the context of the VCS Program (overestimation risk) and expanded examples. Introduced further clarifications for methodologies applicable to natural carbon removal projects and how to account for uncertainty where there are slow increases in sequestered carbon over longer periods.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["2.4"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 19
  },
  {
    id: "V5#95",
    title: "Leakage emissions from equipment",
    category: "methodology",
    description: "Added procedures for quantifying leakage emissions from project activities that replace or discontinue the use of equipment used in the baseline scenario.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.7.2"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development for which public consultation has not yet started",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["all"],
    pdfPage: 19
  },
  {
    id: "V5#32",
    title: "De minimis GHG sources from N2O emissions",
    category: "methodology",
    description: "Minor updates to GHG sources that may be considered de minimis for N2O emissions in ARR, IFM, and REDD projects.",
    documents: [
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["3.3.11(1)"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Effective immediately for all new and revised methodologies under development for which public consultation has not yet started",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["ARR", "IFM", "REDD"],
    pdfPage: 19
  },
  {
    id: "V5#42",
    title: "Ozone-depleting substances (ODS)",
    category: "methodology",
    description: "ODS requirements in the VCS Standard and VCS Methodology Requirements have been removed and moved into VCS methodology VM0016 Destruction of Ozone-Depleting Substances and Hydrofluorocarbons, v2.0.",
    documents: [
      { name: "VCS Standard", version: "v5.0", sections: [] },
      { name: "VCS Methodology Requirements", version: "v5.0", sections: ["2.8", "3.4.30", "3.7.24", "3.10.8"] }
    ],
    effectiveDates: [
      {
        date: "immediate",
        condition: "Updates to VCS Standard: Effective immediately for projects applying VM0016 v2.0 (does not apply to projects using previous versions)",
        scope: "VCS Standard",
        applicability: ["ODS"]
      },
      {
        date: "immediate",
        condition: "Updates to VCS Methodology Requirements: Effective immediately",
        scope: "VCS Methodology Requirements",
        applicability: ["methodology"]
      }
    ],
    projectTypes: ["ODS"],
    pdfPage: 19
  }
];

export const projectTypes = [
  { id: "all", label: "All Project Types" },
  { id: "IFM", label: "Improved Forest Management" },
  { id: "REDD", label: "REDD" },
  { id: "ARR", label: "Afforestation, Reforestation and Revegetation" },
  { id: "ACoGS", label: "Avoided Conversion of Grasslands and Shrublands" },
  { id: "CIW", label: "Conservation of Intact Wetlands" },
  { id: "WRC", label: "Wetland Restoration and Conservation" },
  { id: "RWE", label: "Restoring Wetland Ecosystems" },
  { id: "ALM", label: "Agricultural Land Management" },
  { id: "LS", label: "Livestock Systems" },
  { id: "E&I", label: "Energy & Industry" },
  { id: "GCS", label: "Geological Carbon Storage" },
  { id: "grouped", label: "Grouped Projects" },
  { id: "forestry", label: "Forestry Projects" },
  { id: "AFOLU", label: "AFOLU Projects" },
  { id: "biomass", label: "Biomass Projects" },
  { id: "ODS", label: "ODS Destruction Projects" }
];

export const categories = [
  { id: "all", label: "All Categories" },
  { id: "eligibility", label: "Project Eligibility" },
  { id: "design", label: "Project Design" },
  { id: "stakeholder", label: "Stakeholder Engagement" },
  { id: "safeguards", label: "Safeguards" },
  { id: "reporting", label: "Reporting" },
  { id: "procedures", label: "Procedures" },
  { id: "methodology", label: "Methodology Requirements" }
];

export const applicabilityTypes = [
  { id: "all", label: "All Projects" },
  { id: "new", label: "New Projects Only" },
  { id: "existing", label: "Existing Projects" },
  { id: "methodology", label: "Methodologies" }
];

export const documents = [
  "VCS Standard",
  "VCS Program Guide",
  "VCS Program Definitions",
  "VCS Methodology Requirements",
  "Registration and Issuance Process",
  "GCS Requirements",
  "AFOLU Non-Permanence Risk Tool",
  "GCS Non-Permanence Risk Tool",
  "Methodology Development and Review Process",
  "VCS Sectoral Scopes and Project Classification Guidance"
];
