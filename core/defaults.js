export default {
    /**
     * Turn console output ON or OFF
     *
     * @type {boolean}
     */
    DEV_ONOFF: false,

    /**
     * Turn animations ON/OFF
     *
     * @type {boolean}
     */
    animations: false,

    /**
     * Duration of the animation in ms
     *
     * @type {Number}
     */
    animationSpeed: 150,

    /**
     * Animation style
     *
     * @type {string}
     */
    animationEasing: 'ease-in',

    /**
     * Display the controls or not
     *
     * @type {boolean}
     */
    controls: true,

    /**
     * Slides visible in the wrapper
     *
     * @type {Number}
     */
    slidesInView: 1,

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
     * Adds miniatures to the template to use as navigation
     *
     * @type {boolean}
     */
    miniatureNav: false,

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
        slides: {
            class: 'beebopslide',
            miniatures: {
                class: 'beebop__miniatureNav',
                id: 'beebopMinNav',
                htmlElement: 'beebop-minnav'
            }
        }
    }
}