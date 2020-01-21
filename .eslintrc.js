module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "no-console": 0,
      "no-param-reassign": [2, {"props": false}],
      "prefer-destructuring": 1,
      "arrow-body-style": 1,
      "comma-dangle": 1,
      "indent": ["error", 4],
      "no-plusplus": 0,
      "no-param-reassign": 0,
      "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    },
    "env": {
      "commonjs": true,
      "node": true,
    }
  };
