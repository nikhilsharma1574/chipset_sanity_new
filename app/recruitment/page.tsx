"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  year: string;
  regNo: string; // Will map to "Reg no"
  department: string;
  specialization?: string; // Will map to "Specilisation"
  contactNo: string; // Will map to "contact"
  email: string;
  srmEmail: string; // Will map to "srm email"
  linkedinProfile: string; // Will map to "Linkedin"
  githubProfile?: string; // Now optional, will map to "Github"
  otherLinks?: string; // Will map to "other"
  domain: string;
  priorActivities: string; // Will map to "prior activities"
  resumeLink: string; // Will map to "resume link"
}

export default function Careers() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // SheetDB API URL for form submission
  const SHEETDB_URL = "https://sheetdb.io/api/v1/fx9rcfx6e42eg";

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validate the resume link format (basic check for Google Drive links)
      if (!data.resumeLink.includes("drive.google.com")) {
        setSubmitError("Please enter a valid Google Drive link for your resume");
        setIsSubmitting(false);
        return;
      }
      
      const payload = {
        data: [{
          Timestamp: new Date().toISOString(), // Add timestamp
          Name: data.name,
          Year: data.year,
          "Reg no": data.regNo, // Exact column name match
          Department: data.department,
          Specilisation: data.specialization || "", // Exact column name match
          contact: data.contactNo, // Exact column name match
          email: data.email,
          "srm email": data.srmEmail, // Exact column name match
          Linkedin: data.linkedinProfile, // Exact column name match
          Github: data.githubProfile || "", // Exact column name match, now optional
          other: data.otherLinks || "", // Exact column name match
          Domain: data.domain,
          "prior activities": data.priorActivities, // Exact column name match
          "resume link": data.resumeLink // Exact column name match
        }]
      };

      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log("Response from SheetDB:", result);

      if (result.created) {
        setSubmitted(true);
        reset();
        // Scroll to the top of the form to see the success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setSubmitError(`Error submitting your application: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#f39e2f]">Join Our Team</h1>

        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="p-6 mb-6 text-green-700 bg-green-100 rounded-lg border border-green-500 shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Application Submitted Successfully!</h3>
              <p>Thanks for applying to join ChipSet! We will review your application and contact you soon.</p>
            </div>
          </motion.div>
        )}

        {submitError && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
            ❌ {submitError}
          </motion.div>
        )}

        {/* Full Name */}
        <label className="block text-sm font-medium">Full Name *</label>
        <input type="text" {...register("name", { required: "Name is required" })} className="w-full p-3 border rounded-lg" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Year */}
        <label className="block text-sm font-medium">Year *</label>
        <select {...register("year", { required: "Year is required" })} className="w-full p-3 border rounded-lg">
          <option value="">Select year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        {errors.year && <p className="text-red-500">{errors.year.message}</p>}

        {/* Registration Number */}
        <label className="block text-sm font-medium">Registration Number *</label>
        <input type="text" {...register("regNo", { required: "Registration number is required" })} className="w-full p-3 border rounded-lg" />
        {errors.regNo && <p className="text-red-500">{errors.regNo.message}</p>}

        {/* Department */}
        <label className="block text-sm font-medium">Department *</label>
        <input type="text" {...register("department", { required: "Department is required" })} className="w-full p-3 border rounded-lg" />
        {errors.department && <p className="text-red-500">{errors.department.message}</p>}

        {/* Specialization */}
        <label className="block text-sm font-medium">Specialization (Optional)</label>
        <input type="text" {...register("specialization")} className="w-full p-3 border rounded-lg" placeholder="e.g., AI/ML, cloud computing, etc." />

        {/* Contact Number */}
        <label className="block text-sm font-medium">Contact Number *</label>
        <input type="tel" {...register("contactNo", { required: "Contact number is required" })} className="w-full p-3 border rounded-lg" />
        {errors.contactNo && <p className="text-red-500">{errors.contactNo.message}</p>}

        {/* Email */}
        <label className="block text-sm font-medium">Personal Email *</label>
        <input type="email" {...register("email", { required: "Email is required" })} className="w-full p-3 border rounded-lg" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* SRM Email */}
        <label className="block text-sm font-medium">SRM Email *</label>
        <input type="email" {...register("srmEmail", { required: "SRM email is required" })} className="w-full p-3 border rounded-lg" />
        {errors.srmEmail && <p className="text-red-500">{errors.srmEmail.message}</p>}

        {/* LinkedIn */}
        <label className="block text-sm font-medium">LinkedIn *</label>
        <input type="url" {...register("linkedinProfile", { required: "LinkedIn profile is required" })} className="w-full p-3 border rounded-lg" />
        {errors.linkedinProfile && <p className="text-red-500">{errors.linkedinProfile.message}</p>}

        {/* GitHub (Optional) */}
        <label className="block text-sm font-medium">GitHub (Optional)</label>
        <input type="url" placeholder="https://github.com/..." {...register("githubProfile")} className="w-full p-3 border rounded-lg" />
        {errors.githubProfile && <p className="text-red-500">{errors.githubProfile.message}</p>}

        {/* Domain */}
        <label className="block text-sm font-medium">Domain *</label>
        <select {...register("domain", { required: "Domain is required" })} className="w-full p-3 border rounded-lg">
          <option value="">Select your domain</option>
          <option value="technical">Technical</option>
          <option value="creatives">Creatives</option>
          <option value="pr-marketing">PR & Marketing</option>
        </select>
        {errors.domain && <p className="text-red-500">{errors.domain.message}</p>}

        {/* Prior Activities */}
        <label className="block text-sm font-medium">Prior Activities *</label>
        <textarea {...register("priorActivities", { required: "Please describe your prior activities" })} className="w-full p-3 border rounded-lg" />
        {errors.priorActivities && <p className="text-red-500">{errors.priorActivities.message}</p>}

        {/* Resume Link */}
        <label className="block text-sm font-medium">Resume Link (Google Drive) *</label>
        <input 
          type="url" 
          placeholder="https://drive.google.com/..." 
          {...register("resumeLink", { 
            required: "Resume link is required",
            pattern: {
              value: /drive\.google\.com/,
              message: "Please enter a valid Google Drive link"
            }
          })} 
          className="w-full p-3 border rounded-lg" 
        />
        {errors.resumeLink && <p className="text-red-500">{errors.resumeLink.message}</p>}
        <p className="text-xs text-gray-500 mt-1">
          Upload your resume to Google Drive, make it accessible to anyone with the link, and paste the link here.
        </p>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-4 mt-4 rounded-lg text-white font-bold ${
            isSubmitting ? "bg-gray-400" : "bg-[#f39e2f] hover:bg-orange-600"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </motion.button>
      </motion.form>
    </div>
  );
}
