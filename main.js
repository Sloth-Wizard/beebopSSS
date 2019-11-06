import './dist/css/main.css';

import defaults from './core/defaults.js';

import { BeebopContainer, BeebopControlsContainer } from "./core/customElements/defineElements.js";
//import { detach } from "./utils/detach.js";

/**
 * Initialization of the slider custom html tags so we can use them in the DOM
 */
new BeebopContainer();
new BeebopControlsContainer();

export class Beebop {
    /**
     * @type {{container: string, controls: string}}
     * @private
     */
    _template = {container: '', controls: ''};

    /**
     * @type {{wrapperStyle: {}, containerStyle: {}, slideStyle: {}, controlStyle: {}}}
     * @private
     */
    _styles = {wrapperStyle: {}, containerStyle: {}, slideStyle: {}, controlStyle: {}};

    /**
     * @type {string}
     * @private
     */
    _direction = '';

    /**
     * Here we wait for 2 options
     *
     * Options --
     *  - 'ltr'
     *  - 'rtl'
     *
     *  - default option is 'ltr', the value is stored in our defaults
     *
     * @param {string} direction
     * @param {boolean} arrows
     */
    setTemplate(direction, arrows) {
        // Then we process the direction value by assigning the right class to the _direction variable
        if (direction === 'ltr') {
            this._direction = defaults.classes.direction.ltr;
        } else {
            this._direction = defaults.classes.direction.rtl;
        }

        this.xContainer =
            '<beebop-container id="' + defaults.classes.container.id + '" class="' + defaults.classes.container.class + '"></beebop-container>'
        ;
        this._template.container += this.xContainer;

        if (arrows === true) {
            this.xControls =
                '<beebop-control-container id="' + defaults.classes.controls.active + '" class="' + this._direction + '">' +
                    '<span class="' + defaults.classes.controls.btn + '" data-beebop="' + defaults.classes.controls.data.next + '">' +
                        '<span></span>' +
                    '</span>' +
                    '<span class="' + defaults.classes.controls.btn + '" data-beebop="' + defaults.classes.controls.data.previous + '">' +
                        '<span></span>' +
                    '</span>' +
                '</beebop-control-container>'
            ;
            this._template.controls += this.xControls;
        }
    }

    /**
     * Returns the object with all the template
     * Access to different parts of the template is done by doing so
     *  - 'this._template[key]'
     *
     * @return {Object}
     */
    getTemplate() {
        return this._template;
    }

