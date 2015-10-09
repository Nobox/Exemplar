var trivia = {
    template: require('./trivia.template.html'),
    methods: {},
    components: {}
};

/**
 * Data for trivia
 * @return {object}
 */
trivia.data = function () {
    return {
        questions: require('../data/questions'),
        answers: [],
        currentQuestionIndex: 0,
        currentQuestion: require('../data/questions')[0]
    };
}

/**
 * Trivia child components
 */
trivia.components['question'] = require('./question')

module.exports = trivia;
