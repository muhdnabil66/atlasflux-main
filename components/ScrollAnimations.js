"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay untuk pastikan DOM sudah siap
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".animate-on-scroll, .slide-left, .slide-right, .slide-up",
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px" },
      );
      elements.forEach((el) => observer.observe(el));
      // Bersihkan observer apabila komponen dibuang atau laluan berubah
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]); // Jalankan semula setiap kali laluan berubah

  return null;
}
