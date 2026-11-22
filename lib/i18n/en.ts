export const en = {
  meta: {
    title: "MAT Labs — Spatial Phase Imaging",
    description:
      "MAT Labs builds Spatial Phase Imaging, a 3D vision format, and FiguraOS. The closest thing to a human eye for today's machines. Not LiDAR.",
    ogAlt: "Vision ex Machina. We give machines vision. MAT Labs.",
    skip: "Skip to content",
  },
  nav: {
    primary: "Primary",
    home: "Labs, home",
    technology: "Technology",
    markets: "Markets",
    company: "Company",
    merch: "Merch",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  footer: {
    tagline: "Spatial Phase Imaging and FiguraOS.",
    index: "Index",
    nav: "Footer",
    contact: "Contact",
    flag: "Flag of the United States",
  },
  home: {
    hero: {
      sr: "Revolutionizing Vision. Reinventing ore mining, commerce, automotive and robotics.",
      line1: "Revolutionizing Vision.",
      reinventPrefix: "Reinventing ",
      reinventSuffix: "",
      words: ["Ore Mining", "Commerce", "Automotive", "Robotics"],
      subtitle: "The closest thing to a human eye for today’s machines.",
      notLidar: "Not LiDAR.",
      demo: "Request a demo",
      contact: "Contact",
      media:
        "A roadway recorded by the vision stack, with vehicles marked and given a position in the scene.",
    },
    tech: {
      tag: "SPI",
      title: "Light and structure, in one stream.",
      body: "Spatial Phase Imaging is a 3D vision format. The sensor records what a surface looks like and where it sits. FiguraOS reads that stream.",
      chipAlt: "The sensor, seen through its aperture, with the imaging surface lit in color.",
      chipTag: "Sensor",
      stack: [
        { kicker: "Format", title: "Spatial Phase Imaging", body: "Light and structure in one stream." },
        { kicker: "Capture", title: "The sensor", body: "High-resolution visual and 3D data, live." },
        { kicker: "Software", title: "FiguraOS", body: "People, pose, and form on that stream." },
        { kicker: "Record", title: "Mesh and surface", body: "Pixels on target. Texture on the mesh." },
      ],
    },
    figura: {
      title: "Software that reads shape.",
      body: "Named for the Latin figura, shape. FiguraOS runs vision models on the live Spatial Phase Imaging stream: people, pose, and the form of what is in frame.",
      imgAlt: "FiguraOS with a person marked for detection beside a pose skeleton and a position readout.",
    },
    record3d: {
      tag: "3D data",
      title: "Mesh, pixels, surface.",
      caption: "High-resolution mesh. Pixels on target. Triangle mesh. Surface texture map.",
    },
    mesh: {
      alt: "A face shown as a high-resolution mesh, pixels on target, a triangle mesh, and a surface texture map.",
      hint: "Drag to rotate · Ctrl + scroll to zoom",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      viewMode: "View mode",
      modes: { mesh: "Mesh", pixels: "Pixels", surface: "Surface" },
      disclaimer: "Sample model for illustration. Not MAT Labs sensor output.",
    },
    markets: {
      tag: "Markets",
      title: "Where machines have to see.",
      body: "MAT Labs supplies U.S. enterprises and U.S. government and defense programs.",
      tablist: "Markets",
      creditPrefix: "Ore Mining photo: Diego Delso,",
      creditSuffix: ", via Wikimedia Commons.",
      items: [
        {
          label: "Ore Mining",
          headline: "Vision for the haul road.",
          sub: "Distance and motion for heavy equipment, in dust, glare, and low light.",
          link: "Talk to us about Ore Mining",
          alt: "A Komatsu haul truck driving up a road inside an open-pit mine.",
        },
        {
          label: "Commerce",
          headline: "Know what happens at the counter.",
          sub: "People, pose, and motion in stores and at checkouts, from one 3D stream.",
          link: "Talk to us about Commerce",
          alt: "Two shoppers paying at a supermarket checkout while a cashier serves them.",
        },
        {
          label: "Automotive",
          headline: "The road, in depth.",
          sub: "Range and position for every vehicle in the scene, marked in the frame.",
          link: "Talk to us about Automotive",
          alt: "A highway scene rendered in false color, with vehicles labeled by range and position.",
        },
        {
          label: "Robotics",
          headline: "Eyes for machines that move.",
          sub: "Onboard 3D vision for drones and robots that navigate and inspect.",
          link: "Talk to us about Robotics",
          alt: "A quadcopter drone hovering in flight against a cloudy sky.",
        },
      ],
    },
    company: {
      tag: "Company",
      mati: "máti · Greek for eye",
      title: "Named for the eye.",
      body: "MAT comes from μάτι, máti, the Greek word for eye. The company is named for the work: the closest thing to a human eye for the machines of this era.",
      matiBody: "Eye. The word the company is named for.",
      figuraTitle: "Figura",
      figuraBody: "From the Latin figura, shape. FiguraOS is how the eye reads form.",
      vexmBody:
        "Vision, from the machine. A play on deus ex machina. Nothing is lowered in from outside. The machine produces the sight.",
    },
    capabilities: {
      tag: "Capabilities",
      title: "What the stream carries.",
      items: [
        { title: "People detection", body: "A person in the scene, marked on the live frame." },
        { title: "Pose tracking", body: "A skeleton on the body, updated as the body moves." },
        { title: "Face and body mesh", body: "High-resolution geometry of the person, not a flat outline." },
        { title: "Pixels on target", body: "The image samples that land on the subject." },
        { title: "Surface texture", body: "A texture map of the surface, aligned to the mesh." },
        {
          title: "Live stream",
          body: "Capture and models on the same clock. The frame is not stored first and read later.",
        },
      ],
    },
    specs: {
      tag: "Specifications",
      title: "The record.",
      caption:
        "What the stack produces. Numeric specifications are issued per program and are not listed here.",
      field: "Field",
      record: "Record",
      rows: [
        ["Format", "Spatial Phase Imaging"],
        ["Sensor", "3D and visual, live"],
        ["Software", "FiguraOS"],
        ["People", "Detection and pose"],
        ["Mesh", "Face and body"],
        ["Surface", "Texture map"],
        ["Pixels", "On target"],
        ["Timing", "Real time"],
        ["Figures", "Issued per program"],
      ] as [string, string][],
    },
    contact: {
      tag: "Contact",
      title: "Request a demo.",
      body: "Name the system and what it needs to see. Your request goes straight to our team.",
      motto: "Vision, from the machine.",
    },
  },
  form: {
    name: "Name",
    organization: "Organization",
    email: "Work email",
    interest: "Interest",
    select: "Select a market",
    /** Labels for the interest options. The submitted value stays English. */
    interests: {
      "Autonomous cars": "Autonomous cars",
      "Autonomous drones": "Autonomous drones",
      "Robots and androids": "Robots and androids",
      "Intelligent CCTV": "Intelligent CCTV",
      "Smart cities": "Smart cities",
      "Biometric payments": "Biometric payments",
      Other: "Other",
    },
    message: "What should the system see?",
    submit: "Request a demo",
    sending: "Sending…",
    sent: "Thanks. Your request was sent. We'll be in touch shortly.",
    fallback: "We couldn't send it directly, so we opened an email to {email}.",
  },
  about: {
    title: "About",
    description:
      "MAT Labs builds Spatial Phase Imaging and FiguraOS for U.S. enterprise and government. MAT is Greek for eye. The markets we build for are in the millions and billions.",
    tag: "About",
    h1: "We give machines an eye.",
    p1: "MAT Labs builds Spatial Phase Imaging (SPI) and FiguraOS, the software that reads people, pose and form from it. We sell to U.S. enterprises and U.S. government programs.",
    p2: "MAT comes from the Greek máti, the eye. Our line is Vision ex Machina. Here is how many machines are waiting for one.",
    figures: "Market figures",
    stats: [
      {
        label: "small drones will fly in U.S. airspace by 2029.",
        note: "FAA, base forecast for 2029: 1.93 million recreational plus 1.18 million commercial.",
      },
      {
        label: "consumer robots will ship worldwide in 2027, most of them for the home.",
        note: "Statista Market Insights forecast, units per year. Includes robot vacuums, toys and consumer drones.",
      },
      {
        label: "cars on the road have no driver-assistance sensing. They drive without machine vision.",
        note: "Yole Group, 2022: 12.3% of 1.3 billion cars on the road had ADAS. The other 87.7% is about 1.14 billion.",
      },
      {
        label: "credit cards that palm payments powered by MAT can replace.",
        note: "Nilson Report, year-end 2024: 3.61 billion credit cards on the global networks. Debit and prepaid add 14.5 billion more.",
      },
    ],
    ctaTitle: "Building for one of these?",
    cta: "Request a demo",
  },
  merch: {
    title: "Merch",
    description:
      "The MAT Labs shirt, mug and cap. Black, with the MAT ring. No store yet; ask and we'll tell you when one opens.",
    ogAlt: "MAT Labs cap",
    tag: "Merch",
    h1: "Vision ex Machina, wearable.",
    body: "MAT comes from the Greek máti, the eye. We put it on a shirt, a mug and a cap. No store yet.",
    products: "Products",
    items: [
      {
        name: "The Shirt",
        body: "Black tee. Small MAT mark on the chest, Vision ex Machina badge on the back.",
        alt: "Black MAT Labs t-shirt, small MAT logo on the front and Vision ex Machina badge on the back",
      },
      {
        name: "The Mug",
        body: "Black ceramic, white MAT ring.",
        alt: "Black mug with the white MAT ring logo",
      },
      {
        name: "The Cap",
        body: "Black cap, MAT ring embroidered on the front.",
        alt: "Black cap with the MAT ring logo embroidered on the front",
      },
    ],
    ask: "Ask about merch",
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Messages = Widen<typeof en>;
