// src/data/tools.js
// Central config for all converter tools.
// Add new tools here — the rest of the app picks them up automatically.

export const TOOLS = {
  "pdf-to-word": {
    id: "pdf-to-word",
    name: "PDF to Word",
    emoji: "📄",
    from: "PDF",
    to: "Word",
    outputExt: ".docx",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#2563EB",
    lightBg: "#eff6ff",
    category: "pdf",
    description:
      "Convert PDF files to editable Word documents instantly. Free, fast, and accurate.",
    metaTitle: "PDF to Word Converter – Free Online | FileConvert",
    metaDesc:
      "Convert PDF to Word free online. Fast, accurate PDF to DOCX conversion with no signup required.",
    keywords: [
      "convert pdf to word free",
      "pdf to docx online",
      "pdf to word converter",
    ],
    steps: [
      "Upload your PDF file",
      "We extract text & formatting",
      "Download your Word document",
    ],
    faq: [
      {
        q: "Is PDF to Word conversion free?",
        a: "Yes! Our PDF to Word converter is completely free. No signup, no hidden fees.",
      },
      {
        q: "How accurate is the conversion?",
        a: "We preserve fonts, images, tables, and formatting as closely as possible.",
      },
      {
        q: "What file size is supported?",
        a: "Files up to 10MB are supported on the free plan.",
      },
      {
        q: "Is my file secure?",
        a: "All files are automatically deleted from our servers within 1 hour of upload.",
      },
    ],
  },

  "word-to-pdf": {
    id: "word-to-pdf",
    name: "Word to PDF",
    emoji: "📝",
    from: "Word",
    to: "PDF",
    outputExt: ".pdf",
    accept: ".doc,.docx",
    acceptMime:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword",
    color: "#7C3AED",
    lightBg: "#f5f3ff",
    category: "pdf",
    description:
      "Convert Word documents to PDF format. Keep your formatting intact and share professionally.",
    metaTitle: "Word to PDF Converter – Free Online | FileConvert",
    metaDesc:
      "Convert Word to PDF free online. Convert DOCX to PDF instantly with perfect formatting preserved.",
    keywords: [
      "word to pdf free",
      "docx to pdf online",
      "convert word document to pdf",
    ],
    steps: [
      "Upload your Word file",
      "We convert to PDF format",
      "Download your PDF",
    ],
    faq: [
      {
        q: "Does Word to PDF preserve formatting?",
        a: "Yes, fonts, images, tables, headers and footers are all preserved.",
      },
      {
        q: "Can I convert .doc files?",
        a: "Yes! We support both .doc and .docx formats.",
      },
      {
        q: "Is there a page limit?",
        a: "No page limit. Convert documents of any length for free.",
      },
      {
        q: "Do I need to install anything?",
        a: "No installation needed. Works directly in your browser.",
      },
    ],
  },

  "jpg-to-pdf": {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    emoji: "🖼️",
    from: "JPG / PNG",
    to: "PDF",
    outputExt: ".pdf",
    accept: ".jpg,.jpeg,.png",
    acceptMime: "image/jpeg,image/png",
    color: "#059669",
    lightBg: "#ecfdf5",
    category: "image",
    multiFile: true,
    description:
      "Convert JPG, PNG images to a PDF document. Combine multiple images into one PDF.",
    metaTitle: "JPG to PDF Converter – Free Online | FileConvert",
    metaDesc:
      "Convert JPG to PDF free online. Turn images into PDFs instantly. Supports JPG, PNG, multiple images.",
    keywords: [
      "jpg to pdf free",
      "image to pdf online",
      "convert jpg to pdf",
    ],
    steps: [
      "Upload your JPG / PNG images",
      "Arrange the order",
      "Download your PDF",
    ],
    faq: [
      {
        q: "Can I convert multiple images to one PDF?",
        a: "Yes! Upload multiple images and they'll be merged into a single PDF.",
      },
      {
        q: "What image formats are supported?",
        a: "JPG, JPEG, and PNG are all supported.",
      },
      {
        q: "Will image quality be maintained?",
        a: "We maintain high quality during conversion.",
      },
      {
        q: "Is there a limit on number of images?",
        a: "You can convert up to 20 images at once for free.",
      },
    ],
  },

  "pdf-to-jpg": {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    emoji: "📸",
    from: "PDF",
    to: "JPG",
    outputExt: ".zip",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#DC2626",
    lightBg: "#fef2f2",
    category: "pdf",
    description:
      "Extract pages from PDF as high-quality JPG images. Perfect for presentations and sharing.",
    metaTitle: "PDF to JPG Converter – Free Online | FileConvert",
    metaDesc:
      "Convert PDF to JPG free online. Extract PDF pages as high-quality images instantly.",
    keywords: [
      "pdf to jpg free",
      "pdf to image online",
      "convert pdf to jpeg",
    ],
    steps: [
      "Upload your PDF file",
      "Each page is extracted",
      "Download your JPG images",
    ],
    faq: [
      {
        q: "What resolution are the output JPGs?",
        a: "We output at 150 DPI by default, suitable for most uses.",
      },
      {
        q: "Can I extract specific pages?",
        a: "Yes, you can specify which pages to convert.",
      },
      {
        q: "Are multi-page PDFs supported?",
        a: "Yes. Each page becomes a separate JPG image.",
      },
      {
        q: "How long does conversion take?",
        a: "Usually under 10 seconds for most PDFs.",
      },
    ],
  },

  "png-to-ico": {
    id: "png-to-ico",
    name: "PNG to ICO",
    emoji: "⭐",
    from: "PNG",
    to: "ICO",
    outputExt: ".ico",
    accept: ".png",
    acceptMime: "image/png",
    color: "#D97706",
    lightBg: "#fffbeb",
    category: "image",
    description:
      "Convert PNG images to ICO favicon format. Perfect for website favicons and app icons.",
    metaTitle: "PNG to ICO Converter – Free Favicon Maker | FileConvert",
    metaDesc:
      "Convert PNG to ICO free online. Create website favicons from PNG images instantly.",
    keywords: [
      "png to ico free",
      "favicon converter",
      "convert png to ico online",
    ],
    steps: [
      "Upload your PNG image",
      "We generate all icon sizes",
      "Download your ICO file",
    ],
    faq: [
      {
        q: "What sizes does the ICO contain?",
        a: "We generate 16×16, 32×32, 48×48, and 64×64 sizes in one ICO file.",
      },
      {
        q: "What's the ideal PNG size for favicon?",
        a: "Use at least 64×64 pixels for the best result.",
      },
      {
        q: "Can I use this for my website?",
        a: "Yes! The output ICO is ready to use as a browser favicon.",
      },
      {
        q: "Does it support transparency?",
        a: "Yes, transparency from your PNG is preserved in the ICO.",
      },
    ],
  },

  "merge-pdf": {
    id: "merge-pdf",
    name: "Merge PDF",
    emoji: "📎",
    from: "PDFs",
    to: "PDF",
    outputExt: ".pdf",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#0891B2",
    lightBg: "#ecfeff",
    category: "pdf",
    multiFile: true,
    description:
      "Combine multiple PDF files into a single document. Drag to reorder pages before merging.",
    metaTitle: "Merge PDF Files – Free Online Combiner | FileConvert",
    metaDesc:
      "Merge multiple PDF files into one free online. Combine PDFs instantly, no signup needed.",
    keywords: [
      "merge pdf free",
      "combine pdf online",
      "join pdf files",
    ],
    steps: [
      "Upload multiple PDF files",
      "Arrange the order",
      "Download merged PDF",
    ],
    faq: [
      {
        q: "How many PDFs can I merge?",
        a: "You can merge up to 10 PDFs at once for free.",
      },
      {
        q: "Will the page order be preserved?",
        a: "Yes. You can also drag and drop to reorder files before merging.",
      },
      {
        q: "Is the original quality maintained?",
        a: "Yes, we don't re-compress or alter the content.",
      },
      {
        q: "Can I merge password-protected PDFs?",
        a: "Password-protected PDFs are not supported currently.",
      },
    ],
  },


  "excel-to-pdf": {
    id: "excel-to-pdf",
    name: "Excel to PDF",
    emoji: "📊",
    from: "Excel",
    to: "PDF",
    outputExt: ".pdf",
    accept: ".xls,.xlsx",
    acceptMime: "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    color: "#16A34A",
    lightBg: "#f0fdf4",
    category: "pdf",
    description: "Convert Excel spreadsheets to PDF. Preserve tables, charts, and formatting perfectly.",
    metaTitle: "Excel to PDF Converter – Free Online | FileConvert",
    metaDesc: "Convert Excel to PDF free online. Turn XLS and XLSX files into PDFs instantly.",
    keywords: ["excel to pdf free", "xlsx to pdf online", "convert spreadsheet to pdf"],
    steps: ["Upload your Excel file", "We convert all sheets", "Download your PDF"],
    faq: [
      { q: "Does it support both .xls and .xlsx?", a: "Yes, we support both legacy .xls and modern .xlsx formats." },
      { q: "Are multiple sheets converted?", a: "Yes, all sheets in the workbook are included in the output PDF." },
      { q: "Will charts and formatting be preserved?", a: "Tables and cell formatting are preserved as closely as possible." },
      { q: "What is the file size limit?", a: "Up to 10MB on the free plan." },
    ],
  },

  "ppt-to-pdf": {
    id: "ppt-to-pdf",
    name: "PPT to PDF",
    emoji: "📑",
    from: "PowerPoint",
    to: "PDF",
    outputExt: ".pdf",
    accept: ".ppt,.pptx",
    acceptMime: "application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
    color: "#EA580C",
    lightBg: "#fff7ed",
    category: "pdf",
    description: "Convert PowerPoint presentations to PDF. Each slide becomes a page in the PDF.",
    metaTitle: "PPT to PDF Converter – Free Online | FileConvert",
    metaDesc: "Convert PowerPoint to PDF free online. Turn PPTX presentations into PDFs instantly.",
    keywords: ["ppt to pdf free", "pptx to pdf online", "convert powerpoint to pdf"],
    steps: ["Upload your PPT/PPTX file", "Each slide is converted", "Download your PDF"],
    faq: [
      { q: "Does it support both .ppt and .pptx?", a: "Yes, both older .ppt and modern .pptx formats are supported." },
      { q: "Is one page created per slide?", a: "Yes, each slide in your presentation becomes a separate page in the PDF." },
      { q: "Are images and shapes preserved?", a: "Text, images, and basic shapes are preserved in the output." },
      { q: "What is the file size limit?", a: "Up to 10MB on the free plan." },
    ],
  },

  "pdf-to-png": {
    id: "pdf-to-png",
    name: "PDF to PNG",
    emoji: "🖼️",
    from: "PDF",
    to: "PNG",
    outputExt: ".zip",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#0284C7",
    lightBg: "#f0f9ff",
    category: "pdf",
    description: "Convert PDF pages to high-quality PNG images. Better quality than JPG with lossless compression.",
    metaTitle: "PDF to PNG Converter – Free Online | FileConvert",
    metaDesc: "Convert PDF to PNG free online. Extract PDF pages as high-quality PNG images instantly.",
    keywords: ["pdf to png free", "pdf to image png online", "convert pdf to png"],
    steps: ["Upload your PDF file", "Each page is rendered", "Download your PNG images"],
    faq: [
      { q: "What is the output resolution?", a: "We render at 150 DPI by default, giving sharp, clear images." },
      { q: "Why PNG instead of JPG?", a: "PNG is lossless — ideal for documents with text and sharp edges." },
      { q: "Are multi-page PDFs supported?", a: "Yes. Each page becomes a separate PNG image in a ZIP file." },
      { q: "What is the file size limit?", a: "Up to 10MB on the free plan." },
    ],
  },

  "compress-image": {
    id: "compress-image",
    name: "Compress Image",
    emoji: "🗜️",
    from: "JPG / PNG",
    to: "Compressed Image",
    outputExt: ".jpg",
    accept: ".jpg,.jpeg,.png",
    acceptMime: "image/jpeg,image/png",
    color: "#9333EA",
    lightBg: "#faf5ff",
    category: "image",
    description: "Compress JPG and PNG images to reduce file size. Keep great quality at a fraction of the size.",
    metaTitle: "Compress Image Online – Free | FileConvert",
    metaDesc: "Compress JPG and PNG images free online. Reduce image file size without losing quality.",
    keywords: ["compress image free", "reduce image size online", "jpg compressor online"],
    steps: ["Upload your JPG or PNG", "We optimise the image", "Download compressed file"],
    faq: [
      { q: "How much can you reduce the size?", a: "Typically 40–80% smaller depending on the original image." },
      { q: "Will quality be affected?", a: "We use smart compression that keeps images looking sharp." },
      { q: "Which formats are supported?", a: "JPG and PNG are both supported." },
      { q: "What is the file size limit?", a: "Up to 10MB on the free plan." },
    ],
  },

  "unlock-pdf": {
    id: "unlock-pdf",
    name: "Unlock PDF",
    emoji: "🔓",
    from: "PDF (Protected)",
    to: "PDF (Unlocked)",
    outputExt: ".pdf",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#DC2626",
    lightBg: "#fef2f2",
    category: "pdf",
    description: "Remove password protection from PDF files. Unlock PDFs you own for easy access and editing.",
    metaTitle: "Unlock PDF – Remove PDF Password Free | FileConvert",
    metaDesc: "Remove password from PDF free online. Unlock protected PDFs instantly — no software needed.",
    keywords: ["unlock pdf free", "remove pdf password online", "pdf password remover"],
    steps: ["Upload your protected PDF", "Enter the password", "Download unlocked PDF"],
    faq: [
      { q: "Do I need to know the password?", a: "Yes — we can only remove passwords from PDFs you own and have the password for." },
      { q: "Is this legal?", a: "Yes, removing password protection from your own documents is perfectly legal." },
      { q: "What types of protection are removed?", a: "We remove the open password so the file can be accessed without entering one." },
      { q: "Is my file secure?", a: "Files are processed on secure servers and deleted automatically within 1 hour." },
    ],
  },
  "compress-pdf": {
    id: "compress-pdf",
    name: "Compress PDF",
    emoji: "🗜️",
    from: "PDF",
    to: "PDF (Compressed)",
    outputExt: ".pdf",
    accept: ".pdf",
    acceptMime: "application/pdf",
    color: "#7C3AED",
    lightBg: "#faf5ff",
    category: "pdf",
    description:
      "Reduce PDF file size without sacrificing quality. Ideal for emailing or uploading PDFs.",
    metaTitle: "Compress PDF – Reduce PDF Size Free | FileConvert",
    metaDesc:
      "Compress PDF files online free. Reduce PDF size by up to 80% while maintaining quality.",
    keywords: [
      "compress pdf free",
      "reduce pdf size online",
      "pdf compressor",
    ],
    steps: [
      "Upload your PDF file",
      "We optimize and compress",
      "Download smaller PDF",
    ],
    faq: [
      {
        q: "How much can you reduce the file size?",
        a: "Typically 30–80% reduction depending on the content.",
      },
      {
        q: "Will the quality be affected?",
        a: "We use smart compression that maintains visual quality.",
      },
      {
        q: "What is the maximum file size?",
        a: "Up to 10MB on the free plan.",
      },
      {
        q: "Is batch compression available?",
        a: "Batch compression is available on our Pro plan.",
      },
    ],
  },
};

export const TOOL_LIST = Object.values(TOOLS);

export const PDF_TOOLS = TOOL_LIST.filter((t) => t.category === "pdf");
export const IMAGE_TOOLS = TOOL_LIST.filter((t) => t.category === "image");
