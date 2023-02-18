
const mongoose = require('mongoose');


const CohortSchema = new mongoose.Scheme({
    cohortNumber: {type: String, required: true},
    residents: {type: Array}
});

const Cohortdb = mongoose.model('cohortdb', CohortSchema);

module.exports = Cohortdb;
