var Vue = require('vue'),
    VueRouter = require('vue-router');

/**
 * Main app
 * @type {Object}
 */
var app = {
    methods: {},
    components: {}
};

/**
 * App wide data
 * @return {object}
 */
app.data = function () {
    return {
        results: {}
    };
}

/**
 * App components
 */
app.components['start'] = require('./components/start');
app.components['trivia'] = require('./components/trivia');
app.components['finish'] = require('./components/finish');

/**
 * Create main app component
 * @type {Vue}
 */
var root = Vue.extend(app);

/**
 * Create router
 */
Vue.use(VueRouter);
var router = new VueRouter();

/**
 * Define routes
 * @type {object}
 */
router.map({
    '/': {
        component: app.components['start']
    },
    '/trivia': {
        component: app.components['trivia']
    },
    '/finish': {
        component: app.components['finish']
    }
});

router.start(root, 'body');
