/* Hero da página inicial: arte original fornecida, sem redesenhar tipografia. */
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
      <span className="sr-only">Alan Alves</span>
      <img
        src="/assets/alan-alves-original-logo.webp"
        alt=""
        width={384}
        height={128}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <span className="alan-logo-light-sweep" aria-hidden="true" />
      <span className="alan-logo-flare alan-logo-flare-top" aria-hidden="true" />
      <span className="alan-logo-flare alan-logo-flare-bottom" aria-hidden="true" />
    </h1>
  );
}
