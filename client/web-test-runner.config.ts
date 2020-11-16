// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

export default {
  plugins: [require('@snowpack/web-test-runner-plugin')()],
};
