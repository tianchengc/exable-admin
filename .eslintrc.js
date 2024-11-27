module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "react-app",
        "react-app/jest"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": ['off'],
        "semi": ["error", "never", { "beforeStatementContinuationChars": "always" }],
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": [
            "warn",
            {
                "allowSingleExtends": true,
            }
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/no-explicit-any": "off",
        "prefer-template": 'error',
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "extendDefaults": true,
                "types": {
                    "{}": false
                }
            }
        ],
        "react/prop-types": 'off'
    }
};
