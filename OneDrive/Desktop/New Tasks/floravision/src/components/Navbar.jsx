import { useMemo, useState } from "react";
import Plant from "../assets/images/plant.png";
import { SearchIcon, BagIcon, MenuIcon } from "./Icons";

const Chevron = (props) => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" {...props}>
    <path d="M5.19617 5.25L0 0h10.3923L5.19617 5.25Z" fill="currentColor" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plantsOpen, setPlantsOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#" },
      { label: "More", href: "#" },
      { label: "Contact", href: "#" },
    ],
    [],
  );

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto lg:max-w-9xl xs:max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={Plant}
            alt="FloraVision Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            FloraVision.
          </h2>
        </div>

        <ul className="hidden md:flex items-center lg:gap-8 gap-2">
          <li>
            <a
              href="#"
              className="font-indie-flower text-[22px] text-white hover:text-gray-200 transition-colors"
            >
              Home
            </a>
          </li>

          <li className="relative group font-indie-flower">
            <button className="flex items-center gap-2 text-[22px] text-white hover:text-gray-200 transition-colors py-2">
              Plants Type <Chevron className="text-white" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <a
                href="#"
                className="block px-4 py-3 font-indie-flower text-[20px] text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-t-xl"
              >
                Indoor Plants
              </a>
              <a
                href="#"
                className="block px-4 py-3 font-indie-flower text-[20px] text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                Outdoor Plants
              </a>
              <a
                href="#"
                className="block px-4 py-3 font-indie-flower text-[20px] text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-b-xl"
              >
                Succulents
              </a>
            </div>
          </li>

          {links.slice(1).map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-indie-flower text-[22px] text-white hover:text-gray-200 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 sm:gap-5">
          <button
            aria-label="Search"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <SearchIcon className="w-6 h-6" />
          </button>
          <button
            aria-label="Shopping Bag"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <BagIcon className="w-6 h-6" />
          </button>

          <button
            aria-label="Menu"
            className="md:hidden text-white hover:text-gray-200 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>

          <button
            aria-label="Menu"
            className="hidden md:inline-flex text-white hover:text-gray-200 transition-colors"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-6">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
            <a
              href="#"
              className="block px-5 py-4 text-white font-indie-flower text-[22px] border-b border-white/10"
            >
              Home
            </a>

            <button
              className="w-full flex items-center justify-between px-5 py-4 text-white font-indie-flower text-[22px] border-b border-white/10"
              onClick={() => setPlantsOpen((v) => !v)}
            >
              Plants Type
              <Chevron
                className={`text-white transition-transform ${plantsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${plantsOpen ? "max-h-40" : "max-h-0"}`}
            >
              <a
                href="#"
                className="block px-7 py-3 text-white/90 font-indie-flower text-[20px] hover:bg-white/10"
              >
                Indoor Plants
              </a>
              <a
                href="#"
                className="block px-7 py-3 text-white/90 font-indie-flower text-[20px] hover:bg-white/10"
              >
                Outdoor Plants
              </a>
              <a
                href="#"
                className="block px-7 py-3 text-white/90 font-indie-flower text-[20px] hover:bg-white/10"
              >
                Succulents
              </a>
            </div>

            {links.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block px-5 py-4 text-white font-indie-flower text-[22px] border-t border-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
