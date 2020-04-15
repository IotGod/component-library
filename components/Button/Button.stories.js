import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => ({
  components: { Button },
  template: '<my-button @click="action">Text Button</my-button>',
  methods: { action: action('clicked') },
})
