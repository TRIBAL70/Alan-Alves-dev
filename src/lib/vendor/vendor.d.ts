declare module "@/lib/vendor/sky-chat.js" {
  export function mountSkyChat(root: HTMLElement, opts?: { tall?: boolean }): () => void;
  export function mountFloatingSky(): void;
}
declare module "@/lib/vendor/portfolio-neon.js" {
  export function startPortfolioNeon(): () => void;
}
