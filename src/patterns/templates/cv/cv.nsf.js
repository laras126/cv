const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.prototype' );
const cv = clonedeep( cv_prototype );

cv.variant = 'job';

cv.data.basics.label = 'she/her';
cv.data.basics.picture = false;
cv.data.basics.summary = '';
cv.data.basics.interests = [];

cv.crop_class = 'lrv-a-crop-1x1'

module.exports = cv;