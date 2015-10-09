var question = {
    template: require('./question.template.html'),
    methods: {}
};

/**
 * Data for question
 * @return {object}
 */
question.data = function () {
    return {
        totalQuestions: this.questions.length,
        selectedAnswer: null
    };
}

/**
 * Data properties
 * @type {Array}
 */
question.props = [
    'questions',
    'answers',
    'currentQuestion',
    'currentQuestionIndex'
];

/**
 * Answer the current question.
 * @param  {Object} e
 * @return {null}
 */
question.methods.answerQuestion = function (e) {
    e.preventDefault();

    if (this.selectedAnswer) {
        this.recordAnswer();
        this.moveToNextQuestion();
    }
}

/**
 * Record the user's selected answer
 * @return {null}
 */
question.methods.recordAnswer = function () {
    this.answers.push(parseInt(this.selectedAnswer));
    this.selectedAnswer = null;
}

/**
 * Calculate final results from answers
 * @return {null}
 */
question.methods.calculateResults = function () {
    //
}

/**
 * Move to the next question on the chain.
 * @return {null}
 */
question.methods.moveToNextQuestion = function () {
    if (this.totalQuestions === (this.currentQuestionIndex + 1)) {
        // show finished and results
        console.log('Show results!');
        return;
    }

    // just move to the next question
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
}

module.exports = question;
