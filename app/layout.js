export const metadata = {
  title: 'Shopping List',
};

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
