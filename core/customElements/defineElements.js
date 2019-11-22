import defaults from "../defaults.js";

/**
 * Classes to create the custom html tags we want
 */
export class BeebopContainer extends HTMLElement { constructor() { super(); } }
customElements.define(defaults.classes.container.htmlElement, BeebopContainer);
export class BeebopControlsContainer extends HTMLElement { constructor() { super(); } }
customElements.define(defaults.classes.controls.htmlElement, BeebopControlsContainer);
export class BeebopMiniatureNavigation extends HTMLElement { constructor() { super(); } }
customElements.define(defaults.classes.slides.miniatures.htmlElement, BeebopMiniatureNavigation);
