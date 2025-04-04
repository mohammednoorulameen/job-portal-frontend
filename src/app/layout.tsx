

import { MantineProvider } from "@mantine/core";
import "./globals.css";
import { theme } from "@/app/theme"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
      <MantineProvider theme={theme}>{children}</MantineProvider>
          </body>
    </html>
  );
}


// import {Navbar,NavbarSecond} from "@/Components/jobs/Navbar/Navbar";
// import "./globals.css";


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar/>
//         <NavbarSecond/>
//         {children}
//       </body>
//     </html>
//   );
// }

