// src/components/Icons.jsx

export const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const BagIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

export const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Top line */}
    <line x1="4" y1="8" x2="20" y2="8"></line>
    {/* Bottom line (shorter, aligned right like in your image) */}
    <line x1="12" y1="16" x2="20" y2="16"></line>
  </svg>
);
export const Polygon = ({ className }) => (
  <svg
    width="23"
    height="26"
    viewBox="0 0 23 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.75"
      d="M21 9.93269C23 11.0874 23 13.9741 21 15.1288L4.49999 24.6551C2.49999 25.8098 -1.26045e-06 24.3664 -1.1595e-06 22.057L-3.26687e-07 3.00448C-2.25739e-07 0.695076 2.5 -0.748296 4.5 0.406405L21 9.93269Z"
      fill="white"
    />
  </svg>
);
export const Ecllipse = ({ className }) => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="37" cy="37" r="36" stroke="white" stroke-width="2" />
  </svg>
);
