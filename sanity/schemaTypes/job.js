export default {
  name: "job",
  title: "Job Posting",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (R) => R.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: ["Guntur, India", "London, UK", "USA"],
      },
      validation: (R) => R.required(),
    },
    {
      name: "area",
      title: "Area",
      type: "string",
      options: {
        list: [
          "Software Development",
          "Cloud & DevOps",
          "AI/ML/Data",
          "IoT/Smart City",
          "IT Consulting",
          "Design/UX",
        ],
      },
      validation: (R) => R.required(),
    },
    {
      name: "type",
      title: "Job Type",
      type: "string",
      options: {
        list: ["Full-time", "Part-time", "Contract", "Remote"],
      },
      validation: (R) => R.required(),
    },
    {
      name: "experience",
      title: "Min. Years Experience",
      type: "number",
      description: "Used to match against the site's experience-range filters (e.g. 2 matches '1-3 Years' and '3-5 Years' if within range).",
      validation: (R) => R.required().min(0),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (R) => R.required(),
    },
    {
      name: "isOpen",
      title: "Currently Open?",
      type: "boolean",
      description: "Turn off instead of deleting a job to quickly hide it from the site while keeping the record.",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      isOpen: "isOpen",
    },
    prepare({ title, subtitle, isOpen }) {
      return {
        title: `${isOpen ? "🟢" : "⚪️"} ${title}`,
        subtitle,
      };
    },
  },
};
