var finish = {
    template: require('./finish.template.html')
};

/**
 * Component data
 * @return {object}
 */
finish.data = function () {
    return {
        correct: this.$root.results.correct,
        incorrect: this.$root.results.incorrect
    };
}

module.exports = finish;
