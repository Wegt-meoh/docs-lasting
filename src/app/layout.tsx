import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>docs lasting</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/highlight/highlight.min.js" />
        <link rel="stylesheet" href="/asciidoctor.default.css" />
        <link rel="stylesheet" href="/highlight/styles/default.min.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700"
        />
      </head>
      <body>
        <header className=" h-4 bg-slate-600">search bar here</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
