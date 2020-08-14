import { LitElement } from 'lit-element';
import { D2LOrganizationHMMixin } from '../d2l-organization-hm-mixin';

export class ConsumerElement extends D2LOrganizationHMMixin(LitElement) {

}

customElements.define('consumer-element', ConsumerElement);
