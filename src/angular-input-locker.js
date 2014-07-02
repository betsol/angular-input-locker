(function(angular) {

    angular.module('ngInputLocker', [])
        .run(['inputLockerProvider', function(inputLockerProvider) {
            console.log('Run called for ngInputLocker!', inputLockerProvider);
        }])
        .provider('inputLocker', [function() {

            var provider = this;

            var selector = 'input, button, select, textarea';
            var dataKey = 'ng.form-locker.previous-state';

            /**
             * Sets custom selector for form elements.
             *
             * @param {string} newSelector
             */
            provider.setSelector = function (newSelector) {
                selector = newSelector;
            };

            /**
             * Iterates form elements and calls specified function for each element.
             * @param {function} callable
             */
            var iterateFormElements = function(callable) {
                $(selector).each(function(key, item) {
                    callable($(item));
                });
            };

            /**
             * The service itself.
             */
            provider.$get = [function() {
                return {
                    lock: function() {
                        iterateFormElements(function(item) {
                            item.data(dataKey, item.prop('disabled'));
                            item.prop('disabled', true);
                        });
                    },
                    unlock: function() {
                        iterateFormElements(function(item) {
                            var previousState = item.data(dataKey);
                            if ('undefined' !== typeof previousState) {
                                item.prop('disabled', previousState);
                            }
                        });
                    }
                };
            }];
        }])
    ;

})(angular);