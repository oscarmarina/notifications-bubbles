(function() {

  'use strict';
  /**
   * `notifications-bubbles`
   * notifications-bubbles
   *
   * @customElement
   * @polymer
   * @demo demo/index.html
   */
  class NotificationsBubbles extends Polymer.Element {
    static get is() {
      return 'notifications-bubbles';
    }
    static get properties() {
      return {
        notificationTypeOne: {
          type: Number
        },

        notificationIconTypeOne: {
          type: String,
          value: 'face'
        },

        notificationTypeTwo: {
          type: Number
        },

        notificationIconTypeTwo: {
          type: String,
          value: 'favorite'
        },

        notificationTypeThree: {
          type: Number
        },

        notificationTypeIconThree: {
          type: String,
          value: 'supervisor-account'
        },

        motion: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        }
      };
    }
  }

  window.customElements.define(NotificationsBubbles.is, NotificationsBubbles);

}());
