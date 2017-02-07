module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "space-before-function-paren": ["error", "never"],
        "jsx-quotes": ["off", "prefer-single"]
    }
};