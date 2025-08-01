export const metadata = {
  title: "JRAMSYS INFOTECH",
  description: "Welcome to JRAMSYS INFOTECH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
