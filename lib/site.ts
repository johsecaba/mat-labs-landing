/**
 * TODO(mat): Confirm the public inbox before launch.
 * hello@mat.co is a placeholder so the demo form, footer, and metadata
 * have one address to change. The form only opens a mailto draft.
 */
export const contactEmail = "hello@mat.co";
/** Inbox that receives demo requests from the contact form. */
export const demoEmail = "johan@mat.co";

export const site = {
  name: "MAT Labs",
  legalName: "MAT Labs Inc.",
  url: "https://mat.co",
  title: "MAT Labs — Spatial Phase Imaging",
  description:
    "MAT Labs builds Spatial Phase Imaging, a 3D vision format, and FiguraOS. The closest thing to a human eye for today's machines. Not LiDAR.",
  slogan: "Vision ex Machina",
  email: contactEmail,
} as const;

export const nav = [
  { href: "/#technology", label: "Technology" },
  { href: "/#figura-os", label: "FiguraOS" },
  { href: "/#markets", label: "Markets" },
  { href: "/#company", label: "Company" },
  { href: "/merch", label: "Merch" },
  { href: "/about", label: "About" },
] as const;
