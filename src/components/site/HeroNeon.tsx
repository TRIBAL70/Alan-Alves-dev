/* Letreiro neon ALAN ALVES — isolado para preservar o restante do site. */
export function HeroAtmosphere() {
  return (
    <div className="alan-hero-atmosphere" aria-hidden="true">
      <span className="alan-smoke alan-smoke-blue-top" />
      <span className="alan-smoke alan-smoke-blue-bottom" />
      <span className="alan-smoke alan-smoke-purple-right" />
      <span className="alan-smoke alan-smoke-purple-bottom" />
      <span className="alan-light-trail alan-light-trail-blue" />
      <span className="alan-light-trail alan-light-trail-purple" />
      <span className="alan-hero-particles" />
    </div>
  );
}

export function HeroLogo() {
  return (
    <h1 className="alan-hero-logo" aria-label="Alan Alves">
      <span className="sr-only">ALAN ALVES</span>
      <svg viewBox="0 0 1100 335" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="alan-logo-metal" x1="0" y1="0" x2="0.25" y2="1">
            <stop offset="0%" stopColor="#f9fdff" />
            <stop offset="20%" stopColor="#a6c9ef" />
            <stop offset="34%" stopColor="#fcffff" />
            <stop offset="53%" stopColor="#8aa0d7" />
            <stop offset="70%" stopColor="#f9faff" />
            <stop offset="88%" stopColor="#5771b8" />
            <stop offset="100%" stopColor="#b83ffe" />
          </linearGradient>
          <linearGradient id="alan-logo-edge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00eaff" />
            <stop offset="42%" stopColor="#2977ff" />
            <stop offset="62%" stopColor="#a746ff" />
            <stop offset="100%" stopColor="#f128f8" />
          </linearGradient>
          <linearGradient id="alan-logo-circuits" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#12cfff" /><stop offset="53%" stopColor="#5588ff" /><stop offset="100%" stopColor="#fa27fb" />
          </linearGradient>
          <radialGradient id="alan-logo-aura"><stop stopColor="#5337ff" stopOpacity=".42"/><stop offset="80%" stopColor="#1a0c54" stopOpacity=".08"/><stop offset="100%" stopOpacity="0"/></radialGradient>
          <filter id="alan-logo-blur" x="-60%" y="-100%" width="220%" height="300%"><feGaussianBlur stdDeviation="6"/></filter>
          <filter id="alan-logo-star-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <ellipse cx="555" cy="165" rx="315" ry="164" fill="url(#alan-logo-aura)"/>
        <g fill="none" transform="translate(555 168)">
          <circle r="157" stroke="#103c9d" strokeWidth="14" opacity=".52"/>
          <circle r="152" stroke="#06d1ff" strokeWidth="4" opacity=".96" className="alan-hud-spin"/>
          <circle r="136" stroke="#776aff" strokeWidth="4" strokeDasharray="7 12" opacity=".76" className="alan-hud-spin-reverse"/>
          <circle r="127" stroke="#723cff" strokeWidth="2" strokeDasharray="3 9" opacity=".6"/>
        </g>
        <g className="alan-circuit" fill="none" stroke="url(#alan-logo-circuits)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 115H120l35-34h185l23 24h135" />
          <path d="M3 160h110l28-25h180l40 38h110" opacity=".8"/>
          <path d="M33 229h133l33 31h211l25-27h70" />
          <path d="M49 277h158l26 24h224" opacity=".65"/>
          <path d="M1092 115H985l-35-34H760l-23 24H610"/>
          <path d="M1098 160H986l-28-25H778l-40 38H640" opacity=".85"/>
          <path d="M1064 229H931l-33 31H687l-25-27h-70"/>
          <path d="M1049 277H891l-26 24H650" opacity=".65"/>
        </g>
        <g fill="#c2f8ff" className="alan-circuit-points">
          <circle cx="8" cy="115" r="7"/><circle cx="3" cy="160" r="6"/><circle cx="33" cy="229" r="6"/><circle cx="49" cy="277" r="4"/>
          <circle cx="1092" cy="115" r="7"/><circle cx="1098" cy="160" r="6"/><circle cx="1064" cy="229" r="6"/><circle cx="1049" cy="277" r="4"/>
        </g>
        <g className="alan-title-text">
          <text x="550" y="220" textAnchor="middle" textLength="930" lengthAdjust="spacingAndGlyphs" className="alan-logo-lettering alan-logo-blurred" fill="none" stroke="url(#alan-logo-edge)" strokeWidth="12" filter="url(#alan-logo-blur)">ALAN ALVES</text>
          <text x="550" y="220" textAnchor="middle" textLength="930" lengthAdjust="spacingAndGlyphs" className="alan-logo-lettering" fill="url(#alan-logo-metal)" stroke="#060c27" strokeWidth="10" paintOrder="stroke fill" strokeLinejoin="round">ALAN ALVES</text>
          <text x="550" y="220" textAnchor="middle" textLength="930" lengthAdjust="spacingAndGlyphs" className="alan-logo-lettering alan-logo-shimmer" fill="none" stroke="url(#alan-logo-edge)" strokeWidth="1.5">ALAN ALVES</text>
          <path d="M70 242C112 175 163 169 218 199C277 232 320 278 401 256" fill="none" stroke="url(#alan-logo-edge)" strokeWidth="6" strokeLinecap="round" opacity=".9"/>
          <path d="M485 243C533 168 585 172 642 211C692 247 741 268 817 248" fill="none" stroke="url(#alan-logo-edge)" strokeWidth="6" strokeLinecap="round" opacity=".9"/>
        </g>
        <g className="alan-logo-spark" fill="#fffaff">
          <path d="M555 2Q564 49 581 59Q563 65 555 113Q548 66 527 59Q549 50 555 2Z" filter="url(#alan-logo-star-glow)" opacity=".85"/>
          <path d="M555 9Q561 50 576 59Q559 68 555 107Q549 68 534 59Q551 51 555 9Z"/>
        </g>
        <g className="alan-logo-spark alan-logo-spark-bottom" fill="#f6e6ff">
          <path d="M555 232Q562 278 579 286Q563 294 555 335Q547 291 533 286Q549 276 555 232Z" filter="url(#alan-logo-star-glow)" opacity=".8"/>
          <path d="M555 242Q561 276 574 286Q561 296 555 327Q549 294 538 286Q549 277 555 242Z"/>
        </g>
      </svg>
    </h1>
  );
}
