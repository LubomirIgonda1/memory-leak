# Jest Memory Leak

In this repo is memory leak in test runner. That cause the heap grow up by 1MB - 2MB for each test file. I've used Jest version 24.0.18.

### Jest `v24.0.18` (memory leak)

```bash
$ npm run test:debug get.applications

PASS  tests/cases/api/get.applications2.test.ts (107 MB heap size)
...
PASS  tests/cases/api/get.applications2.test.ts (113 MB heap size)
PASS  tests/cases/api/get.applications17.test.ts (113 MB heap size)
PASS  tests/cases/api/get.applications23.test.ts (113 MB heap size)

Test Suites: 40 passed, 40 total
Tests:       200 passed, 200 total
Snapshots:   0 total
Time:        14.401s
Ran all test suites matching /get.applications/i.
```

```
