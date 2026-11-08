// The ">_ch" mark. Pass `dots` for the full version with the three window dots above it.
export default function Logo({ dots = false, className = "" }: { dots?: boolean; className?: string }) {
  const top = dots ? 56 : 0;
  return (
    <svg
      viewBox={`0 0 222 ${80 + top}`}
      className={className}
      role="img"
      aria-label="Chris Hirwa"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots && (
        <g>
          <circle cx="12" cy="12" r="11" fill="#9b45f2" />
          <circle cx="40" cy="12" r="11" fill="#8a69ca" />
          <circle cx="68" cy="12" r="11" fill="#77758a" />
        </g>
      )}
      <g transform={`translate(0 ${top})`}>
        <path d="M6 12 L46 38 L6 64" fill="none" stroke="#9b45f2" strokeWidth="13" strokeLinejoin="miter" />
        <rect x="56" y="62" width="46" height="12" rx="1.5" fill="#9b45f2" />
        <text
          x="110"
          y="74"
          fill="currentColor"
          fontFamily="var(--font-display)"
          fontSize="94"
          fontWeight="500"
          letterSpacing="-3"
        >
          ch
        </text>
      </g>
    </svg>
  );
}
