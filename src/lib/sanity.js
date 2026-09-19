import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, // fast, cached reads — fine for a public job listing page
});

// Fetches all jobs currently marked "open", newest first.
// Returned shape matches exactly what CareerPageClient's JobCard/filters expect.
export async function getJobs() {
  return client.fetch(`
    *[_type == "job" && isOpen == true] | order(_createdAt desc) {
      "id": _id,
      title,
      location,
      area,
      type,
      experience,
      description
    }
  `);
}
