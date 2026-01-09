import { Facebook, Instagram, Linkedin, Music2, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const CONTACT_INFO = [
  {
    icon: <FaMapMarkerAlt size={16} />,
    text: "House: B/148 (5th Floor), Road: 22 Mohakhali DOHS, Dhaka, Bangladesh, 1212",
  },
  {
    icon: <FaPhone size={16} />,
    text: "+880 1337 989719",
  },
  {
    icon: <IoMail size={16} />,
    text: "info@potherbazar.com",
  },
];

// Grouping sections into an array for easier mapping
const FOOTER_NAV_SECTIONS = [
  {
    title: "Information",
    links: [
      { label: "Become a Vendor", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Our Suppliers", href: "#" },
      { label: "Extended Plan", href: "#" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policies", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "My Account", href: "#" },
      { label: "Order History", href: "#" },
      { label: "Shopping Cart", href: "#" },
      { label: "Wishlist", href: "#" },
    ],
  },
  {
    title: "Shop by Category",
    links: [
      { label: "Organic Foods", href: "#" },
      { label: "Electronics", href: "#" },
      { label: "Lifestyle", href: "#" },
      { label: "Beauty & Personal Care", href: "#" },
      { label: "Toys & Baby Products", href: "#" },
      { label: "Mobile & Computers", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Linkedin size={18} />, href: "#" },
  { icon: <Instagram size={18} />, href: "#" },
  { icon: <Youtube size={18} />, href: "#" },
  { icon: <Music2 size={18} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-sidebar pt-12 md:pt-16 border-t border-slate-100">
      <div className="container mx-auto px-4 pb-12">
        {/* Main Layout: Column on Mobile, Row on Desktop */}
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-6">
          {/* Brand & Contact Column - Takes 100% on mobile, 25% on desktop */}
          <div className="space-y-6 md:space-y-10 w-full xl:w-[25%]">
            <div className="relative w-32 h-16">
              <Image
                src="/logo.png"
                alt="Potherbazar Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white p-2 rounded-full shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & Socials Container - Grid layout for mobile/tablet compatibility */}
          <div className="w-full xl:w-[75%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-4">
            {FOOTER_NAV_SECTIONS.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-semibold text-lg md:text-xl text-foreground">
                  {section.title}
                </h4>
                <div className="flex flex-col space-y-2 md:space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="text-sm md:text-base text-foreground/50 hover:text-emerald-600 transition-colors w-fit"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Follow Us Section */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h4 className="font-semibold text-lg md:text-xl text-foreground">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 hover:scale-110 transition-all shadow-sm flex items-center justify-center"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-emerald-600 md:h-20 h-10 mt-4">
        <div className="container mx-auto px-4 text-center flex items-center justify-center h-full">
          <p className="text-white text-[10px] sm:text-xs md:text-sm font-light">
            © Copyright 2025 Potherbazar All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
