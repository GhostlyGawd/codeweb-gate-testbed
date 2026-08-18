// The data layer: builds inventory rows the report renders.

export function buildRows(records) {
  const counts = new Map();
  for (const record of records) {
    counts.set(record.kind, (counts.get(record.kind) || 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

export function totalRecords(records) {
  return records.length;
}
