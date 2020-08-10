import { LitElement } from 'lit-element';
import { D2LOrganizationHMBehaviorMixin } from '../d2l-organization-hm-behavior';

export class ConsumerElement extends D2LOrganizationHMBehaviorMixin(LitElement) {

}

customElements.define('consumer-element', ConsumerElement);
