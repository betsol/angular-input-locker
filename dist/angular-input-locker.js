(function(angular) {

    angular.module('ngInputLocker', [])
        .provider('inputLocker', [function() {

            var provider = this;

            var settings = {
                selector: 'input, button, select, textarea',
                dataKey: 'ng.form-locker.previous-state',
                lockOnRouteChange: false
            };

            /**
             * Sets custom selector for form elements.
             *
             * @param {string} selector
             */
            provider.setSelector = function (selector) {
                settings.selector = selector;
            };

            /**
             * Enables or disabled lock on route change.
             *
             * @param {bool} lockOnRouteChange
             */
            provider.setLockOnRouteChange = function(lockOnRouteChange) {
                settings.lockOnRouteChange = lockOnRouteChange;
            };

            /**
             * Iterates form elements and calls specified function for each element.
             * @param {function} callable
             */
            var iterateFormElements = function(callable) {
                $(settings.selector).each(function(key, item) {
                    callable($(item));
                });
            };

            /**
             * The service itself.
             */
            provider.$get = function() {
                return {
                    settings: settings,
                    lock: function() {
                        iterateFormElements(function(item) {
                            item.data(settings.dataKey, item.prop('disabled'));
                            item.prop('disabled', true);
                        });
                    },
                    unlock: function() {
                        iterateFormElements(function(item) {
                            var previousState = item.data(settings.dataKey);
                            if ('undefined' !== typeof previousState) {
                                item.prop('disabled', previousState);
                            }
                        });
                    }
                };
            };

        }])
        .run(['inputLocker', '$rootScope', function(inputLocker, $rootScope) {
            if (inputLocker.settings.lockOnRouteChange) {

                var routeChangeStarted = function() {
                    inputLocker.lock();
                };

                var routeChangeFinished = function() {
                    inputLocker.unlock();
                };

                $rootScope.$on('$routeChangeStart', routeChangeStarted);
                $rootScope.$on('$routeChangeSuccess', routeChangeFinished);
                $rootScope.$on('$routeChangeError', routeChangeFinished);
            }
        }])
    ;

})(angular);