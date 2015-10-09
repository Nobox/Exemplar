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
    var incorrect = 0;
    var correct = 0;
    var results = {};

    for (var i = 0; i < this.answers.length; i++) {
        var answer = this.answers[i];

        if (this.questions[i].correct === answer) {
            correct++;
        } else {
            incorrect++;
        }
    };

    results.correct = correct;
    results.incorrect = incorrect;

    this.$root.results = results;
}

/**
 * Move to the next question on the chain
 * and go to the "finish" page
 * @return {null}
 */
question.methods.moveToNextQuestion = function () {
    if (this.totalQuestions === (this.currentQuestionIndex + 1)) {
        this.calculateResults();
        this.$route.router.go('finish');
        return;
    }

    // just move to the next question
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
}

module.exports = question;
