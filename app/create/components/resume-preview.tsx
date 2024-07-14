'use client'

import React from 'react';

type ResumeFormValues = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  experiences: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  // Add other sections as needed
};



interface ResumePreviewProps {
  watchFields: ResumeFormValues;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ watchFields }) => {

  return (
    <>
      <div className="flex flex-col h-screen max-h-96 bg-white text-black border rounded shadow">

        <div className="flex flex-col items-center justify-center p-4 ">
          <h2 className="text-xl font-semibold">{watchFields?.personalInfo.name || 'NAME'}</h2>
          <section className="flex gap-2">
            <p>{watchFields?.personalInfo.email || 'EMAIL'}</p>
            <p>{watchFields?.personalInfo.phone || 'PHONE #'}</p>
          </section>
        </div>

        {/* Experiences */}
        {watchFields?.experiences.map((experience, index) => {
          return (
            <div key={index} className="flex flex-col p-4 mt-4">
              <h2 className="text-xl font-semibold">{experience.company || `Company ${ index + 1 }` }</h2>
              <div className="flex gap-2">
                <p>{experience.position || 'Position/Role' }</p>
                { experience.startDate ? (<p>{experience.startDate} - {experience.endDate}</p>) : <p className="italic">Start - End</p>}
              </div>
              <ul className="list-disc pl-5 mt-2">
                {experience?.description.map((point, pointIndex) => (
                  point && <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  );
};

