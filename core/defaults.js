export default {
    /**
     * Turn console output ON or OFF
     *
     * @type {boolean}
     */
    DEV_ONOFF: false,
    /**
     * Display the controls or not
     *
     * @type {boolean}
     */
    controls: false,

    /**
     * Slides visible in the wrapper
     *
     * @type {Number}
     */
    slidesInView: 1,

    /**
     * Duration of the animation in milliseconds
     *
     * @type {Number}
     */
    animationSpeed: 1500,

    /**
     * Direction of the slider
     *
     * Options--
     *  - 'ltr'
     *  - 'rtl'
     *
     * @type {String}
     */
    direction: 'ltr',

    /**
     * Size of the slider in percentage inside the wrapper
     *
     * @type {Number}
     */
    size: 100,

    /**
     * Type of the slides in the slider
     *
     * @type {string}
     */
    type: 'img',

    /**
     * Color of the control arrows
     *
     * @type {string}
     */
    controlsColor: '#fff',

    /**
     * List of classes used by the slider
     *
     * @type {Object}
     */
    classes: {
        container: {
            class: 'beebopslider__container',
            id: 'beebopContainer',
            htmlElement: 'beebop-container'
        },
        controls: {
            active: 'beebopslider__controls--active',
            btn: 'beebopslider--control',
            data: {
                next: 'next',
                previous: 'prev'
            },
            htmlElement: 'beebop-control-container'
        },
        direction: {
            ltr: 'beebopslider--ltr',
            rtl: 'beebopslider--rtl'
        },
        slides: 'beebopslide'
    }
}