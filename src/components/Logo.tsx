type LogoProps = {
  className?: string;
  /** "dark" renders the wordmark in light colours for use on the navy background */
  tone?: "light" | "dark";
};

const NAVY = "#14273d";
const ICE = "#3e9bd0";
const SLATE = "#7b93a9";

/**
 * Claremont Refrigeration lockup — navy tile with a snowflake mark plus wordmark.
 * Rebuilt as inline SVG so it stays crisp at any size and adapts to dark surfaces.
 */
export function Logo({ className, tone = "light" }: LogoProps) {
  const wordmark = tone === "dark" ? "#ffffff" : NAVY;
  const strap = tone === "dark" ? "#a9bccc" : SLATE;
  const tile = tone === "dark" ? "#ffffff" : NAVY;
  const flake = tone === "dark" ? NAVY : ICE;

  return (
    <svg
      viewBox="0 0 470 120"
      className={className}
      role="img"
      aria-label="Claremont Refrigeration, established 1955"
    >
      <rect x="2" y="10" width="100" height="100" rx="22" fill={tile} />
      <g
        stroke={flake}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 52 60)`}>
            <line x1="52" y1="60" x2="52" y2="22" />
            <line x1="52" y1="33" x2="43" y2="24" />
            <line x1="52" y1="33" x2="61" y2="24" />
            <line x1="52" y1="45" x2="44.5" y2="37.5" />
            <line x1="52" y1="45" x2="59.5" y2="37.5" />
          </g>
        ))}
      </g>

      <rect x="122" y="18" width="6" height="84" rx="3" fill={ICE} />

      <text
        x="146"
        y="52"
        fill={wordmark}
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="0.5"
      >
        CLAREMONT
      </text>
      <text
        x="148"
        y="84"
        fill={wordmark}
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="25.5"
        fontWeight="700"
        letterSpacing="7.3"
      >
        REFRIGERATION
      </text>
      <text
        x="148"
        y="107"
        fill={strap}
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="3.4"
      >
        EST. 1955
      </text>
    </svg>
  );
}
