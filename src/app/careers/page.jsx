import { getJobs } from "@/lib/sanity";
import CareerPageClient from "./CareerPageClient";

// Re-checks Sanity for updated jobs at most once every 60 seconds.
// Client publishes a job in Studio -> live on the site within a minute, no redeploy needed.
export const revalidate = 60;

export default async function CareersPage() {
  const jobs = await getJobs();
  return <CareerPageClient jobs={jobs} />;
}
