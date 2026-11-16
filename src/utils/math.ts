import katex from 'katex';

/**
 * Render LaTeX math to static HTML at build time using KaTeX (no client JS required).
 */
export function renderMath(tex: string, displayMode = false): string {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: false,
  });
}
