import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../src/components/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => ({
  components: { Button },
  template: '<my-button @click="action">Sven Button</my-button>',
  methods: { action: action('clicked') },
})

export const Jsx = () => ({
  components: { Button },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>
  },
  methods: { action: linkTo('clicked') },
})

export const Emoji = () => ({
  components: { Button },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('Ei sichi') },
})
