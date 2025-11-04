const { statSync } = require('fs');
const path = require('path');

const data = require( './industry.json');
const { mtime } = statSync( path.join( process.cwd(), 'docs/index.html') );

hide_hobbies = true;
hide_service = false;
hide_profiles = true;

data.basics.picture = false;
data.basics.email = 'lschenck3@gatech.edu';
// data.basics.summary = '';

data.basics.interests = [];

data.work_title = "Work Experience";
data.volunteer_title = "Professional Activities";

data.publications_title = "Selected Publications";
data.publications.posters = [];

module.exports = {
	variant: 'prototype',
	data,
	mtime,
	hide_service: true,
	crop_class : 'lrv-a-crop-1x1'
};