// Progressive enhancement: native horizontal scrolling remains available without JS.
let current;
function mount() {
  const rail = document.querySelector('#projetos > .overflow-x-auto');
  if (!rail || rail === current) return;
  current = rail;
  const control = document.createElement('div');
  control.className = 'portfolio-navigation';
  control.innerHTML = '<div class="portfolio-telemetry"><span>EXPLORE OS PROJETOS <span aria-hidden="true">↗</span></span><output aria-hidden="true">00%</output></div><div class="portfolio-energy"><span class="portfolio-charge"></span><input type="range" min="0" max="1000" value="0" aria-label="Rolar projetos horizontalmente"></div>';
  rail.after(control);
  rail.classList.add('portfolio-neon-rail');
  rail.tabIndex = 0;
  rail.setAttribute('aria-label', 'Projetos do portfólio; use as setas para explorar');
  const input = control.querySelector('input');
  const output = control.querySelector('output');
  let frame = 0;
  const update = () => {
    frame = 0;
    const max = rail.scrollWidth - rail.clientWidth;
    const progress = max > 1 ? Math.max(0, Math.min(1, rail.scrollLeft / max)) : 0;
    control.hidden = max <= 1;
    input.value = Math.round(progress * 1000);
    input.setAttribute('aria-valuetext', `${Math.round(progress * 100)}% dos projetos`);
    control.style.setProperty('--progress', `${progress * 100}%`);
    output.textContent = `${String(Math.round(progress * 100)).padStart(2, '0')}%`;
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  rail.addEventListener('scroll', schedule, {passive:true});
  input.addEventListener('input', () => { rail.scrollLeft = (rail.scrollWidth - rail.clientWidth) * Number(input.value) / 1000; });
  new ResizeObserver(schedule).observe(rail);
  new MutationObserver(schedule).observe(rail, {childList:true});
  update();
}
new MutationObserver(mount).observe(document.body, {childList:true, subtree:true});
mount();
