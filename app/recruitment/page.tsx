"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  Linkedin, 
  Github, 
  Link as LinkIcon, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Instagram,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
  Briefcase
} from "lucide-react";

interface FormData {
  name: string;
  year: string;
  regNo: string;
  department: string;
  specialization?: string;
  contactNo: string;
  email: string;
  srmEmail: string;
  linkedinProfile?: string;
  githubProfile?: string;
  otherLinks?: string;
  domain: string;
  subdomain?: string;
  priorActivities: string;
  resumeLink?: string;
  instagramFollow: boolean;
}

export default function Careers() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedDomain = watch("domain");
  const selectedYear = watch("year");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const defaultLinkedInURL = "https://linkedin.com/in/not-provided";
      const defaultResumeLink = "https://drive.google.com/not-provided";
      
      if (data.resumeLink && typeof data.resumeLink === 'string' && data.resumeLink.trim() !== "" && !data.resumeLink.includes("drive.google.com")) {
        setSubmitError("Please enter a valid Google Drive link for your resume.");
        setIsSubmitting(false);
        return;
      }
      
      if (data.linkedinProfile && typeof data.linkedinProfile === 'string' && data.linkedinProfile.trim() !== "" && !data.linkedinProfile.includes("linkedin.com")) {
        setSubmitError("Please enter a valid LinkedIn profile URL.");
        setIsSubmitting(false);
        return;
      }
      
      if (data.githubProfile && typeof data.githubProfile === 'string' && data.githubProfile.trim() !== "" && !data.githubProfile.includes("github.com")) {
        setSubmitError("Please enter a valid GitHub profile URL.");
        setIsSubmitting(false);
        return;
      }
      
      const payload = {
        name: data.name,
        year: data.year,
        regNo: data.regNo,
        department: data.department,
        specialization: data.specialization || "",
        contactNo: data.contactNo,
        email: data.email,
        srmEmail: data.srmEmail,
        linkedinProfile: (data.linkedinProfile && data.linkedinProfile.trim()) || defaultLinkedInURL,
        githubProfile: (data.githubProfile && data.githubProfile.trim()) || "N/A",
        otherLinks: (data.otherLinks && data.otherLinks.trim()) || "N/A",
        domain: data.domain,
        subdomain: data.domain === "non-technical" ? data.subdomain : "N/A",
        priorActivities: data.priorActivities,
        resumeLink: (data.resumeLink && data.resumeLink.trim()) || defaultResumeLink
      };
      
      let retries = 0;
      const maxRetries = 3;
      let response = null;
      
      while (retries < maxRetries) {
        try {
          response = await fetch("/api/recruitment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(20000)
          });
          break;
        } catch (e) {
          retries++;
          if (retries >= maxRetries) throw e;
          await new Promise(resolve => setTimeout(resolve, 1000 * retries));
        }
      }

      if (!response) {
        throw new Error("Failed to get a response from the server.");
      }
      
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (result.duplicate || response.status === 409) {
          throw new Error(result.error || "An application has already been submitted with this Registration Number or Email.");
        }
        throw new Error(result.error || result.message || "Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "Unknown error occurred";
      
      if (error instanceof TypeError && error.message.includes("fetch")) {
        errorMessage = "Network error: Please check your internet connection and try again.";
      } else if (error instanceof Error) {
        if (error.name === "AbortError") {
          errorMessage = "Request timed out. Please try again.";
        } else {
          errorMessage = error.message;
        }
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-orange-50/20 to-slate-100 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Subtle warm ambient decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-200/30 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-amber-100/50 blur-[130px] rounded-full pointer-events-none -z-0" />

      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#f39e2f] text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f39e2f] animate-pulse" />
            CHiPSET Recruitments 2026
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Join Our <span className="text-[#f39e2f]">Team</span>
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Become a part of SRMIST Ramapuram&apos;s premier technical club. Build projects, organize events, and innovate together.
          </p>
        </motion.div>

        {/* Success Screen */}
        <AnimatePresence>
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center shadow-xl mb-10"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h2>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Thank you for applying to join CHiPSET! Our team will review your application and contact you soon.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a 
                  href="https://www.instagram.com/chipsetsrmrmp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" /> Follow on Instagram
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors border border-slate-300"
                >
                  Submit Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Form Card */}
        {!submitted && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] space-y-7"
          >
            {/* Error Banner */}
            {submitError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-start gap-3 text-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">Submission Error</p>
                  <p className="mt-0.5">{submitError}</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => setSubmitError(null)}
                  className="text-xs text-red-600 hover:text-red-800 underline"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

            {/* SECTION 1: Personal & Academic Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-orange-100 text-[#f39e2f]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-800">Personal & Academic Details</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      {...register("name", { required: "Name is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Year */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      {...register("year", { required: "Year is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                    </select>
                  </div>
                  {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year.message}</p>}
                </div>

                {/* Registration Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Registration Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. RA2311003010..."
                      {...register("regNo", { required: "Registration number is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm uppercase" 
                    />
                  </div>
                  {errors.regNo && <p className="text-red-500 text-xs mt-1">{errors.regNo.message}</p>}
                </div>

                {/* Department */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. CSE, IT, ECE..."
                      {...register("department", { required: "Department is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                </div>

                {/* Specialization */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specialization <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. AI/ML, Cloud..."
                      {...register("specialization")} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel" 
                      placeholder="e.g. 9876543210"
                      {...register("contactNo", { required: "Contact number is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo.message}</p>}
                </div>

                {/* Personal Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Personal Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="e.g. name@gmail.com"
                      {...register("email", { required: "Personal email is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* SRM Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official SRM Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="e.g. ab1234@srmist.edu.in"
                      {...register("srmEmail", { required: "SRM email is required" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {errors.srmEmail && <p className="text-red-500 text-xs mt-1">{errors.srmEmail.message}</p>}
                </div>
              </div>
            </div>

            {/* SECTION 2: Domain & Profiles */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-orange-100 text-[#f39e2f]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-800">Domain & Profiles</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Domain Select */}
                <div className={selectedDomain === "non-technical" ? "sm:col-span-1" : "sm:col-span-2"}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Domain of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      {...register("domain", { required: "Please select a domain" })} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select your domain</option>
                      <option value="technical">Technical</option>
                      <option value="non-technical">Non-Technical</option>
                    </select>
                  </div>
                  {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>}
                </div>

                {/* Subdomain (Conditional) */}
                <AnimatePresence>
                  {selectedDomain === "non-technical" && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Non-Technical Subdomain <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select 
                          {...register("subdomain", { 
                            required: selectedDomain === "non-technical" ? "Subdomain is required" : false 
                          })} 
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm cursor-pointer"
                        >
                          <option value="">Select subdomain</option>
                          <option value="designing">Designing (UI/UX & Graphics)</option>
                          <option value="video-editing">Video Editing & Motion</option>
                          <option value="content-writing">Content Writing</option>
                          <option value="pr-marketing">PR & Marketing</option>
                        </select>
                      </div>
                      {errors.subdomain && <p className="text-red-500 text-xs mt-1">{errors.subdomain.message}</p>}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* LinkedIn Profile */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    LinkedIn Profile <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Linkedin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0077b5]" />
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/username" 
                      {...register("linkedinProfile")} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  <p className="text-[11px] text-amber-600 font-medium mt-1 flex items-center gap-1">
                    ✨ <span>Providing LinkedIn increases your chances of selection</span>
                  </p>
                  {errors.linkedinProfile && <p className="text-red-500 text-xs mt-1">{errors.linkedinProfile.message}</p>}
                </div>

                {/* GitHub Profile */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    GitHub Profile <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Github className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700" />
                    <input 
                      type="url" 
                      placeholder="https://github.com/username" 
                      {...register("githubProfile")} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                  {selectedDomain === "technical" && (
                    <p className="text-[11px] text-amber-600 font-medium mt-1 flex items-center gap-1">
                      ✨ <span>Providing GitHub increases your chances of selection</span>
                    </p>
                  )}
                  {errors.githubProfile && <p className="text-red-500 text-xs mt-1">{errors.githubProfile.message}</p>}
                </div>

                {/* Other Links */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Portfolio / Behance / Other Links <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="url" 
                      placeholder="https://yourportfolio.com or Behance link..." 
                      {...register("otherLinks")} 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Why Recruit You & Resume */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-orange-100 text-[#f39e2f]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-800">Motivation & Work Samples</h2>
                </div>
              </div>

              {/* Why Should We Recruit You? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why should we recruit you? <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your background, prior activities, skills, and why you want to join CHiPSET..."
                  {...register("priorActivities", { required: "Please tell us why we should recruit you" })} 
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm leading-relaxed" 
                />
                {errors.priorActivities && <p className="text-red-500 text-xs mt-1">{errors.priorActivities.message}</p>}
              </div>

              {/* Resume Link */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Resume / Work Samples Link (Google Drive) <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <ExternalLink className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="url" 
                    placeholder="https://drive.google.com/file/d/..." 
                    {...register("resumeLink", { 
                      pattern: {
                        value: /drive\.google\.com/,
                        message: "Please enter a valid Google Drive link"
                      }
                    })} 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f39e2f] focus:ring-2 focus:ring-[#f39e2f]/20 focus:outline-none transition-all text-sm" 
                  />
                </div>
                {selectedYear === "2" && (
                  <p className="text-[11px] text-amber-600 font-medium mt-1 flex items-center gap-1">
                    ✨ <span>Providing a resume increases your chances of selection significantly</span>
                  </p>
                )}
                {errors.resumeLink && <p className="text-red-500 text-xs mt-1">{errors.resumeLink.message}</p>}
                
                <div className="flex items-start gap-2 mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
                  <HelpCircle className="w-4 h-4 text-[#f39e2f] shrink-0 mt-0.5" />
                  <p>
                    If you have a resume or work samples, upload them to Google Drive with &apos;Anyone with the link can view&apos; access and paste the URL here.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4: Social Confirmation */}
            <div className="pt-2 space-y-3">
              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#f39e2f] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  All recruitment updates, announcements, and important information will be shared through our Instagram handle. Some updates may be time sensitive, so make sure you&apos;re following us.
                </p>
              </div>

              <label 
                htmlFor="instagramFollow"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="instagramFollow"
                  {...register("instagramFollow", { required: "Following our Instagram is mandatory to proceed." })}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#f39e2f] focus:ring-[#f39e2f] accent-[#f39e2f] cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  I confirm that I have followed the{" "}
                  <a 
                    href="https://www.instagram.com/chipsetsrmrmp/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#f39e2f] font-semibold underline inline-flex items-center gap-1 hover:text-orange-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    @chipsetsrmrmp
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  Instagram handle. 📲
                </span>
              </label>
              {errors.instagramFollow && <p className="text-red-500 text-xs mt-1">{errors.instagramFollow.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-base text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? "bg-slate-300 cursor-not-allowed text-slate-500" 
                    : "bg-gradient-to-r from-[#f39e2f] to-orange-500 hover:from-orange-500 hover:to-[#f39e2f] shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.005] active:scale-[0.99] cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Support Note */}
            <p className="text-center text-xs text-slate-400">
              Need assistance? Contact us at <span className="text-slate-600 font-medium">9710717142</span>
            </p>
          </motion.form>
        )}
      </div>
    </div>
  );
}
