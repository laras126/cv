const { statSync } = require('fs');
const path = require('path');

const data = require( './data.json');
const { mtime } = statSync( path.join( process.cwd(), 'docs/index.html') );

module.exports = {
	variant: 'prototype',
	data,
	mtime,
	hide_service: true,
	crop_class : 'lrv-a-crop-1x1'
};