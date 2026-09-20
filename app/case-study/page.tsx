"use client";

import { useEffect, useState } from "react";
import { CaseStudy } from "../sections/CaseStudy/CaseStudy";
import { content, type Language } from "../content";

export default function CaseStudyPage() {
  const [language] = useState<Language>("id");
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <CaseStudy copy={content[language].caseStudy} />;
}
