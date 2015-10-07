var start = {
    template: require('./start.template.html'),
    methods: {}
};

/**
 * Component data
 * @return {object}
 */
start.data = function () {
    return {
        title: 'Start Trivia'
    };
};

module.exports = start;
