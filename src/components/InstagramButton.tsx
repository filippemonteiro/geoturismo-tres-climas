export function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/geoturismotresclimas/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Acesse nosso perfil no Instagram"
      className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#icon-gradient)"
        strokeWidth={2}
      >
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f57c00" /> 
            <stop offset="50%" stopColor="#d32f2f" /> 
            <stop offset="100%" stopColor="#1e88e5" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 7.5a.9.9 0 11-1.8 0 .9.9 0 011.8 0z"
        />
        <circle cx="12" cy="12" r="4.333" />
      </svg>
    </a>
  );
}