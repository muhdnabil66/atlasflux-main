// app/updates/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UpdatesPage() {
  const [expandedDates, setExpandedDates] = useState({});

  const toggleDate = (dateStr) => {
    setExpandedDates((prev) => ({
      ...prev,
      [dateStr]: !prev[dateStr],
    }));
  };

  const updatesData = [
    {
      date: "2026-04-08",
      entries: [
        {
          time: "09:30 MYT",
          title: "🖼️ AI Image Mode: Removed Carousel, Static Banner",
          details: [
            "The image carousel (example images) has been removed from AI Image mode before selecting quality.",
            "Now displays a clean static message: 'Select a quality mode and enter a prompt to generate images'.",
            "Banner image no longer causes unwanted vertical scroll on desktop (fixed with max-h constraints).",
            "Cleaner, faster loading experience for image generation page.",
          ],
        },
        {
          time: "10:15 MYT",
          title: "📢 Version Update Notification System",
          details: [
            "New popup notification appears when a new version of AtlasFlux is deployed.",
            "Uses Git commit hash as unique version identifier – automatic on every Vercel deploy.",
            "Popup shows 'New version available! Please reload.' with Refresh and Dismiss buttons.",
            "Checks every 2 minutes and also when user returns to the tab.",
            "Ensures users always have the latest features and fixes without manual refresh.",
          ],
        },
        {
          time: "11:00 MYT",
          title: "🖼️ Ultra Mode: Image Input Disabled & Warning Banner",
          details: [
            "Paperclip (attachment) button is now hidden when Ultra mode is selected – no image upload for img2img.",
            "Yellow warning banner appears in Ultra mode: 'Ultra mode does not support image input. Please select Cheap or Quality mode if you need to edit images.'",
            "Banner includes 'Use Cheap', 'Use Quality', and 'Understood' buttons for quick switching.",
            "This prevents costly failed attempts and confusion about img2img support.",
          ],
        },
        {
          time: "12:30 MYT",
          title: "⚡ Next.js Image Optimization: Added 'sizes' Prop",
          details: [
            "Fixed Next.js warning about missing 'sizes' prop on images with 'fill' attribute.",
            "Added 'sizes=\"100vw\"' to all full-width images (Banner, Gallery thumbnails, etc.).",
            "Improves LCP (Largest Contentful Paint) and overall page performance.",
            "Images now load with appropriate resolution based on viewport size.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "🧪 Experimental: Replicate img2img Parameter Mapping",
          details: [
            "Added model-specific parameter mapping for Replicate Ultra models.",
            "Now correctly sends 'input_images' (array) for flux-2-pro, 'image_input' for nano-banana, 'image_prompt' for flux-1.1-pro, etc.",
            "Fixed validation error where nano-banana expected array instead of string.",
            "Note: img2img still experimental – some models may not fully respect input image yet. Recommended to use Cheap/Quality for reliable image editing.",
          ],
        },
        {
          time: "15:45 MYT",
          title: "🎨 UI Polish: Theme & Language Consistency",
          details: [
            "Dark/light mode loads immediately from localStorage – no more theme flash on refresh.",
            "Language preference now persists across all pages (chat, blog, purchase, legal, updates).",
            "Improved initialization logic for both settings.",
            "Navbar and sidebar now respect language changes without page reload.",
          ],
        },
      ],
    },
    {
      date: "2026-04-06",
      entries: [
        {
          time: "10:30 MYT",
          title: "🔗 Unique URL for Each Chat Session",
          details: [
            "Each chat session now has its own unique URL (e.g., /chat/uuid).",
            "You can bookmark or share specific conversations directly.",
            "New Chat button creates a new session with a fresh URL.",
            "Guest users now see a 'No Active Session' screen with a 'New Chat' button to start.",
            "Switching between sessions updates the URL; back/forward navigation works perfectly.",
          ],
        },
        {
          time: "11:15 MYT",
          title: "🧑‍💻 Coding Mode Improvements & Cost Update",
          details: [
            "Coding mode now costs 10 credits per message (was 5) to reflect higher model costs.",
            "When Coding mode is active, system ensures compatible models are selected for file attachments.",
            "The confirmation modal now appears every time you enable Coding mode (no longer silenced after first click).",
            "Total cost for Coding + DeepSearch is 12 credits, for Coding + Research is 18 credits.",
            "Banner warnings show combined costs when multiple modes are active.",
          ],
        },
        {
          time: "12:00 MYT",
          title: "🚫 DeepSearch & Research Mutually Exclusive",
          details: [
            "DeepSearch and Research modes can no longer be active simultaneously.",
            "If you enable one while the other is on, the previous one is automatically disabled with a popup notification.",
            "This prevents redundant API calls and confusion over which search mode is active.",
            "Tooltips on buttons now clearly indicate this behaviour.",
          ],
        },
        {
          time: "13:45 MYT",
          title: "👥 Guest Modals for Gallery, AI Image & Special Modes",
          details: [
            "Guest users now see dedicated sign-in modals when trying to access:",
            "- Gallery (separate modal from file upload)",
            "- AI Image mode (separate modal)",
            "- DeepSearch, Research, and Coding modes",
            "Each modal has its own icon and clear message explaining why sign-in is needed.",
            "This improves user experience and encourages account creation.",
          ],
        },
        {
          time: "15:20 MYT",
          title: "🐛 Theme & Language Persistence Fix",
          details: [
            "Dark/light mode now reads from localStorage immediately on page load – no more flash of wrong theme.",
            "Language preference (English/Malay) is now saved across all pages (chat, blog, purchase, updates, legal).",
            "Theme and language settings are consistent after navigation and refresh.",
            "Improved initialisation logic for both settings.",
          ],
        },
        {
          time: "16:00 MYT",
          title: "📎 File Preview & Input Area Enhancements",
          details: [
            "File preview area now has a maximum height with scrollbar to prevent layout breakage when many files are attached.",
            "Input area is hidden when there is no active chat session (only shown after creating a new chat).",
            "Sidebar 'New Chat' button now directly creates a session and redirects to the unique URL.",
            "Fixed an issue where clicking 'New Chat' would sometimes require two attempts to send a message.",
          ],
        },
        {
          time: "17:30 MYT",
          title: "💸 Removal of RM2 Tester Pack",
          details: [
            "The Tester Pack (99 credits for RM2) has been removed from the purchase page.",
            "Remaining packs: Starter (200 credits RM5.99), Professional (500 credits RM10.99), Ultimate (2000 credits RM39.99), Image Bundle (100 generations RM49.99).",
            "This adjustment ensures better alignment with actual API costs and prevents undercharging.",
          ],
        },
        {
          time: "18:45 MYT",
          title: "⚙️ Coding Model Compatibility with File Attachments",
          details: [
            "When Coding mode is active and a file (image, PDF, document) is attached, the system now filters models to only those that support the file type.",
            "If no compatible model exists, users are prompted to disable Coding mode or remove the file – credits are not deducted.",
            "For text/code files, any model can be used since content is extracted as plain text.",
            "This prevents silent failures and wasted credits.",
          ],
        },
      ],
    },
    {
      date: "2026-04-04",
      entries: [
        {
          time: "09:30 MYT",
          title: "🖼️ Image Preview Click-to-Open Modal",
          details: [
            "Thumbnails in input area and user messages are now clickable to open a full-size image modal.",
            "Modal includes download, share (copy URL / native share), and delete (for gallery).",
            "Same modal used for both pending uploads and already sent images.",
          ],
        },
        {
          time: "10:15 MYT",
          title: "📄 Advanced File Preview Sidebar",
          details: [
            "Clicking on any file (DOCX, XLSX, TXT, PDF, etc.) now opens a right sidebar with content preview.",
            "For text/code files: syntax highlighting (same as code blocks), copy, download, expand to full modal.",
            "For PDF: preview not supported – only download option (no more loading glitches).",
            "Removed truncation limit – full file content displayed.",
            "Clean action bar similar to CodeBlockBar (copy, download, expand, delete).",
          ],
        },
        {
          time: "11:00 MYT",
          title: "🐛 Fixed Duplicate AI-Generated Images",
          details: [
            "Assistant messages for image generation no longer show two copies of the same image.",
            "Only one clickable image appears, using the dedicated image preview modal.",
            "Applied proper conditional rendering in MessageItem component.",
          ],
        },
        {
          time: "12:30 MYT",
          title: "🎨 Inline Code Highlight (Backticks) – Same as == Highlight",
          details: [
            "Text enclosed in backticks (`code`) now has pink background and pink text, matching the existing highlight for ==text==.",
            "Applied via CSS global `.markdown-content code:not(pre code)` – no changes to React components needed.",
            "Consistent visual emphasis for both manual highlights and AI-generated inline code.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "📊 Global Platform Analytics Dashboard",
          details: [
            "New public page `/stats` showing overall platform statistics.",
            "Cards display: Total Requests, Total Images, Credits Used, Registered Users, Chat Sessions, Avg Requests/Day.",
            "Line chart for daily requests (last 30 days) with professional tooltip.",
            "Separate lists for Top Chat Models and Top Image Models with provider badges and usage bars.",
            "Data aggregated from Supabase with 1-hour ISR caching.",
            "Link added to navbar and footer for easy access.",
          ],
        },
        {
          time: "15:45 MYT",
          title: "🍪 Cookie Banner Dark Mode Fix",
          details: [
            "Changed cookie banner background from blue/gray to dark black (`bg-black/95`) to match the site's dark theme.",
            "Buttons remain consistent (gray decline, pink gradient accept).",
            "No more jarring color mismatch on dark pages.",
          ],
        },
        {
          time: "17:00 MYT",
          title: "⚙️ API & Performance Improvements",
          details: [
            "Fixed `XLSX` import in `/api/extract-file` using `import * as XLSX` to resolve module error.",
            "Improved text file handling in FilePreviewSidebar – direct read without double base64 decoding.",
            "Conditional line numbers for code blocks: bash/shell now show no line numbers, other languages keep them.",
            "All file preview components now support syntax highlighting via `react-syntax-highlighter`.",
          ],
        },
      ],
    },
    {
      date: "2026-04-02",
      entries: [
        {
          time: "10:30 MYT",
          title: "⭐ User Rating System & Account Page Enhancements",
          details: [
            "Added a complete rating system on /account page: users can now rate their experience (1–5 stars) with optional comments.",
            "Implemented a forced rating popup that appears once for first-time users (cannot be closed without rating).",
            "Created API endpoints (/api/reviews) for submitting and checking ratings, bypassing RLS issues.",
            "Added aggregate rating stats endpoint (/api/reviews/stats) for dynamic schema markup.",
            "Enhanced account page with new 'Rate Your Experience' static card below purchase history.",
            "Fixed various UI issues on account page (dark mode, scrollbar styling, responsive layout).",
            "Improved error handling for rating submission and profile creation.",
          ],
        },
      ],
    },
    {
      date: "2026-03-30",
      entries: [
        {
          time: "08:00 MYT",
          title: "🎨 UI Overhaul, Chat History Fixes & Supabase RLS Updates",
          details: [
            "Added homepage animations and hero section with animated particles.",
            "Introduced ad section and interactive demo section to showcase features.",
            "Fixed chat history loading issues – user messages are now correctly parsed from JSON strings.",
            "Improved session dropdown with scrollbar and dark mode text visibility.",
            "Updated Supabase Row Level Security (RLS) policies for better data isolation and performance.",
            "Chat titles are now generated automatically based on conversation content, only once per session.",
            "Various bug fixes and performance improvements.",
          ],
        },
      ],
    },
    {
      date: "2026-03-27",
      entries: [
        {
          time: "14:00 MYT",
          title: "🖼️ Image‑to‑Image (img2img) Support for Ultra Models",
          details: [
            "Ultra mode now supports image input (img2img) for compatible models: flux-1.1-pro, flux-dev, flux-kontext-pro.",
            "Added `prompt_strength` parameter (default 0.8) to control how much the model follows the prompt vs. the original image.",
            "If you upload an image but the selected model does not support img2img (e.g., imagen-4), a warning modal appears and credits are **not deducted**.",
            "Improved base64 cleaning and fallback to direct base64 when upload to storage fails.",
          ],
        },
        {
          time: "15:30 MYT",
          title: "🛡️ Model‑Specific Img2Img Validation",
          details: [
            "System now validates img2img compatibility before deducting credits.",
            "Users are guided to choose a compatible model for image editing.",
            "Error messages are clearer and include suggested models (flux-1.1-pro, flux-dev, flux-kontext-pro).",
          ],
        },
        {
          time: "16:45 MYT",
          title: "⚙️ Improved Replicate API Handling",
          details: [
            "Fixed issue where models without a specific version ID would fail (now uses model name as version).",
            "Added retry logic for rate limits (429) with exponential backoff.",
            "Better logging for debugging image generation.",
          ],
        },
      ],
    },
    {
      date: "2026-03-25",
      entries: [
        {
          time: "10:00 MYT",
          title: "🎨 AI Image Generation & Gallery",
          details: [
            "Launched AI Image Generation feature with 12 models (Flux, Riverflow, Seedream, Gemini).",
            "Cost: 30 credits per image. Automatic refund if generation fails.",
            "Added Gallery to save and manage your generated images (up to 20 most recent).",
            "Gallery modal with download, share (native share / copy URL), and delete options.",
            "Image Carousel with example images and Prompt Chips above input area.",
            "New 'Gallery' button in sidebar (visible only when signed in).",
            "Switching from chat to image mode shows a warning modal if chat has messages.",
          ],
        },
        {
          time: "11:30 MYT",
          title: "📱 UI Improvements for Mobile",
          details: [
            "Prompt chips now scroll horizontally on mobile (no wrap).",
            "Image Carousel no longer has title text, only images and navigation buttons.",
            "Gallery modal now has fixed size (900x700) with pink rounded scrollbar.",
            "Improved modal responsiveness across devices.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "🔒 Legal Updates: Image Generation Policy",
          details: [
            "Added new section 'AI Image Generation & Copyright' to legal page.",
            "Covers copyright, prohibited content, moderation, costs, and disclaimer.",
            "Updated FAQ with image generation cost (30 credits).",
            "Pricing section now includes image generation card.",
          ],
        },
        {
          time: "16:20 MYT",
          title: "🖼️ Image Modal Enhancements",
          details: [
            "Image modal now includes Download, Share (native share or copy URL), and Delete (for gallery).",
            "Share uses Web Share API on mobile; fallback to copy URL with custom toast.",
            "Delete only removes from gallery, not from storage (user images table).",
          ],
        },
      ],
    },
    {
      date: "2026-03-20",
      entries: [
        {
          time: "10:30 MYT",
          title: "🔧 Final Google Login Fix & Webhook Integration",
          details: [
            "Fixed persistent 'External Account was not found' error for new users.",
            "Implemented Clerk webhook to automatically sync new user profiles to Supabase.",
            "Added missing `/sign-in/sso-callback` page to handle OAuth redirects.",
            "Google OAuth app now fully in production mode.",
          ],
        },
        {
          time: "11:45 MYT",
          title: "📝 Chat History & Session Management",
          details: [
            "Chat sessions are now automatically saved with a unique ID.",
            "Fixed issue where chat history was not appearing in the sidebar.",
            "Added limit of 10 most recent sessions (pinned sessions are preserved).",
            "Guest users no longer see history; they are prompted to sign in.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "🌐 PWA & Service Worker Improvements",
          details: [
            "Re‑enabled PWA with a safe runtime caching strategy.",
            "Excluded authentication routes from caching to prevent login issues.",
            "Improved offline capabilities and load speed.",
          ],
        },
        {
          time: "16:15 MYT",
          title: "⚙️ Supabase Schema & RLS Updates",
          details: [
            "Added `email` column to profiles table and enforced uniqueness.",
            "Enabled Row Level Security (RLS) to isolate user data.",
            "Implemented database triggers to auto‑create profiles on sign‑up.",
          ],
        },
        {
          time: "18:00 MYT",
          title: "🎨 UI/UX Polish",
          details: [
            "Fixed chat title truncation in sidebar.",
            "Improved error messages for Google login (custom modal).",
            "Enhanced mobile responsiveness.",
          ],
        },
      ],
    },
    {
      date: "2026-03-19",
      entries: [
        {
          time: "14:30 MYT",
          title: "🚀 New Automatic Model Selection",
          details: [
            "Removed manual model selector – system now automatically picks the best model for your query.",
            "Prioritizes free models first, then falls back to paid models seamlessly.",
            "Users no longer need to worry about model errors or compatibility.",
          ],
        },
        {
          time: "15:45 MYT",
          title: "💰 New Credit System: 2 Credits per Message",
          details: [
            "Standardized credit cost: every message now costs 2 credits (was variable).",
            "DeepSearch costs an additional 2 credits (total 4).",
            "If all models fail, credits are automatically refunded.",
          ],
        },
        {
          time: "16:20 MYT",
          title: "📎 Unlimited File Uploads (No Daily Limits)",
          details: [
            "Removed daily limits for file uploads – only size limits apply.",
            "Images: up to 20MB, PDFs: up to 50MB.",
            "Users can now upload up to 5 images per message.",
          ],
        },
        {
          time: "17:10 MYT",
          title: "🔄 Fixed Blank Screen Before AI Response",
          details: [
            "Eliminated the blank gap between 'Thinking...' and response.",
            "Now shows animated three dots immediately after 'Thinking...' disappears.",
            "Smoother user experience.",
          ],
        },
        {
          time: "18:05 MYT",
          title: "📄 Redesigned Legal Pages",
          details: [
            "Simplified legal pages to focus on current policies.",
            "Removed outdated pricing and model lists.",
            "Added clear explanations of new credit system and file upload rules.",
          ],
        },
      ],
    },
    {
      date: "2026-03-18",
      entries: [
        {
          time: "09:15 MYT",
          title: "🧪 Beta Testing for New System",
          details: [
            "Invited select users to test automatic model selection.",
            "Gathered feedback on credit cost standardization.",
            "Fixed initial bugs in file upload handling.",
          ],
        },
        {
          time: "11:30 MYT",
          title: "📊 Credit Logs Update",
          details: [
            "Credit logs now clearly show -2 for normal messages and -4 for DeepSearch.",
            "Refund entries are now labeled for easier tracking.",
            "Added filter by date range.",
          ],
        },
        {
          time: "14:50 MYT",
          title: "🌐 DeepSearch Reliability Improved",
          details: [
            "Better error handling for timeouts and failed scrapes.",
            "Now shows sources even if some pages fail to load.",
            "Reduced cost from 5 to 2 extra credits.",
          ],
        },
        {
          time: "16:40 MYT",
          title: "🖼️ Image Preview Improvements",
          details: [
            "Images in user messages now appear below the text for cleaner layout.",
            "File previews show filename and have a delete button.",
            "PDFs display in a compact format with download option.",
          ],
        },
      ],
    },
    {
      date: "2026-03-17",
      entries: [
        {
          time: "09:00 MYT",
          title: "🎯 Specific Error Messages",
          details: [
            "Added distinct error messages for network issues, insufficient credits, model unavailable, and DeepSearch timeout.",
            "Users now see clear explanations instead of generic 'something went wrong'.",
            "Improved error logging for faster debugging.",
          ],
        },
        {
          time: "11:30 MYT",
          title: "📝 Updated Legal Pages",
          details: [
            "Added Third-Party Licenses section to legal page.",
            "Updated model lists in FAQ and pricing to include all new models.",
            "Improved clarity of AI disclaimer.",
          ],
        },
        {
          time: "14:45 MYT",
          title: "🆕 New Models Added",
          details: [
            "Added Nvidia Nemotron 3 Super (free), OpenRouter Hunter Alpha (free), Arcee AI Trinity Large Preview (free).",
            "Added Claude Haiku 4.5, Claude 3 Haiku, Claude 3.5 Haiku, GPT-5 Nano, GPT-5 Mini, GPT-4o.",
            "All models now have bilingual descriptions and proper pricing.",
          ],
        },
      ],
    },
    {
      date: "2026-03-16",
      entries: [
        {
          time: "10:15 MYT",
          title: "🔗 Citation Numbers in Responses",
          details: [
            "AI now cites sources with clickable pink numbers when DeepSearch is used.",
            "Numbers open the Sources modal and scroll to the corresponding source.",
            "Improved transparency and trust in AI answers.",
          ],
        },
        {
          time: "13:20 MYT",
          title: "📊 Reading Progress Bar",
          details: [
            "During DeepSearch, a progress bar shows 'Reading page X of Y'.",
            "Users can see how many web pages are being processed.",
            "Estimated time improved based on actual page count.",
          ],
        },
        {
          time: "16:50 MYT",
          title: "🖼️ Image Compression Before Upload",
          details: [
            "Images larger than 1MB are automatically compressed to reduce bandwidth and speed up processing.",
            "Compression maintains good quality while saving credits.",
            "Supports all image formats (PNG, JPG, WEBP).",
          ],
        },
        {
          time: "20:05 MYT",
          title: "🌐 Scraping Caching",
          details: [
            "Implemented caching for scraped web pages to avoid re-scraping the same domain within 24 hours.",
            "Reduces API costs and speeds up repeated DeepSearch queries.",
            "Cache is stored in Supabase and automatically cleaned.",
          ],
        },
      ],
    },
    {
      date: "2026-03-15",
      entries: [
        {
          time: "09:30 MYT",
          title: "🐛 Fixed Credit Log Duplication & Refund Issues",
          details: [
            "Resolved double logging of credit transactions by ensuring credit_type is never null.",
            "Fixed refund mechanism to correctly restore daily/bonus credits without delays.",
            "Improved error handling in credit log insertion with fallback to localStorage.",
          ],
        },
        {
          time: "10:15 MYT",
          title: "🖼️ Added 10 New Image Generation Models",
          details: [
            "Integrated Google Nano Banana Pro (25 credits), Gemini 3.1 Flash Image (8 credits).",
            "Added OpenAI GPT-5 Image (20) and GPT-5 Image Mini (10).",
            "Included ByteDance Seedream 4.5 (10), Sourceful Riverflow V2 Pro (50), V2 Fast Preview (7), V2 Max Preview (60), V2 Standard Preview (35).",
            "Added Black Forest Labs FLUX.2 klein 4B (18).",
            "All models include bilingual descriptions and provider logos.",
          ],
        },
        {
          time: "11:45 MYT",
          title: "💬 Added 20+ New Chat Models",
          details: [
            "Integrated xAI Grok models: 4.20 Multi-Agent Beta (20), 4.20 Beta (20), 4.1 Fast (5), 4 Fast (5).",
            "Added OpenAI GPT-5.3 Codex (15) for specialised coding tasks.",
            "Included free Nvidia models: Nemotron 3 Super, Llama Nemotron Embed VL, Nemotron 3 Nano.",
            "Added ByteDance Seed 2.0 Lite (3), Qwen 3.5 9B (1), Inception Mercury 2 (4), Qwen 3.5 35B (4).",
            "Added MiniMax M2.5 (2), M2 Her (2), Moonshot AI Kimi K2.5 (3).",
            "Added AionLabs Aion 2.0 (3), Aion 1.0 (5), Perplexity Sonar Pro Search (6).",
            "All models include provider information and bilingual descriptions.",
          ],
        },
        {
          time: "13:20 MYT",
          title: "🌗 Improved Dark Mode Logo Visibility",
          details: [
            "Added CSS filter `.dark-logo` to invert dark logos in dark mode.",
            "Applied class to model logos in ModelSelectModal and navbar.",
            "Ensures all provider logos are clearly visible regardless of theme.",
          ],
        },
        {
          time: "14:50 MYT",
          title: "📊 Added Table Support in Markdown",
          details: [
            "Enhanced ReactMarkdown with custom table components for proper rendering.",
            "Tables now display with borders, header styling, and horizontal scroll on mobile.",
            "Users can now view structured data clearly in AI responses.",
          ],
        },
        {
          time: "16:05 MYT",
          title: "🔧 Fixed Image API Credit Deduction Error",
          details: [
            "Resolved 500 error in `/api/image` route by improving error handling in `deductUserCredits`.",
            "Added try/catch and proper logging to prevent silent failures.",
            "Credits are now correctly refunded when all fallback models fail.",
          ],
        },
        {
          time: "17:30 MYT",
          title: "📝 Updated FAQ with Accurate Model Info",
          details: [
            "Corrected Q8 to reflect that vision/file support is checked automatically on upload, not via icons.",
            "Added new questions about DeepSearch, file limits, and guest usage.",
            "Now includes complete list of all 40+ chat and 10+ image models with pricing.",
          ],
        },
        {
          time: "19:00 MYT",
          title: "✨ UI Polish in Model Selector",
          details: [
            "Added real-time credit balance display next to modal title.",
            "Removed redundant 'Select' button; selected model now highlighted with background.",
            "Model descriptions appear in footer when hovering info icon, keeping interface clean.",
          ],
        },
      ],
    },
    {
      date: "2026-03-14",
      entries: [
        {
          time: "09:15 MYT",
          title: "🔧 Admin Panel & Developer Tools",
          details: [
            "Launched admin panel for developers to manage user credits and system settings.",
            "Added ability to grant bonus credits directly from admin interface.",
            "Introduced performance monitoring dashboard (internal).",
          ],
        },
        {
          time: "13:30 MYT",
          title: "⚡ Performance Optimization",
          details: [
            "Reduced API latency by 22% for chat completions.",
            "Optimized database queries for chat history retrieval.",
            "Implemented edge caching for static assets.",
          ],
        },
        {
          time: "18:45 MYT",
          title: "🐛 Bug Fixes",
          details: [
            "Fixed issue where credit logs sometimes showed incorrect amounts.",
            "Resolved dark mode toggle inconsistency on mobile.",
            "Corrected language switcher not persisting across pages.",
          ],
        },
        {
          time: "22:10 MYT",
          title: "📱 Mobile UI Refinements",
          details: [
            "Improved touch targets for model selector dropdown.",
            "Adjusted padding in chat input for better usability.",
            "Fixed overlapping elements on small screens.",
          ],
        },
      ],
    },
    {
      date: "2026-03-13",
      entries: [
        {
          time: "10:00 MYT",
          title: "🎁 Raya Bonus Promotion",
          details: [
            "All users receive 100 bonus credits as Hari Raya gift.",
            "Bonus valid until end of March; appears in credit logs as special entry.",
            "Added festive theme toggle (optional) for chat background.",
          ],
        },
        {
          time: "14:20 MYT",
          title: "✨ New Feature: Message Search",
          details: [
            "Users can now search within current chat session.",
            "Search highlights matching text and scrolls to position.",
            "Available in both English and Malay.",
          ],
        },
        {
          time: "19:00 MYT",
          title: "📊 Credit Logs Enhancement",
          details: [
            "Added filtering by credit type (daily/bonus) and date range.",
            "Improved loading performance for large log histories.",
            "Display remaining time for daily reset and Claude free limit.",
          ],
        },
      ],
    },
    {
      date: "2026-03-12",
      entries: [
        {
          time: "08:30 MYT",
          title: "📄 Legal Pages & Language Toggle",
          details: [
            "Added comprehensive legal pages: Terms, Privacy, Refund, Cookie, AI Disclaimer.",
            "Implemented language switcher (English/Malay) across all legal pages.",
            "Legal pages now accessible from sidebar and footer.",
          ],
        },
        {
          time: "12:15 MYT",
          title: "🌐 DeepSearch Improvements",
          details: [
            "Increased scraping timeout to handle slower websites.",
            "Added fallback for sites that block scrapers.",
            "Improved source formatting in responses.",
          ],
        },
        {
          time: "16:40 MYT",
          title: "🔒 Security Update",
          details: [
            "Updated Clerk middleware to protect all API routes.",
            "Added rate limiting for image generation endpoint.",
            "Implemented CSRF protection for authentication flows.",
          ],
        },
        {
          time: "21:00 MYT",
          title: "📱 PWA Installability",
          details: [
            "Service worker now caches static assets for offline access.",
            "Added install prompt for eligible users.",
            "Improved splash screen and app icons.",
          ],
        },
      ],
    },
    {
      date: "2026-03-11",
      entries: [
        {
          time: "09:45 MYT",
          title: "⚡ GPT-5.4 and o1 Models",
          details: [
            "Integrated OpenAI GPT-5.4 Pro (30 credits) and o1 (30 credits).",
            "Added GPT-5.4 (5 credits) for faster responses.",
            "Models available in chat dropdown with appropriate pricing.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "🧠 Enhanced Reasoning for Complex Queries",
          details: [
            "Improved prompt engineering for o1 models to handle multi-step tasks.",
            "Added support for code generation in multiple languages.",
            "Better handling of mathematical and logical problems.",
          ],
        },
        {
          time: "18:30 MYT",
          title: "🐛 Bug Fix: Model Fallback",
          details: [
            "Fixed issue where fallback models weren't always attempted.",
            "Now correctly tries up to 3 alternative models on failure.",
            "Credits properly refunded if all fallbacks fail.",
          ],
        },
      ],
    },
    {
      date: "2026-03-10",
      entries: [
        {
          time: "07:20 MYT",
          title: "📲 PWA Support",
          details: [
            "AtlasFlux AI is now installable as a Progressive Web App.",
            "Users can add to home screen for native-like experience.",
            "Offline mode shows cached chat history.",
          ],
        },
        {
          time: "11:50 MYT",
          title: "🎨 UI Polish",
          details: [
            "Redesigned model selector with search and categories.",
            "Added animations for modal transitions.",
            "Improved message action buttons (copy, redo, delete).",
          ],
        },
        {
          time: "16:10 MYT",
          title: "🔧 Credit System Tweaks",
          details: [
            "Daily reset now happens at midnight MYT sharp.",
            "Bonus credits now clearly separated in display.",
            "Added tooltip explaining credit types.",
          ],
        },
        {
          time: "20:35 MYT",
          title: "📈 Analytics Integration",
          details: [
            "Added anonymous usage tracking (opt-out available).",
            "Monitoring for error rates and API latency.",
            "Dashboard for developers to track system health.",
          ],
        },
      ],
    },
    {
      date: "2026-03-09",
      entries: [
        {
          time: "08:00 MYT",
          title: "📱 Mobile Responsive Improvements",
          details: [
            "Chat interface now fully responsive on all devices.",
            "Sidebar slides in/out smoothly on mobile.",
            "Input area adapts to keyboard appearance.",
          ],
        },
        {
          time: "13:15 MYT",
          title: "💬 Message Actions Enhancement",
          details: [
            "Added 'Redo' button to regenerate assistant messages.",
            "Copy button now copies plain text without markdown.",
            "Delete message now asks for confirmation.",
          ],
        },
        {
          time: "17:40 MYT",
          title: "🌗 Dark Mode Toggle",
          details: [
            "Users can now switch between light and dark themes.",
            "Preference saved in localStorage.",
            "System theme detection on first visit.",
          ],
        },
        {
          time: "22:00 MYT",
          title: "🐛 Fix: Textarea Auto-resize",
          details: [
            "Fixed issue where textarea didn't expand with content.",
            "Now supports up to 5 lines before scrolling.",
            "Improved shift+enter behavior.",
          ],
        },
      ],
    },
    {
      date: "2026-03-08",
      entries: [
        {
          time: "09:30 MYT",
          title: "🖼️ Image Generation Stability",
          details: [
            "Improved error handling for image generation.",
            "Added retry mechanism with fallback models.",
            "Better extraction of image URLs from responses.",
          ],
        },
        {
          time: "14:45 MYT",
          title: "📋 Copy Code Blocks",
          details: [
            "Code blocks now have a dedicated copy button.",
            "Syntax highlighting for more languages.",
            "Line numbers added for readability.",
          ],
        },
        {
          time: "19:20 MYT",
          title: "🌐 Language Detection",
          details: [
            "Browser language detection to set initial language.",
            "Manual override always available.",
            "Translated all UI elements for Malay.",
          ],
        },
      ],
    },
    {
      date: "2026-03-07",
      entries: [
        {
          time: "10:00 MYT",
          title: "🖼️ AI Image Generation",
          details: [
            "Launched image generation with three models: Flux Schnell (4 credits), Seedream 2.0 (5 credits), Gemini Flash Exp (6 credits).",
            "Images are generated via OpenRouter and displayed inline.",
            "Users can attach images as input for chat (vision).",
          ],
        },
        {
          time: "15:30 MYT",
          title: "📎 File Attachment",
          details: [
            "Users can now upload images (PNG, JPG, WEBP) as part of messages.",
            "Supported for vision-capable models.",
            "Preview before sending.",
          ],
        },
        {
          time: "20:10 MYT",
          title: "🐛 Fix: Image Model Selection",
          details: [
            "Fixed bug where image model wasn't saved after refresh.",
            "Added confirmation modal for image model change.",
            "Improved model logos display.",
          ],
        },
      ],
    },
    {
      date: "2026-03-06",
      entries: [
        {
          time: "08:45 MYT",
          title: "⚡ Performance Boost",
          details: [
            "Reduced initial load time by 35%.",
            "Code splitting for modals and heavy components.",
            "Lazy loading for markdown syntax highlighter.",
          ],
        },
        {
          time: "12:20 MYT",
          title: "📊 Credit Usage Dashboard",
          details: [
            "Visual progress bars for daily credits and Claude free limit.",
            "Countdown timers for resets.",
            "Quick view in sidebar.",
          ],
        },
        {
          time: "17:50 MYT",
          title: "🔧 Bug Fix: Session Management",
          details: [
            "Fixed issue where guest sessions were sometimes lost.",
            "Improved session sync after sign-in.",
            "Now correctly merges guest history with account.",
          ],
        },
      ],
    },
    {
      date: "2026-03-05",
      entries: [
        {
          time: "09:00 MYT",
          title: "🌐 DeepSearch Goes Live",
          details: [
            "Introduced DeepSearch: web search + page scraping for up-to-date answers.",
            "Costs 5 credits per search, non-refundable.",
            "Displays sources with favicons and links.",
          ],
        },
        {
          time: "13:40 MYT",
          title: "📚 Research Context Storage",
          details: [
            "Research results are temporarily stored for signed-in users.",
            "Prevents duplicate scraping for same query.",
            "Context automatically cleaned after use.",
          ],
        },
        {
          time: "18:15 MYT",
          title: "🐛 Fix: Scraping Errors",
          details: [
            "Added retry logic for failed scrapes.",
            "Better handling of JavaScript-heavy sites.",
            "Fallback to Tavily snippets when scrape fails.",
          ],
        },
      ],
    },
    {
      date: "2026-03-04",
      entries: [
        {
          time: "10:10 MYT",
          title: "🗂️ Chat History Improvements",
          details: [
            "Chat sessions now show message preview in sidebar.",
            "Pin/unpin sessions to keep important chats on top.",
            "Delete session with confirmation.",
          ],
        },
        {
          time: "14:55 MYT",
          title: "🔎 Model Search",
          details: [
            "Added search bar in model dropdown.",
            "Filter models by name or provider.",
            "Highlight matching text.",
          ],
        },
        {
          time: "21:20 MYT",
          title: "📱 Touch Gestures",
          details: [
            "Swipe right to open sidebar on mobile.",
            "Swipe left to close.",
            "Long press on message for actions.",
          ],
        },
      ],
    },
    {
      date: "2026-03-03",
      entries: [
        {
          time: "08:20 MYT",
          title: "🧪 Claude Sonnet Free Limit",
          details: [
            "Implemented 10 free messages per 6 hours for Claude Sonnet 4.6.",
            "Added modal offering choice between free and paid.",
            "Display remaining free messages in credit logs.",
          ],
        },
        {
          time: "12:40 MYT",
          title: "📈 Analytics for Model Usage",
          details: [
            "Track which models are most popular.",
            "Identify failing requests for faster debugging.",
            "Anonymized data collection (opt-out).",
          ],
        },
        {
          time: "17:30 MYT",
          title: "🐛 Fix: AbortController",
          details: [
            "Fixed issue where stopping response didn't always work.",
            "Now properly cancels fetch and cleans up.",
            "Refunds credits if stopped mid-generation.",
          ],
        },
      ],
    },
    {
      date: "2026-03-02",
      entries: [
        {
          time: "09:15 MYT",
          title: "🤖 Claude Models Added",
          details: [
            "Integrated Claude Sonnet 4.6 (5 credits, or free tier) and Claude Opus 4.6 (10 credits).",
            "Sonnet offers 10 free messages every 6 hours.",
            "Opus provides high-quality reasoning for complex tasks.",
          ],
        },
        {
          time: "14:00 MYT",
          title: "📝 Markdown Support",
          details: [
            "Full markdown rendering in assistant messages.",
            "Syntax highlighting for code blocks.",
            "Table support via remark-gfm.",
          ],
        },
        {
          time: "19:45 MYT",
          title: "🌗 Dark Mode Beta",
          details: [
            "Initial dark mode implementation.",
            "Toggle available in settings.",
            "Follows system preference.",
          ],
        },
      ],
    },
    {
      date: "2026-03-01",
      entries: [
        {
          time: "10:30 MYT",
          title: "📋 Copy & Share Features",
          details: [
            "Added copy message button with temporary checkmark.",
            "Share chat as text (plain or markdown).",
            "Export conversation to JSON.",
          ],
        },
        {
          time: "15:10 MYT",
          title: "🔧 Bug Fix: Credit Deduction",
          details: [
            "Fixed double deduction issue when model failed.",
            "Refund now correctly returns to daily/bonus pools.",
            "Improved logging for debugging.",
          ],
        },
        {
          time: "20:20 MYT",
          title: "📊 Credit Logs Modal",
          details: [
            "Added modal to view credit history.",
            "Shows type, amount, model, description, and timestamp.",
            "Special styling for Raya bonus entries.",
          ],
        },
      ],
    },
    {
      date: "2026-02-28",
      entries: [
        {
          time: "08:50 MYT",
          title: "💰 Credit System Introduced",
          details: [
            "Free users receive 30 daily credits, reset at midnight MYT.",
            "Sign-in bonus: 15 one-time credits.",
            "Credits split into daily (resets) and bonus (permanent).",
          ],
        },
        {
          time: "12:10 MYT",
          title: "👤 User Profiles",
          details: [
            "Profiles table in Supabase to store credits and settings.",
            "Synced with Clerk authentication.",
            "Username customization.",
          ],
        },
        {
          time: "17:25 MYT",
          title: "🔐 Authentication Integration",
          details: [
            "Clerk authentication set up with email, Google, and GitHub.",
            "Sign-in modal with welcome bonus popup.",
            "Guest mode available without account.",
          ],
        },
        {
          time: "21:40 MYT",
          title: "🐛 Fix: Guest Credits",
          details: [
            "Guest credits now persist in localStorage.",
            "Reset at midnight using stored date.",
            "Prevent credit loss on page refresh.",
          ],
        },
      ],
    },
    {
      date: "2026-02-27",
      entries: [
        {
          time: "09:00 MYT",
          title: "🚀 Initial Infrastructure",
          details: [
            "Set up Next.js 15 with App Router.",
            "Configured Tailwind CSS and Framer Motion.",
            "Integrated Supabase for backend.",
          ],
        },
        {
          time: "13:30 MYT",
          title: "📦 OpenRouter Integration",
          details: [
            "Added support for DeepSeek and Gemini Flash models.",
            "Implemented streaming responses.",
            "Error handling and fallback mechanisms.",
          ],
        },
        {
          time: "18:00 MYT",
          title: "💬 Basic Chat UI",
          details: [
            "Created chat interface with message bubbles.",
            "Added input area with attach button (placeholder).",
            "Scroll to bottom on new messages.",
          ],
        },
        {
          time: "22:15 MYT",
          title: "📱 Basic Mobile Layout",
          details: [
            "Ensured minimum responsiveness.",
            "Sidebar drawer for mobile.",
            "Adjust font sizes for smaller screens.",
          ],
        },
      ],
    },
    {
      date: "2026-02-26",
      entries: [
        {
          time: "10:00 MYT",
          title: "🚀 AtlasFlux AI Launched",
          details: [
            "Platform officially launched with initial models: DeepSeek V3, Gemini 2.0 Flash.",
            "Free to use with unlimited messages for beta testers.",
            "Basic chat functionality with markdown support.",
          ],
        },
        {
          time: "14:30 MYT",
          title: "🎨 Logo & Branding",
          details: [
            "Finalized logo and favicon.",
            "Set up manifest for PWA.",
            "Customized Clerk sign-in pages.",
          ],
        },
        {
          time: "17:50 MYT",
          title: "📝 Initial Documentation",
          details: [
            "Created placeholder legal pages.",
            "Added contact form stub.",
            "Prepared for future updates.",
          ],
        },
        {
          time: "23:00 MYT",
          title: "🎉 First Commit",
          details: [
            "Codebase pushed to production.",
            "First users onboarded.",
            "Celebratory launch!",
          ],
        },
      ],
    },
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Pastikan Font Awesome dimuatkan */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#030303",
          color: "#d4d4d4",
          fontFamily: "'Inter', sans-serif",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Back button */}
          <div style={{ marginBottom: "2rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#d4af37",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {/* <i className="fas fa-arrow-left"></i> Back to Home */}
            </Link>
          </div>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Image
              src="/assets/atlas.png"
              alt="AtlasFlux"
              width={80}
              height={80}
              style={{ margin: "0 auto 1rem", display: "block" }}
              priority
            />
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Latest Updates
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#a3a3a3" }}>AtlasFlux</p>
          </div>

          {/* Collapsible updates list */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {updatesData.map((day, idx) => {
              const isExpanded = expandedDates[day.date] || false;
              return (
                <div
                  key={idx}
                  style={{
                    border: "1px solid #1f1f1f",
                    borderRadius: "12px",
                    overflow: "hidden",
                    backgroundColor: "#0f0f0f",
                  }}
                >
                  <button
                    onClick={() => toggleDate(day.date)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.5rem",
                      backgroundColor: "#0a0a0a",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#d4af37",
                      }}
                    >
                      {formatDate(day.date)}
                    </h2>
                    <i
                      className={`fas fa-chevron-${isExpanded ? "down" : "right"}`}
                      style={{ color: "#a3a3a3" }}
                    ></i>
                  </button>
                  {isExpanded && (
                    <div
                      style={{
                        padding: "1.5rem",
                        borderTop: "1px solid #1f1f1f",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                      }}
                    >
                      {day.entries.map((entry, eidx) => (
                        <div
                          key={eidx}
                          style={{
                            paddingLeft: "1.5rem",
                            borderLeft: "4px solid #d4af37",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              marginBottom: "0.5rem",
                              fontSize: "0.9rem",
                              color: "#a3a3a3",
                            }}
                          >
                            <span style={{ fontFamily: "monospace" }}>
                              {entry.time}
                            </span>
                            <span
                              style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                backgroundColor: "#a3a3a3",
                              }}
                            ></span>
                            <span style={{ fontWeight: 500, color: "#ffffff" }}>
                              {entry.title}
                            </span>
                          </div>
                          <ul
                            style={{
                              listStyle: "disc",
                              paddingLeft: "1.5rem",
                              color: "#d4d4d4",
                              fontSize: "0.95rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {entry.details.map((detail, didx) => (
                              <li key={didx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <footer
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid #1f1f1f",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#a3a3a3",
            }}
          >
            <p>© {new Date().getFullYear()} AtlasFlux. All rights reserved.</p>
            <p style={{ marginTop: "0.5rem" }}>
              <Link
                href="/contact"
                style={{ color: "#a3a3a3", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#a3a3a3")}
              >
                Contact us
              </Link>{" "}
              ·{" "}
              <a
                href="https://atlasflux.my"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a3a3a3", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#a3a3a3")}
              >
                atlasflux.my
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
