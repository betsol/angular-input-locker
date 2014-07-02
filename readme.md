# angular-input-locker

## Description

This module for AngularJS provides you with ability to lock and unlock all inputs on the page.
This is a good practice to prevent input modification when form is being processed or URL is changing.
There is a way to enable locking and unlocking during route transitions automatically with a single configuration option.

### Features

- Provides service to lock and unlock all input elements on the page
- Can lock and unlock input elements automatically during route transitions
- You can customize the selector used to filter input elements

## Installation

### Install library with bower

`bower install --save angular-input-locker`

### Add library to your page

``` html
<script type="text/javascript" src="angular-input-locker/dist/angular-input-locker.js"></script>
```

Use minified version: `angular-input-locker.min.js` in production
and uncompressed version: `angular-input-locker.js` during development/testing.

### Add dependency in your application's module definition

``` javascript
var application = angular.module('application', [
    // ...
    'ngInputLocker'
]);
```

## Usage

By calling `setLockOnRouteChange(true)` of `inputLockerProvider` you can enable automatic input locking during route transitions.

You can also change selector that is used to filter input elements by calling `setSelector(newSelector)`.
Although, you don't really need to do this.
By default, all input controls on the page will be affected.

**Example #1**

```javascript
angular.module('project', ['ngRoute', 'ngInputLocker'])
    .config([
        '$routeProvider', 'inputLockerProvider',
        function($routeProvider, inputLockerProvider) {
            $routeProvider
                ...
            ;
            
            inputLockerProvider.setLockOnRouteChange(true);
            
            inputLockerProvider.setSelector('input[type="text"]');
        }
    ])
;
```

Or you can manually call `lock()` or `unlock()` methods of `inputLocker` service:

**Example #2**

```javascript
angular.module('project', ['ngInputLocker'])
    .controller('SomeCtrl', ['inputLocker', function(inputLocker) {
        inputLocker.lock();
        inputLocker.unlock();
    }])
;
```

## API

See the examples above.

## Feedback

If you have found a bug or have another issue with the library - please [create an issue][new-issue]
in this GitHub repository.

If you have a question - file it with [StackOverflow][so-ask] and send me a
link to [s.fomin@betsol.ru][email]. I will be glad to help.
Also, please add a [JSFiddle][jsfiddle] to demonstrate the issue if appropriate.
You can even fork our [demo fiddle][demo].

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!

## License

The MIT License (MIT)

Copyright (c) 2014 Slava Fomin II

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[so-ask]: http://stackoverflow.com/questions/ask?tags=angularjs,javascript
[email]: mailto:s.fomin@betsol.ru
[jsfiddle]: http://jsfiddle.net/
[new-issue]: https://github.com/betsol/angular-input-locker/issues/new
