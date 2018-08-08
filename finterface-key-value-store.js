import '@polymer/polymer/polymer-legacy.js';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin.js';

window.FInterface = window.FInterface || {};

/**
 * `FInterface.KeyValueStore` is public interface of any element that is a key-value store.
 *
 * To be used in key-value stores, their wrappers, stubs or replacements.
 *
 * @polymerMixin
 */
FInterface.KeyValueStore = dedupingMixin(function(superClass) {
  /**
   * @polymerMixinClass
   */
  class FKeyValueStore extends superClass {
    static get properties() {
      return {
        /*
         * Key of stored object
         */
        key: {
          type: String,
          reflectToAttribute: true
        },

        /*
         * Stored object
         */
        value: {
          type: Object,
          notify: true
        },
      };
    }
  }
  return FKeyValueStore;
});
