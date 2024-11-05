const clonedeep = require( 'lodash.clonedeep' );

const cv_prototype = require( './cv.academic' );
const cv = clonedeep( cv_prototype );

module.exports = cv;