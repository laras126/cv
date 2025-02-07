const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.prototype-orig' );
const cv = clonedeep( cv_prototype );

cv.variant = 'academic';

cv.hide_hobbies = true;
cv.hide_service = false;
cv.hide_profiles = true;

cv.data.basics.picture = false;
cv.data.basics.email = 'lschenck3@gatech.edu';
cv.data.basics.label = '';
cv.data.basics.summary = '';

cv.data.basics.interests = [];
cv.crop_class = 'lrv-a-crop-1x1';

// Hide undergrad details
cv.data.education[0].summary = "<ul><li>Advisor: Dr. Betsy DiSalvo</li></li><li>Keywords: data science workforce development, broadening talent pipelines, skills integration, on-the-job learning, non-traditional educational pathways</li></ul>";
cv.data.education[1].summary = '';

cv.hide_service = true;

// Remove SNG and WhatsUp
new_volunteer = [ cv.data.volunteer[1], cv.data.volunteer[2] ];
cv.data.volunteer = new_volunteer;
// cv.data.volunteer.remove(cv.data.volunteer[0]);
// cv.data.volunteer.remove(cv.data.volunteer[2]);


cv.data.work_title = 'Industry Experience';
cv.data.speaking_title = 'Industry Conference Presentations';
cv.data.outreach_title = 'Industry Outreach';

module.exports = cv;