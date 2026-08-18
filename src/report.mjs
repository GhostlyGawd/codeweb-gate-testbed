// Renders inventory rows as plain text. Imports format.mjs one-directionally: format.mjs must
// never import back, or the gate reports a new dependency cycle.

import { formatLabel, formatCount, formatPercent } from './format.mjs';

export function renderRow(row) {
  return `${formatLabel(row.name)}: ${formatCount(row.count)}`;
}

export function renderReport(rows) {
  const total = rows.reduce((sum, row) => sum + row.count, 0);
  const lines = rows.map((row) => `${renderRow(row)} (${formatPercent(row.count, total)})`);
  return lines.join('\n');
}
