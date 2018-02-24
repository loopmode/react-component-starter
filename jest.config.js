module.exports = {
    rootDir: 'src/',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    }
};
