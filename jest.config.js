module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "ts"
    ],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: [
        "**/tests/**/*.(spec|test).(js|jsx|ts|tsx)",
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/*.{js,ts}",
        "!**/node_modules/**",
        "!**/*.d.ts"
    ],
    "testResultsProcessor": "jest-sonar-reporter",
    "verbose": true,
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80,
        },
    },
    "coverageReporters": [
        "json",
        "lcov",
        "text",
    ]
};