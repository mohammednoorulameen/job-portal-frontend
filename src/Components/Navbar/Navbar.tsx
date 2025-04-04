// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@mantine/core";
// import { useMobile } from "@/Hooks/use.mobile";
// import JobCreationModal from "@/Components/modal/JobCreationModal";

// export default function Navbar() {
//   const isMobile = useMobile();
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   console.log("Modal open state:", isOpen); // Debugging log

//   return (
//     <header className="mx-auto my-6 flex max-h-[70px] max-w-[50%] items-center justify-center rounded-[50px] bg-white p-4 shadow-md">
//       <div className="container flex w-full justify-between">
//         <div className="flex items-center">
//           <Image
//             src="/job-portal-image.png?height=40&width=40"
//             alt="Logo"
//             width={40}
//             height={40}
//             className="ml-[-5px] filter hue-rotate-[290deg]"
//           />
//           {!isMobile && <NavigationLinks />}
//         </div>

//         <Button
//           className="rounded-full py-3 px-10 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white"
//           onClick={openModal} // Correct function call
//         >
//           Create Jobs
//         </Button>
//       </div>

//       {isOpen && (
//         <JobCreationModal isOpen={isOpen} onClose={closeModal} />
//       )}
//     </header>
//   );
// }

// function NavigationLinks() {
//   const links = ["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"];
//   return (
//     <div className="ml-10 flex items-center gap-10">
//       {links.map((link, index) => (
//         <Link
//           href="#"
//           key={index}
//           className={`text-sm ${index === links.length - 1 ? "font-normal" : "font-medium"}`}
//         >
//           {link}
//         </Link>
//       ))}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { useMobile } from "@/Hooks/use.mobile";
import JobCreationModal from "@/Components/modal/JobCreationModal";

export default function Header() {
  const isMobile = useMobile();

  /**
   * job creation modal open and close handling
   */

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header className="mx-auto my-6 flex max-h-[70px] max-w-[50%] items-center justify-center rounded-[50px] bg-white p-4 shadow-md">
      <div className="container flex w-full justify-between">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center">
          <Image
            src="/job-portal-image.png?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="ml-[-5px] filter hue-rotate-[290deg]"
          />
          {!isMobile && <NavigationLinks />}
        </div>

        {/* Right Side: Create Jobs Button */}
        <Button
          className="rounded-full py-3 px-10 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white"
          onClick={openModal}
        >
          Create Jobs
        </Button>
      </div>

      {isOpen && (
        <JobCreationModal isOpen={isOpen} onClose={closeModal} />
      )}
    </header>
  );
}

// Extracted Navigation Links Component
function NavigationLinks() {
  const links = [
    "Home",
    "Find Jobs",
    "Find Talents",
    "About us",
    "Testimonials",
  ];

  return (
    <div className="ml-10 flex items-center gap-10">
      {links.map((link, index) => (
        <Link
          href="#"
          key={index}
          className={`text-sm ${
            index === links.length - 1 ? "font-normal" : "font-medium"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
