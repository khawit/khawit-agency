"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiCheckCircle, FiX } from "react-icons/fi";

type ServiceType =
  | "Web Development"
  | "Conversational AI & Knowledge Systems (RAG)"
  | "Autonomous AI Agents & Automation"
  | "SaaS & Product"
  | "Enterprise AI & Business Operations"
  | "Deployment"
  | "Digital Marketing"
  | "AI Solutions"
  | "AI Agents & Automation"
  | "AI-powered Systems"
  | "Other"
  | "";

export function StartProjectForm() {
  const searchParams = useSearchParams();
  const rawService = searchParams.get("service") || "";
  const initialService: ServiceType =
    rawService === "ai-solutions"
      ? "Conversational AI & Knowledge Systems (RAG)"
      : rawService === "ai-agents-automation"
      ? "Autonomous AI Agents & Automation"
      : rawService === "ai-powered-systems"
      ? "Enterprise AI & Business Operations"
      : rawService === "web-development"
      ? "Web Development"
      : rawService === "saas-product"
      ? "SaaS & Product"
      : rawService === "deployment"
      ? "Deployment"
      : rawService === "digital-marketing"
      ? "Digital Marketing"
      : (rawService as ServiceType) || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState<ServiceType>(initialService);
  const [otherService, setOtherService] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmationType, setConfirmationType] = useState<"success" | "error" | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Sync service from URL params
  useEffect(() => {
    if (initialService) {
      setService(initialService as ServiceType);
    }
  }, [initialService]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setContactNumber("");
    setService("");
    setOtherService("");
    setDescription("");
    setBudget("");
    setTimeline("");
    setError("");
    setConfirmationType(null);
    setConfirmationMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !contactNumber || !service || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    if (service === "Other" && !otherService) {
      setError("Please describe the other service you need.");
      return;
    }

    if (description.trim().length < 10) {
      setError("Project description must be at least 10 characters long.");
      return;
    }

    if (description.length > 5000) {
      setError("Project description must be under 5000 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          contactNumber,
          service,
          otherService: service === "Other" ? otherService : undefined,
          description,
          budget,
          timeline,
          honeypot,
        }),
      });

      const data = await response.json();

      setIsSubmitting(false);

      if (response.ok && data.success) {
        setConfirmationType("success");
      } else {
        setConfirmationType("error");
        setConfirmationMessage(
          "Something went wrong while sending your inquiry. Please try again."
        );
      }
    } catch {
      setIsSubmitting(false);
      setConfirmationType("error");
      setConfirmationMessage(
        "Something went wrong while sending your inquiry. Please try again."
      );
    }
  };

  // Success / Error state
  if (confirmationType) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center min-h-[50vh]">
        {confirmationType === "success" ? (
          <div className="flex flex-col items-center">
            <FiCheckCircle className="w-20 h-20 text-[#bc9f70] mb-6" />
            <h3 className="text-3xl font-semibold tracking-tight text-[#f9f6f0] mb-3">
              Message sent successfully
            </h3>
            <p className="text-[#ece8df]/80 mb-8 max-w-md">
              We&apos;ll review your project details and get back to you with a concrete roadmap shortly.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="px-7 py-3.5 rounded-full bg-[#33373d] text-white font-semibold text-sm hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-red-950/60 border border-red-800/60 flex items-center justify-center mb-6">
              <FiX className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-3xl font-semibold tracking-tight text-[#f9f6f0] mb-3">
              Something went wrong
            </h3>
            <p className="text-[#ece8df]/80 mb-8 max-w-md">{confirmationMessage}</p>
            <button
              type="button"
              onClick={resetForm}
              className="px-7 py-3.5 rounded-full bg-[#33373d] text-white font-semibold text-sm hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div
          className="p-4 mb-6 bg-red-950/70 border border-red-800/60 text-red-200 text-sm rounded-xl"
          role="alert"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="sp-name" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Your Name <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <input
              type="text"
              id="sp-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] placeholder:text-[#878983]"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sp-email" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Email Address <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <input
              type="email"
              id="sp-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] placeholder:text-[#878983]"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sp-phone" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Contact Number <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <input
              type="tel"
              id="sp-phone"
              required
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="+92 3XX XXXXXXX"
              className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] placeholder:text-[#878983]"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sp-service" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              What can we help you with? <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <div className="relative">
              <select
                id="sp-service"
                required
                value={service}
                onChange={(e) => {
                  setService(e.target.value as ServiceType);
                  if (e.target.value !== "Other") setOtherService("");
                }}
                className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] appearance-none cursor-pointer"
                aria-required="true"
              >
                <option value="" disabled className="bg-[#1c1f24] text-[#878983]">Select a service</option>
                <option value="Web Development" className="bg-[#1c1f24] text-[#f9f6f0]">Web Development</option>
                <option value="Conversational AI & Knowledge Systems (RAG)" className="bg-[#1c1f24] text-[#f9f6f0]">Conversational AI &amp; Knowledge Systems (RAG)</option>
                <option value="Autonomous AI Agents & Automation" className="bg-[#1c1f24] text-[#f9f6f0]">Autonomous AI Agents &amp; Automation</option>
                <option value="SaaS & Product" className="bg-[#1c1f24] text-[#f9f6f0]">SaaS &amp; Product</option>
                <option value="Enterprise AI & Business Operations" className="bg-[#1c1f24] text-[#f9f6f0]">Enterprise AI &amp; Business Operations</option>
                <option value="Deployment" className="bg-[#1c1f24] text-[#f9f6f0]">Deployment</option>
                <option value="Digital Marketing" className="bg-[#1c1f24] text-[#f9f6f0]">Digital Marketing</option>
                <option value="Other" className="bg-[#1c1f24] text-[#f9f6f0]">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#bc9f70]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {service === "Other" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="sp-other-service" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Tell us what you need <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <input
              type="text"
              id="sp-other-service"
              required
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              placeholder="Describe the service or solution you're looking for..."
              className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] placeholder:text-[#878983]"
              aria-required="true"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <label htmlFor="sp-description" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Tell us about your project <span className="text-[#bc9f70]" aria-label="Required">*</span>
            </label>
            <span className="text-xs text-[#878983]">{description.length}/5000</span>
          </div>
          <textarea
            id="sp-description"
            required
            minLength={10}
            maxLength={5000}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What are you looking to build? Tell us about your idea, goals, features, or anything else that might help us understand your project."
            rows={4}
            className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] placeholder:text-[#878983] resize-y"
            aria-required="true"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="sp-budget" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              Budget <span className="text-[#878983] font-normal normal-case">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="sp-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#1c1f24] text-[#878983]">Select a budget</option>
                <option value="Not sure yet" className="bg-[#1c1f24] text-[#f9f6f0]">Not sure yet</option>
                <option value="Under $1,000" className="bg-[#1c1f24] text-[#f9f6f0]">Under $1,000</option>
                <option value="$1,000 – $5,000" className="bg-[#1c1f24] text-[#f9f6f0]">$1,000 – $5,000</option>
                <option value="$5,000 – $10,000" className="bg-[#1c1f24] text-[#f9f6f0]">$5,000 – $10,000</option>
                <option value="$10,000+" className="bg-[#1c1f24] text-[#f9f6f0]">$10,000+</option>
                <option value="Prefer to discuss" className="bg-[#1c1f24] text-[#f9f6f0]">Prefer to discuss</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#bc9f70]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="sp-timeline" className="text-xs font-semibold uppercase tracking-wider text-[#d9d5cc]">
              When are you looking to start? <span className="text-[#878983] font-normal normal-case">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="sp-timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 bg-[#262a31] border border-[#3d424b] hover:border-[#575b60] focus:outline-none focus:border-[#bc9f70] focus:ring-1 focus:ring-[#bc9f70] focus:bg-[#2d323a] transition-all rounded-xl text-sm text-[#f9f6f0] appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#1c1f24] text-[#878983]">Select a timeline</option>
                <option value="As soon as possible" className="bg-[#1c1f24] text-[#f9f6f0]">As soon as possible</option>
                <option value="Within 1 month" className="bg-[#1c1f24] text-[#f9f6f0]">Within 1 month</option>
                <option value="1–3 months" className="bg-[#1c1f24] text-[#f9f6f0]">1–3 months</option>
                <option value="3–6 months" className="bg-[#1c1f24] text-[#f9f6f0]">3–6 months</option>
                <option value="Just exploring for now" className="bg-[#1c1f24] text-[#f9f6f0]">Just exploring for now</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#bc9f70]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#ece8df]/60 text-center sm:text-left">
            We sign NDAs upon request before technical scoping.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#33373d] text-white font-semibold text-sm hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all duration-300 shadow-[0_10px_24px_-4px_rgba(51,55,61,0.25)] hover:shadow-[0_14px_28px_-4px_rgba(188,159,112,0.45)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting Scope...</span>
              </>
            ) : (
              <>
                <span>Start the Conversation</span>
                <span className="font-mono text-xs opacity-80">→</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
