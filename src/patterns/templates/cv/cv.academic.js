const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.prototype-orig' );
const cv = clonedeep( cv_prototype );

cv.variant = 'academic';


cv.hide_hobbies = true;
cv.hide_service = false;
cv.hide_profiles = true;

cv.data.basics.name = "Lara Karki";
cv.data.basics.picture = false;
cv.data.basics.email = 'lschenck@gatech.edu';
cv.data.basics.label = '';
cv.data.basics.summary = '';

cv.data.basics.interests = [];
cv.crop_class = 'lrv-a-crop-1x1';

cv.data.work_title = 'Industry Experience';
cv.data.speaking_title = 'Industry Conference Presentations';
cv.data.outreach_title = 'Industry Outreach';

module.exports = cv;