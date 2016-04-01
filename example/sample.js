'use strict';
const Pixiv = require('../');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const pixiv = new Pixiv(username, password);

pixiv.user(471355).then(info => {
	console.log(info);
});

pixiv.userWorks(471355).then(info => {
	console.log(info);
});

pixiv.search('艦これ1000users入り', {mode: 'tag'}).then(res => {
	console.log(res);
});
