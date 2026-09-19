export default function sitemap() {
  const baseUrl = "https://www.jramsysinfotech.com";
  const routes = [
    "",
    "/about",
    "/about/team",
    "/contact",
    "/careers",
    "/services/customer-services",
    "/services/iot-services",
    "/services/product-development",
    "/solutions/ai-ml-data-analytics",
    "/solutions/bpm-iot",
    "/solutions/cloud-computing",
    "/solutions/contextual-qr",
    "/solutions/custom-software",
    "/solutions/it-consulting",
    "/solutions/smart-waste",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}