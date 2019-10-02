import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'data-card',
  styleUrl: 'data-card.css',
  shadow: true
})
export class DataCard {
  /**
   * The card title
   */
  @Prop() heading: string;

  /**
   * The card description
   */
  @Prop() desc: string;

  /**
   * The card image
   */
  @Prop() src: string;

  /**
   * The card image
   */
  @Prop() isReversed: boolean;

  private modifierClass() {
    return this.isReversed ? ' data-card--reversed' : '';
  }

  render() {
    return (
      <Host class={`data-card${this.modifierClass()}`}>
        <img class="data-card__image" src={this.src} alt={this.heading} />
        <h2 class="data-card__heading">{this.heading}</h2>
        <p class="data-card__desc">
          {this.desc}
          {/* <card-button>Read More</card-button> */}
        </p>
      </Host>
    );
  }
}
