const path = require('path');
module.exports = {
    root: true,
    extends: ['scratch', 'scratch/es6', 'scratch/react', 'plugin:import/errors'],
    env: {
        browser: true
    },
    globals: {
        process: true
    },
    rules: {
        'no-warning-comments': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'error',
        'react/jsx-no-literals': 'error',
        'no-confusing-arrow': ['error', {
            'allowParens': true
        }]
    },
    settings: {
        "import/resolver": {
            webpack: {
                config: path.resolve(__dirname, "../webpack.config.js"),
            },
        },
        "import/no-nodejs-modules": "error",
        camelcase: [
            2,
            {
                properties: "never", // This is from the base `scratch` config
                allow: ["^UNSAFE_"], // Allow until migrated to new lifecycle methods
            },
        ],
    },
};