    /**
     * Here we set the styles inside an object to apply them later
     *
     * @param {number} size
     * @param {string} wrapper
     * @param {string} container
     * @param {Object} slide
     */
    setStyles(size, wrapper, container, slide) {
        let slideCount = slide.length;
        let slideWidth = 100 / slideCount;
        let slideHeight = slide[0].offsetHeight;
        let containerWidth = slideCount * 100;
        let leftIncrement = containerWidth / slideCount;

        this._styles.wrapperStyle = {
            position: 'relative',
            width: '100%',
            height: 'auto',
            overflow: 'hidden'
        };

        this._styles.containerStyle = {
            display: 'block',
            width: containerWidth + '%',
            marginLeft: -leftIncrement + '%'
        };

        this._styles.slideStyle = {
            width: slideWidth + '%',
            height: 'auto',
            float: 'left'
        };

        if (slideCount === 1) {
            this._styles.controlStyle = {
                display: 'none'
            };
        } else {
            this._styles.controlStyle = {
                display: 'initial'
            };
        }

        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cSET-STYLES', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('slide count: ' + slideCount);
            console.log('size in %: ' + size);
            console.log('slide width in %: ' + slideWidth);
            console.log('slide height in px: ' + slideHeight);
            console.log('container width in %: ' + containerWidth);
            console.log('left increment in %: ' + leftIncrement);
            console.log(this._styles);
        }
    }

    /**
     * Returns the object with all styles
     *
     * @returns {Object}
     */
    getStyles() {
        return this._styles;
    }

    /**
     * @Constructor
     *
     * Constructs the slider with the wrapper id given by the user
     *
     * @param wrapperID
     *
     * Options are optional (wow amazing, optional options, nice options) because all have a default value
     * @param {Object} options
     */
    constructor(
        wrapperID,
        options = {
            arrows: defaults.controls,
            nbSlideToShow: defaults.slidesInView,
            animTiming: defaults.animationSpeed,
            slideDirection: defaults.direction,
            sizeSlider: defaults.size,
            type: defaults.type
        }
    ) {
        /***********************************************************/
        /***[DEBUG]***[Set to true to activate console logs]******/
        /*************[Set to false to remove them all]*********/
        this._DEV = defaults.DEV_ONOFF;
        this._DEV_TITLE = 'background: #222; color: #58E64E; font-weight: 700';
        this._DEV_HIGHLIGHT = 'padding: 5px 10px; background: #000000; color: #bada55; font-weight: 700;';
        /*******************************************************\
        /********************************************************\
        /*********************************************************\*/

        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cTEMPLATE_OBJECT', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log(this._template);
        }

        // Reset all defaults that are undefined if some were set by the user
        if (options.arrows === undefined)
            options.arrows = defaults.controls;
        if (options.nbSlideToShow === undefined)
            options.nbSlideToShow = defaults.slidesInView;
        if (options.animTiming === undefined)
            options.animTiming = defaults.animationSpeed;
        if (options.slideDirection === undefined)
            options.slideDirection = defaults.direction;
        if (options.sizeSlider === undefined)
            options.sizeSlider = defaults.size;

        // Set the template with the values given by the options
        this.setTemplate(options.slideDirection, options.arrows);

        // Get all options output to the console
        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cBEEBOPSLIDER OPTIONS', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('Slide arrows: [ ' + options.arrows + ' ]');
            console.log('Slide nbSlideToShow: [ ' + options.nbSlideToShow + ' ]');
            console.log('Slide animTiming: [ ' + options.animTiming + ' ]');
            console.log('Slide direction: [ ' + options.slideDirection + ' ]');
            console.log('Slide size: [ ' + options.sizeSlider + ' ]');
            console.log('Slide type: [ ' + options.type + ' ]');
        }

        // Get the wrapper and construct the slider from there
        this.wrapper = document.getElementById(wrapperID);
        // Get all the children to be put inside the slider
        this.slideType = options.type;
        if (this.slideType === 'img' || this.slideType === 'div' || this.slideType === 'span') {
            this.slide = this.wrapper.getElementsByTagName(this.slideType);
        } else {
            this.slide = this.wrapper.getElementsByClassName(this.slideType);
        }

        // Output wrapper, slide and container content to console
        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cWRAPPER // SLIDE_OBJECT // SLIDE_TYPE', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log(this.wrapper);
            console.log('[ ' + this.slideType + ' ]');
            console.log(this.slide);
            console.log('Number of slides: ' + this.slide.length);
        }

        // Append the template to the wrapper
        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cTEMPLATE OBJECT LOOP', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
        }

        for (let key in this._template) {
            if (this._template.hasOwnProperty(key)) {
                // We append each entry in the object _template
                this.wrapper.innerHTML += this._template[key];

                if (this._DEV === true) {
                    console.log('Appended template -> [ ' + key + ' ]');
                }
            }
        }

        // Move images inside the container and add class
        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cSLIDES MOVE AND ADD CLASS LOOP', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
        }

        for (let i = 0; i < this.slide.length; i++) {
            // Move the image
            document.getElementById(defaults.classes.container.id).appendChild(this.slide[0]);
            // Add the class
            this.slide[0].classList.add(defaults.classes.slides);

            if (this._DEV === true) {
                console.log(i);
                console.log(this.slide[0]);
            }
        }

        /**
         * Set the sizes with the value given by the options
         *
         * - size, wrapper, container, slide
         */
        this.setStyles(options.sizeSlider, this.wrapper, this._template.container, this.slide);

        this.container = document.getElementById(defaults.classes.container.id);
        this.controls = document.getElementById(defaults.classes.controls.active);

        // Apply styles loop
        if (this._DEV === true) {
            console.log('%c----------------------------------------', this._DEV_TITLE);
            console.log('%cSTYLING LOOP', this._DEV_TITLE);
            console.log('%c----------------------------------------', this._DEV_TITLE);
        }

        let i = 0;
        for (let key in this._styles) {
            if (this._styles.hasOwnProperty(key)) {
                // Log object 1st layer keys
                if (this._DEV === true) {
                    console.log('%c' + key + ' - [ ' + i + ' ]', this._DEV_HIGHLIGHT);
                }
                for (let keyCore in this._styles[key]) {
                    if (this._styles[key].hasOwnProperty(keyCore)) {
                        switch (i) {
                            case 0: // Wrapper styles
                                this.wrapper.style[keyCore] = this._styles[key][keyCore];
                                break;
                            case 1: // Container styles
                                if (this.slide.length > 1) { // Only style the container if there is more than one element
                                    this.container.style[keyCore] = this._styles[key][keyCore];
                                }
                                break;
                            case 2: // Images styles, need to loop thought each image or we get problems, me no like problem
                                for (let keyImg in this.slide) {
                                    if (this.slide.hasOwnProperty(keyImg)) {
                                        this.slide[keyImg].style[keyCore] = this._styles[key][keyCore];
                                    }
                                }
                                break;
                            case 3:
                                this.controls.style[keyCore] = this._styles[key][keyCore];
                                break;
                            default:
                                break;
                        }
                        // Log object core keys
                        if (this._DEV === true) {
                            console.log(keyCore + ' : ' + this._styles[key][keyCore]);
                        }
                    }
                }
                i++;
            }
        }

        // We only need to do the following if there is more than one element inside the slider
        if (this.slide.length > 1) {
            // Prepend the last element to the container only if there is more than one element to have the 1st element as initial focus on the slider
            if (this._DEV === true) {
                console.log('%c----------------------------------------', this._DEV_TITLE);
                console.log('%cIMAGES MANIPULATION', this._DEV_TITLE);
                console.log('%c----------------------------------------', this._DEV_TITLE);
                console.log('%cfirst-child image', this._DEV_HIGHLIGHT);
                console.log(this.slide[0]);
                console.log('%clast-child image', this._DEV_HIGHLIGHT);
                console.log(this.slide[Object.keys(this.slide).length - 1]);
            }
            // This line move the last image of the slide object to the position of the first one
            this.container.insertBefore(this.slide[Object.keys(this.slide).length - 1], this.slide[0]);

            // Slider controls
            if (this._DEV === true) {
                console.log('%c----------------------------------------', this._DEV_TITLE);
                console.log('%cSLIDER CONTROLS', this._DEV_TITLE);
                console.log('%c----------------------------------------', this._DEV_TITLE);
            }

            // Set necessary information inside variables to use them inside the function
            let slides = this.slide;
            let sliderOffset = options.sizeSlider;
            let container = this.container;

            function slideMove(data) {
                let slideFirstChild = slides[0]; // First slide which is the one on the left of the focused one(s)
                let slideLastChild = slides[Object.keys(slides).length - 1]; // Last slide of the list
                switch (data) {
                    case 'next':
                        container.style.left = sliderOffset + '%';
                        container.insertBefore(slideLastChild, slideFirstChild);
                        container.style.left = '';
                        break;
                    case 'prev':
                        container.style.left = -sliderOffset + '%';
                        container.appendChild(slideFirstChild);
                        container.style.left = '';
                        break;
                    default:
                        break;
                }
            }

            for (let key in this.controls.childNodes) {
                if (this.controls.childNodes.hasOwnProperty(key)) {
                    // Put the dataset inside a variable otherwise it can't be used as function parameter
                    let data = this.controls.childNodes[key].dataset.beebop;
                    // Assign the _DEV value inside a variable otherwise it is unusable inside the listener
                    let _DEV = this._DEV;
                    // Add click listener to the clicked childNode
                    this.controls.childNodes[key].addEventListener('click', function (e) {
                        slideMove(data);
                        e.preventDefault();
                        if (_DEV === true) {
                            console.log(data);
                        }
                    });
                    if (this._DEV === true) {
                        console.log(key);
                        console.log(this.controls.childNodes[key]);
                        console.log(this.controls.childNodes[key].dataset);
                    }
                }
            }
        }
    }
}