import * as z from 'zod';


const resumeSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\+?[0-9]{10,14}$/, "Invalid phone number"),
    location: z.string().optional(),
    summary: z.string().max(500, "Summary should be 500 characters or less").optional(),
  }),
  education: z.array(z.object({
    institution: z.string().min(2, "Institution name is required"),
    degree: z.string().min(2, "Degree is required"),
    fieldOfStudy: z.string().optional(),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format"),
    endDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format").optional(),
    description: z.string().max(300, "Description should be 300 characters or less").optional(),
  })).min(1, "At least one education entry is required"),
  experiences: z.array(z.object({
    company: z.string().min(2, "Company name is required"),
    position: z.string().min(2, "Position is required"),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format"),
    endDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format").or(z.literal('present')),
    description: z.string().max(500, "Description should be 500 characters or less"),
    highlights: z.array(z.string()).optional(),
  })).min(1, "At least one work experience is required"),
  skills: z.array(z.object({
    name: z.string().min(2, "Skill name is required"),
    level: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"]).optional(),
  })).optional(),
  languages: z.array(z.object({
    language: z.string().min(2, "Language name is required"),
    proficiency: z.enum(["Basic", "Conversational", "Fluent", "Native"]),
  })).optional(),
  projects: z.array(z.object({
    name: z.string().min(2, "Project name is required"),
    description: z.string().max(300, "Description should be 300 characters or less"),
    url: z.string().url("Invalid URL").optional(),
    highlights: z.array(z.string()).optional(),
  })).optional(),
  certifications: z.array(z.object({
    name: z.string().min(2, "Certification name is required"),
    issuer: z.string().min(2, "Issuer is required"),
    issueDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format"),
    expirationDate: z.string().regex(/^\d{4}-\d{2}$/, "Use YYYY-MM format").optional(),
    url: z.string().url("Invalid URL").optional(),
  })).optional(),
});
