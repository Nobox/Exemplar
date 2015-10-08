var question = {
    template: require('./question.template.html'),
};

/**
 * Data for question
 * @return {object}
 */
question.data = function () {
    return {
    };
}

/**
 * Data properties
 * @type {Array}
 */
question.props = ['question'];

module.exports = question;
