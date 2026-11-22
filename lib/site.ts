/**
 * TODO(mat): Confirm the public inbox before launch.
 * hello@mat.co is a placeholder so the demo form, footer, and metadata
 * have one address to change. The form only opens a mailto draft.
 */
export const contactEmail = "hello@mat.co";

export const site = {
  name: "MAT Labs",
  legalName: "MAT Labs Inc.",
  url: "https://mat.co",
  title: "MAT Labs — Spatial Phase Imaging",
  description:
    "MAT Labs builds Spatial Phase Imaging, a 3D vision format, and Figure OS. The closest thing to a human eye for today's machines.",
  slogan: "Oculi ex Machina",
  email: contactEmail,
} as const;

export const nav = [
  { href: "#technology", label: "Technology" },
  { href: "#figure-os", label: "Figure OS" },
  { href: "#markets", label: "Markets" },
  { href: "#company", label: "Company" },
  { href: "#merch", label: "Merch" },
] as const;
