import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "LookUp-Home page",
  description: "Home Page for lookup search engine app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900  font-nunito text-white ">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
