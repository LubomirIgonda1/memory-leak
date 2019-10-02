# Jest Memory Leak

There is a memory leak in test runner that causes the heap to grow monotonically by 2MB - 3MB for each test file.
It seems like the initial regression was introduced between versions `22.4.4` and `23.1.0` (`jest-circus` threw errors on each version I tried between the two).

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