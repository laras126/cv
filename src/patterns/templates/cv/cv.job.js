const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.prototype-orig' );
const cv = clonedeep( cv_prototype );

cv.variant = 'job';

cv.data.basics.label = 'Research Programmer';
cv.data.basics.summary = 'Industry leader in web development seeking research assistant position during career transition from software engineering to computing education research.';

cv.data.basics.interests = [];
cv.crop_class = 'lrv-a-crop-1x1'

module.exports = cv;