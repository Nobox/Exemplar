var trivia = {
    template: require('./trivia.template.html'),
    components: {}
};

/**
 * Data for trivia
 * @return {object}
 */
trivia.data = function () {
    return {
        questions: require('../data/questions')
    };
}

/**
 * Trivia child components
 */
trivia.components['question'] = require('./question')

module.exports = trivia;
