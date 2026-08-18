# codeweb-gate-testbed

Fixture repository for validating the hosted **codeweb Teams** PR gate end to end.

The source under `src/` is seeded so that structural regressions are constructible:

- **Lost-all-callers fixture** — `collapseSpaces` in `src/format.mjs` is a NON-exported function
  with exactly one caller (`formatLabel`, same module). Deleting that sole call site makes the
  symbol lose all callers, which the gate blocks. Exported symbols are exempt from this rule, so
  the fixture must stay non-exported.
- **New-cycle fixture** — `src/report.mjs` imports `src/format.mjs` one-directionally. Adding any
  import of `report.mjs` back into `format.mjs` creates a new dependency cycle, which the gate blocks.

Every function name here is 3+ characters: the extractor drops shorter bare cross-file call names
as ambiguous, and a shorter name would silence the fixture for reasons unrelated to the gate.
