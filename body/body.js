const docbody = (document.currentScript || document._currentScript).ownerDocument;

class Body extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var menu = docbody.querySelector('#boxed-wrapper').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(menu, true);
		shadowRoot.appendChild(instance);
	}
}

customElements.define('boxed-wrapper', Body);