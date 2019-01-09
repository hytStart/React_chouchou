const rules = {
    semi: [2, 'never'],
    indent: [2, 4],
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-indent-props': [2, 4],
    'react/jsx-indent': [2, 4],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-boolean-value': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],
    'linebreak-style': 0,

    'max-len': ['error', { code: 180 }],
    'import/no-unresolved': 'off',
    'import/extensions': 'ignorePackages',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/prop-types': [
        'error',
        {
            ignore: ['dispatch', 'params', 'children', 'router', 'location', 'routeParams', 'routes', 'history', 'route', 'match', 'form']
        }
    ],
    'no-underscore-dangle': 'off',
    'react/jsx-no-bind': 'off',
    'no-unused-vars': ['error', { 'args': 'none' }],
    'jsx-a11y/label-has-for': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['to'],
        aspects: []
    }],
    'function-paren-newline': 1,
    'eslint-plugin-jsx-a11y/no-static-element-interactions': 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/prefer-default-export': 0,
    'no-case-declarations': 1,
    'no-void': 0,
    'class-methods-use-this': 0,
    'no-continue': 0,
    'jsx-a11y/media-has-caption': 0,
    'no-script-url': 0,
}
const env = {
    browser: true,
    commonjs: true,
    amd: true,
    es6: true,
}
const parser = {
    specifyingParser: 'babel-eslint',
}
module.exports = {
    extends: [
        'airbnb',
        "plugin:react/recommended",
    ],
    rules: rules,
    env: env,
    parser: parser.specifyingParser,
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
            "jsx": true
        }
    }
}
