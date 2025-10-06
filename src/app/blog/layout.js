export const metadata = {
  title: "Thribe Community Blog and News",
  description: "These are conversations, masterclasses, and challenges designed to bring real techies together.",
};

export default function RootLayout({ children }) {
  return (
   <main>
    {children}
    </main>
  );
}