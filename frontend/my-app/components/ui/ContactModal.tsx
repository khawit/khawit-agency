"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

type ServiceType = 
  | "Web Development"
  | "AI Solutions"
  | "AI Agents & Automation"
  | "SaaS & Product"
  | "AI-powered Systems"
  | "Deployment"
  | "Digital Marketing"
  | "Other"
  | "";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [service, setService] = useState<ServiceType>("");
  const [otherService, setOtherService] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [formOpen, setFormOpen] = useState(true);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationType, setConfirmationType] = useState<"success" | "error" | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset flow state on open
      setFormOpen(true);
      setConfirmationOpen(false);
      setConfirmationType(null);
      setConfirmationMessage("");
      // Reset form fields
      setName(""); setEmail(""); setContactNumber(""); setService("");
      setOtherService(""); setDescription(""); setBudget(""); setTimeline("");
      setError("");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Auto-close success state after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (confirmationOpen && confirmationType === "success") {
      timer = setTimeout(() => {
        onClose();
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [confirmationOpen, confirmationType, onClose]);

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
      // Use absolute URL to point to backend server
      const response = await fetch('/api/contact', {
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
          honeypot
        }),
      });

      const data = await response.json();

      setIsSubmitting(false);
      setFormOpen(false);
      setConfirmationOpen(true);

      if (response.ok && data.success) {
        setConfirmationType("success");
      } else {
        setConfirmationType("error");
        setConfirmationMessage("Something went wrong while sending your inquiry. Please try again.");
      }
    } catch (err) {
      setIsSubmitting(false);
      setFormOpen(false);
      setConfirmationOpen(true);
      setConfirmationType("error");
      setConfirmationMessage("Something went wrong while sending your inquiry. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-[#33373d]/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
        data-lenis-prevent="true"
      />
      
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#f9f6f0] border border-[#d9d5cc] shadow-2xl rounded-sm overscroll-contain"
        style={{ color: "var(--ink)" }}
        data-lenis-prevent="true"
      >
        {confirmationOpen ? (
          <div 
            className={`flex flex-col items-center justify-center p-12 text-center min-h-[40vh] animate-in fade-in zoom-in duration-500 ${confirmationType === "success" ? "cursor-pointer" : ""}`}
            onClick={confirmationType === "success" ? onClose : undefined}
            role={confirmationType === "success" ? "button" : "status"}
            tabIndex={confirmationType === "success" ? 0 : -1}
            aria-label={confirmationType === "success" ? "Close success message" : "Error message"}
          >
            {confirmationType === "success" ? (
              <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <FiCheckCircle className="w-24 h-24 text-[#5f8580] mb-6" />
                <h3 className="text-3xl font-semibold tracking-tight text-[#33373d]">Email sent successfully</h3>
              </div>
            ) : (
              <div className="flex flex-col items-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mb-6">
                  <FiX className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-3xl font-semibold tracking-tight text-[#33373d]">Email not sent</h3>
                <p className="mt-4 text-[#565b61]">{confirmationMessage}</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 button button-dark"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ) : formOpen ? (
          <>
            <div className="flex justify-between items-center p-6 border-b border-[#d9d5cc] sticky top-0 bg-[#f9f6f0] z-10">
              <h2 id="modal-title" className="text-xl font-semibold tracking-tight">Start a Project</h2>
              <button 
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[#565b61] hover:text-[#33373d] transition-colors focus-visible:outline-2 focus-visible:outline-[#937a4e]"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="animate-in fade-in duration-300">
                <p className="text-[#565b61] mb-8 text-sm">Tell us a little about what you're building. We'll get back to you with the next steps.</p>
                
                {error && (
                  <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-800 text-sm rounded-sm" role="alert">
                    {error}
                  </div>
                )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input 
                  type="text" 
                  name="honeypot" 
                  style={{ display: "none" }} 
                  tabIndex={-1} 
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#33373d]">Your Name <span className="text-red-500" aria-label="Required">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name" 
                      className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#33373d]">Email Address <span className="text-red-500" aria-label="Required">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com" 
                      className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactNumber" className="text-sm font-medium text-[#33373d]">Contact Number <span className="text-red-500" aria-label="Required">*</span></label>
                    <input 
                      type="tel" 
                      id="contactNumber" 
                      required 
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="+92 3XX XXXXXXX" 
                      className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-[#33373d]">What can we help you with? <span className="text-red-500" aria-label="Required">*</span></label>
                    <div className="relative">
                      <select 
                        id="service" 
                        required 
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value as ServiceType);
                          if (e.target.value !== "Other") setOtherService("");
                        }}
                        className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="AI Agents & Automation">AI Agents & Automation</option>
                        <option value="SaaS & Product">SaaS & Product</option>
                        <option value="AI-powered Systems">AI-powered Systems</option>
                        <option value="Deployment">Deployment</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#565b61]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {service === "Other" && (
                  <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label htmlFor="otherService" className="text-sm font-medium text-[#33373d]">Tell us what you need <span className="text-red-500" aria-label="Required">*</span></label>
                    <input 
                      type="text" 
                      id="otherService" 
                      required 
                      value={otherService}
                      onChange={(e) => setOtherService(e.target.value)}
                      placeholder="Describe the service or solution you're looking for..." 
                      className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="description" className="text-sm font-medium text-[#33373d]">Tell us about your project <span className="text-red-500" aria-label="Required">*</span></label>
                    <span className="text-xs text-[#878983]">{description.length}/5000</span>
                  </div>
                  <textarea 
                    id="description" 
                    required 
                    minLength={10}
                    maxLength={5000}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What are you looking to build? Tell us about your idea, goals, features, or anything else that might help us understand your project." 
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm resize-y"
                    data-lenis-prevent="true"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-sm font-medium text-[#33373d]">Budget <span className="text-[#878983] font-normal">(Optional)</span></label>
                    <div className="relative">
                      <select 
                        id="budget" 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm appearance-none"
                      >
                        <option value="" disabled>Select a budget</option>
                        <option value="Not sure yet">Not sure yet</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Prefer to discuss">Prefer to discuss</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#565b61]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-[#33373d]">When are you looking to start? <span className="text-[#878983] font-normal">(Optional)</span></label>
                    <div className="relative">
                      <select 
                        id="timeline" 
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#d9d5cc] focus:outline-none focus:border-[#937a4e] focus:ring-1 focus:ring-[#937a4e] transition-colors rounded-sm text-sm appearance-none"
                      >
                        <option value="" disabled>Select a timeline</option>
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="Just exploring for now">Just exploring for now</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#565b61]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#d9d5cc] flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="button button-dark w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Start the Conversation"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
