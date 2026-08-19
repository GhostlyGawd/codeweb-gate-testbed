// Presentation helpers. `collapseSpaces` is deliberately module-private with exactly one
// caller: the gate's lost-all-callers rule exempts exported symbols, so the regression
// fixture only fires when the private helper's sole call site disappears.

function collapseSpaces(text) {
  return String(text).replace(/\s+/g, ' ').trim();
}

export function formatLabel(raw) {
  const collapsed = collapseSpaces(raw);
  if (!collapsed) return '(untitled)';
  return collapsed[0].toUpperCase() + collapsed.slice(1);
}

export function formatCount(value) {
  const count = Number.isFinite(value) ? Math.trunc(value) : 0;
  return count === 1 ? '1 item' : `${count} items`;
}

export function formatPercent(part, whole) {
  if (!whole) return '0%';
  return `${Math.round((part / whole) * 100)}%`;
}

import { renderRow } from './report.mjs';

export function decorateRow(row) {
  return renderRow(row).toUpperCase();
}
