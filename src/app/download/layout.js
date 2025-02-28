import { metadata } from "@/lib/metadata";

export default function AboutLayout({ children }) {
  const pageMeta = metadata.downloads;
  return (
    <html lang="en">
      <body>
        <head>
          <title>{pageMeta.title}</title>
          <meta name="description" content={pageMeta.description} />
          <meta name="keywords" content={pageMeta.keywords.join(", ")} />
        </head>
        <main>
          <h1>Halaman About</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
