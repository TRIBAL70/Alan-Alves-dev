<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site is a 1:1 copy of the user's original portfolio: markup in src/components/site keeps the original Tailwind class names and is styled by the original compiled CSS in public/assets (site.css, sky.css, portfolio-neon.css), not src/styles.css — keeps visuals identical to the source site.
- Original vanilla scripts (Sky chat, portfolio slider) live in src/lib/vendor and are imported only inside useEffect — they touch the DOM and must not run during SSR.
