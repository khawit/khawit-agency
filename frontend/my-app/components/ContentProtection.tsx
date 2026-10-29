"use client";

import { useEffect } from "react";

/**
 * ContentProtection
 * - Disables text selection and copying across the site
 * - Prevents right-click (context menu) to stop opening images separately or copying assets
 * - Prevents dragging images to new tabs or desktop
 * - Preserves full functionality for form inputs and textareas
 */
export function ContentProtection() {
  useEffect(() => {
    // 1. Prevent context menu (right-click)
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // Allow context menu only inside input and textarea fields
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
    };

    // 2. Prevent copying and cutting text
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
    };

    const handleCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
    };

    // 3. Prevent text selection event
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
    };

    // 4. Prevent dragging images out to new tabs or desktop
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img") || target.tagName === "PICTURE")) {
        e.preventDefault();
      }
    };

    // 5. Block copy / view-source / save-page keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA");
      const isModifier = e.ctrlKey || e.metaKey;

      if (!isInput && isModifier) {
        const key = e.key.toLowerCase();
        // Prevent Ctrl+C (copy), Ctrl+A (select all), Ctrl+X (cut)
        if (key === "c" || key === "a" || key === "x") {
          e.preventDefault();
        }
      }

      if (isModifier) {
        const key = e.key.toLowerCase();
        // Prevent Ctrl+U (view source), Ctrl+S (save page)
        if (key === "u" || key === "s") {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
