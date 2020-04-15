import { addParameters } from '@storybook/vue'; // or any other type of storybook
import { configure } from '@storybook/vue';

addParameters({
    darkMode: {
        current: 'dark'
    }
});

// automatically import all files ending in *.stories.js
const req = require.context(
  '../components',
  true,
  /\.stories\.js$/
);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);