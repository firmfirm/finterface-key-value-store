import '../finterface-key-value-store.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class FakeStore extends FInterface.KeyValueStore(PolymerElement) {
  static get is() { return 'fake-store'; }
}
customElements.define(FakeStore.is, FakeStore);
