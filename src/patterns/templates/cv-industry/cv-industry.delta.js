const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv-industry.prototype' );
const cv = clonedeep( cv_prototype );

cv.data = require( './industry.json');

cv.variant = 'delta';

cv.hide_hobbies = true;
cv.hide_service = false;
cv.hide_profiles = true;

cv.data.basics.picture = false;
cv.data.basics.email = 'lschenck3@gatech.edu';
// cv.data.basics.summary = '';

cv.data.basics.interests = [];

cv.data.work_title = "Work Experience";
cv.data.volunteer_title = "Thought Leadership & Outreach";

cv.data.publications_title = "Selected Publications";
cv.data.publications.posters = [];

module.exports = cv;