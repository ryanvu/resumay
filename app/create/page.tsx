"use client";

import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ResumePreview } from './components/resume-preview';
import { PersonalInfoForm } from './components/form/personal-info';
import { ExperiencesForm } from './components/form/experience';

const resumeSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\+?[0-9]{10,14}$/, "Invalid phone number"),
    // location: z.string().optional(),
    // summary: z.string().max(500, "Summary should be 500 characters or less").optional(),
  }),
  experiences: z.array(z.object({
    company: z.string().min(2, "Company name is required"),
    position: z.string().min(2, "Position is required"),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format"),
    endDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format").or(z.literal('present')),
    description: z.array(z.string().min(1, "Atleast one description point is required").max(100, "Point should be 100 characters or less")),
  })).min(1, "At least one work experience is required"),
});

type ResumeFormValues = z.infer<typeof resumeSchema>;

export default function ResumeBuilderPage() {
  const [showPreview, setShowPreview] = useState(false);
  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      personalInfo: { name: '', email: '', phone: '' },
      experiences: [{ company: '', position: '', startDate: '', endDate: '', description: [''] }],
    },
  });


  const watchFields = form.watch();
  const memoizedWatchFields = useMemo(() => watchFields, [watchFields]);

  function onSubmit(data: ResumeFormValues) {
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 bg-muted p-4 border-muted shadow rounded">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <PersonalInfoForm />
              <ExperiencesForm />
              {/* <Button type="submit">Save Resume</Button> */}
            </form>
          </Form>
        </div>
        <div className="w-full md:w-1/2 md:block hidden">
          <ResumePreview watchFields={memoizedWatchFields} />
        </div>
      </div>
      <div className="md:hidden mt-4">
        <Button onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Hide Preview" : "Show Preview"}
        </Button>
        {/* {showPreview && <ResumePreview form={form} />} */}
      </div>
    </>
  );
}

