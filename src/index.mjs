// Entry point: inventory records in, rendered report out.

import { buildRows, totalRecords } from './inventory.mjs';
import { renderReport } from './report.mjs';
import { formatCount } from './format.mjs';

export function summarize(records) {
  const rows = buildRows(records);
  return `${formatCount(totalRecords(records))}\n${renderReport(rows)}`;
}
