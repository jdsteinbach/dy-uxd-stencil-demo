import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-button',
  styleUrl: 'card-button.css',
  shadow: true
})
export class CardButton {
  @Prop() type = 'button';

  @Prop() variation: string;

  render() {
    return (
      <button type={this.type}>
        <slot />
      </button>
    );
  }
}
