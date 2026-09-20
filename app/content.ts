export type Language = "id" | "en";

export const content = {
  id: {
    navigation: { work: "Karya", capabilities: "Keahlian", experience: "Pengalaman", about: "Tentang", contact: "Hubungi saya" },
    hero: {
      eyebrow: "Frontend Software Engineer",
      description: "Saya mengubah antarmuka kompleks menjadi aplikasi web yang responsif dan mudah digunakan, dengan pengalaman frontend lebih dari 5 tahun.",
      workCta: "Lihat karya",
      contactCta: "Hubungi saya",
      visualLabel: "Placeholder visual geometris abstrak",
    },
    future: "Bagian ini akan ditambahkan setelah disetujui.",
    capabilities: {
      heading: "Antarmuka. Data. Integrasi.",
      frontend: { title: "Frontend Engineering", description: "Antarmuka responsif, mudah diakses, dan berperforma baik." },
      data: { title: "Data & GIS", description: "Pemrosesan dan visualisasi data spasial." },
      integration: { title: "Integration & Automation", description: "REST API, otomasi Node.js, dan Gemini API." },
    },
    selectedWork: {
      eyebrow: "Karya pilihan",
      heading: "Sistem yang membantu data bergerak lebih jelas.",
      flagship: { title: "Aplikasi Konsolidator Data Ditjen Adwil", description: "Konsolidasi dan integrasi data antarsistem.", link: "Baca case study" },
      projects: [
        { title: "LEGASI", description: "Visualisasi data spasial." },
        { title: "RedKar", description: "Pelaporan insiden berbasis lokasi." },
        { title: "W-Track", description: "Ticketing pemeliharaan EDC." },
      ],
      placeholder: "Visual NDA-safe / placeholder",
    },
    process: {
      eyebrow: "Cara kerja",
      heading: "Dari kebutuhan menjadi sistem yang dapat digunakan.",
      pending: "Wording provisional - menunggu konfirmasi faktual.",
      steps: ["Pahami kebutuhan", "Bangun & integrasikan", "Validasi & sempurnakan"],
      visual: "Placeholder visual proses abstrak",
    },
    experience: {
      eyebrow: "Pengalaman",
      heading: "Pengalaman profesional",
      placeholder: "[Placeholder: kontribusi dan detail peran menunggu CV lengkap]",
      entries: [
        { date: "Feb 2025-Present", role: "Software & Web Developer", company: "Kementerian Dalam Negeri, Ditjen Bina Adwil" },
        { date: "May 2022-May 2025", role: "Frontend Engineer", company: "PT. Wide Technologies Indonesia" },
        { date: "Oct 2019-Aug 2021", role: "Frontend Specialist", company: "PT. BFI Finance Indonesia Tbk" },
      ],
    },
    toolbox: {
      eyebrow: "Toolbox",
      heading: "Teknologi yang digunakan",
      note: "Starter list - dapat diperluas setelah CV lengkap ditinjau.",
      groups: [
        { title: "Frontend", items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
        { title: "State & API", items: ["Redux", "Zustand", "Axios", "REST"] },
        { title: "Data & GIS", items: ["PostgreSQL", "PostGIS", "QGIS", "ArcGIS"] },
        { title: "Backend & Automation", items: ["Node.js", "Supabase"] },
        { title: "AI & Mobile", items: ["Gemini API", "Kotlin"] },
        { title: "Workflow", items: ["Git", "Figma", "Postman"] },
      ],
    },
    about: {
      eyebrow: "Tentang",
      heading: "Tentang Awenk",
      introduction: "[Placeholder: approved personal introduction]",
      portrait: "[Placeholder: personal photo]",
      educationHeading: "Pendidikan & sertifikasi",
      education: [
        "Telkom University, Bachelor of Computer Science, 2014-2019.",
        "Alterra Academy, Frontend Engineer Immersive Program Batch 03, Jan-Mar 2022.",
        "Hacktiv8, AI Productivity and AI API Integration for Developers, May 2026, 10 hours.",
        "IDN.ID Training Center, Android Kotlin, Aug 2026, 32 hours.",
      ],
    },
    contact: {
      heading: "Mari terhubung.",
      englishHeading: "Let's connect.",
      links: [
        { label: "adiwirizki@gmail.com", href: "mailto:adiwirizki@gmail.com" },
        { label: "linkedin.com/in/mrizkiaw", href: "https://linkedin.com/in/mrizkiaw" },
        { label: "+62 812 2541 9228", href: "tel:+6281225419228" },
      ],
    },
    caseStudy: {
      back: "Kembali ke karya",
      title: "Aplikasi Konsolidator Data Ditjen Adwil",
      purpose: "Konsolidasi dan integrasi data antarsistem.",
      sections: [
        { title: "Overview", value: "[Placeholder: overview details]" },
        { title: "Problem", value: "[Placeholder: problem details]" },
        { title: "My role", value: "[Placeholder: role and contributions]" },
        { title: "Decisions", value: "[Placeholder: decision rationale]" },
        { title: "Outcome", value: "[Placeholder: outcome or evidence]" },
      ],
      visual: "NDA-safe visual placeholder",
    },
    footer: { identity: "Frontend Software Engineer di Jakarta, Indonesia.", navigation: "Navigasi", contact: "Kontak" },
    language: "Bahasa",
  },
  en: {
    navigation: { work: "Work", capabilities: "Capabilities", experience: "Experience", about: "About", contact: "Contact me" },
    hero: {
      eyebrow: "Frontend Software Engineer",
      description: "I turn complex interfaces into responsive, user-friendly web applications, with over 5 years of frontend experience.",
      workCta: "View work",
      contactCta: "Contact me",
      visualLabel: "Abstract geometric visual placeholder",
    },
    future: "This section will be added after approval.",
    capabilities: {
      heading: "Interfaces. Data. Integration.",
      frontend: { title: "Frontend Engineering", description: "Responsive, accessible interfaces and performance." },
      data: { title: "Data & GIS", description: "Spatial data processing and visualization." },
      integration: { title: "Integration & Automation", description: "REST API, Node.js automation, and Gemini API." },
    },
    selectedWork: {
      eyebrow: "Selected work",
      heading: "Systems that help complex data move more clearly.",
      flagship: { title: "Aplikasi Konsolidator Data Ditjen Adwil", description: "Konsolidasi dan integrasi data antarsistem.", link: "Read case study" },
      projects: [
        { title: "LEGASI", description: "Spatial data visualization." },
        { title: "RedKar", description: "Location-based incident reporting." },
        { title: "W-Track", description: "EDC maintenance ticketing." },
      ],
      placeholder: "NDA-safe visual / placeholder",
    },
    process: {
      eyebrow: "Process",
      heading: "From needs to systems people can use.",
      pending: "Provisional wording - awaiting factual confirmation.",
      steps: ["Understand the need", "Build & integrate", "Validate & refine"],
      visual: "Abstract process visual placeholder",
    },
    experience: {
      eyebrow: "Experience",
      heading: "Professional experience",
      placeholder: "[Placeholder: contributions and role details await the full CV]",
      entries: [
        { date: "Feb 2025-Present", role: "Software & Web Developer", company: "Kementerian Dalam Negeri, Ditjen Bina Adwil" },
        { date: "May 2022-May 2025", role: "Frontend Engineer", company: "PT. Wide Technologies Indonesia" },
        { date: "Oct 2019-Aug 2021", role: "Frontend Specialist", company: "PT. BFI Finance Indonesia Tbk" },
      ],
    },
    toolbox: {
      eyebrow: "Toolbox",
      heading: "Technologies in the toolkit",
      note: "Starter list - may expand after the full CV is reviewed.",
      groups: [
        { title: "Frontend", items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
        { title: "State & API", items: ["Redux", "Zustand", "Axios", "REST"] },
        { title: "Data & GIS", items: ["PostgreSQL", "PostGIS", "QGIS", "ArcGIS"] },
        { title: "Backend & Automation", items: ["Node.js", "Supabase"] },
        { title: "AI & Mobile", items: ["Gemini API", "Kotlin"] },
        { title: "Workflow", items: ["Git", "Figma", "Postman"] },
      ],
    },
    about: {
      eyebrow: "About",
      heading: "About Awenk",
      introduction: "[Placeholder: approved personal introduction]",
      portrait: "[Placeholder: personal photo]",
      educationHeading: "Education & certifications",
      education: [
        "Telkom University, Bachelor of Computer Science, 2014-2019.",
        "Alterra Academy, Frontend Engineer Immersive Program Batch 03, Jan-Mar 2022.",
        "Hacktiv8, AI Productivity and AI API Integration for Developers, May 2026, 10 hours.",
        "IDN.ID Training Center, Android Kotlin, Aug 2026, 32 hours.",
      ],
    },
    contact: {
      heading: "Let's connect.",
      englishHeading: "Let's connect.",
      links: [
        { label: "adiwirizki@gmail.com", href: "mailto:adiwirizki@gmail.com" },
        { label: "linkedin.com/in/mrizkiaw", href: "https://linkedin.com/in/mrizkiaw" },
        { label: "+62 812 2541 9228", href: "tel:+6281225419228" },
      ],
    },
    caseStudy: {
      back: "Back to work",
      title: "Aplikasi Konsolidator Data Ditjen Adwil",
      purpose: "Konsolidasi dan integrasi data antarsistem.",
      sections: [
        { title: "Overview", value: "[Placeholder: overview details]" },
        { title: "Problem", value: "[Placeholder: problem details]" },
        { title: "My role", value: "[Placeholder: role and contributions]" },
        { title: "Decisions", value: "[Placeholder: decision rationale]" },
        { title: "Outcome", value: "[Placeholder: outcome or evidence]" },
      ],
      visual: "NDA-safe visual placeholder",
    },
    footer: { identity: "Frontend Software Engineer in Jakarta, Indonesia.", navigation: "Navigation", contact: "Contact" },
    language: "Language",
  },
} as const;

export type LocalizedContent = (typeof content)[Language];

export const futureSections = [
  { id: "selected-work", label: "work" },
  { id: "capabilities", label: "capabilities" },
  { id: "experience", label: "experience" },
  { id: "about", label: "about" },
] as const;