# pixiv.js [![Build Status](https://travis-ci.org/akameco/pixiv.js.svg?branch=master)](https://travis-ci.org/akameco/pixiv.js)

> pixiv API client

## Installation

```
$ npm install --save pixiv.js
```

## Usage

```js
const Pixiv = require('pixiv.js');
const pixiv = new Pixiv('your username', 'your password');
const url = 'http://www.pixiv.net/member_illust.php?mode=medium&illust_id=55029576';

pixiv.download(url).then(filename => {
	console.log(filename);
	// => 55029576_p0.png
});
```

## API

### Pixiv(username, password)

#### username

*Required*  
Type: `string`

your pixiv username.

#### password

*Required*  
Type: `string`

your pixiv password.

### pixiv.download(url, [options])

Download image file from pixiv.

#### url

*Required*  
Type: `string`, `number`

url or illust_id.

```js
pixiv.download('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=55029576').then(filename => {
	console.log(filename);
	// => 55029576_p0.png
});

pixiv.download(55029576).then(filename => {
	console.log(filename);
	// => 55029576_p0.png
});
```

#### options

Type: `object`

##### filename

Type: `string`

Set the download filename.

##### directory

Type: `string`

Set the download directory.
Default is current directory.

### pixiv.user(userId)

Get user info json.

#### userId

*Required*  
Type: `string`, `number`

### pixiv.work(illustId)

Get illust info json.

#### illustId

*Required*  
Type: `string`, `number`

### pixiv.userWorks(userId)

Get user works.

### userId

*Required*  
Type: `string`, `number`

### pixiv.search(query, [options])

search pixiv

#### query

query word

*Required*  
Type: `string`

#### options

##### mode

Type: `string`
Default: `text`

`text`, `tag`, `exact_tag`, `caption`

## License

MIT
