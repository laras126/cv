const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.prototype-orig' );
const cv = clonedeep( cv_prototype );

cv.variant = 'simple';

cv.data.basics.picture = false;
cv.data.basics.summary = '';
cv.data.basics.interests = [];

cv.crop_class = 'lrv-a-crop-1x1'

module.exports = cv;