//TODO : changer le nom du module, même valeur que dans index.html
angular.module('clement', ['ngRoute', 'controllers', 'services', 'directives', 'filters','angular-google-analytics'])
    .config(function ($routeProvider,$httpProvider) {
        $routeProvider.when('/', {templateUrl: 'clement.html'})
            .when('/manage', {templateUrl: 'manage.html'})
            .when('/error', {templateUrl: 'error.html'})
            .otherwise({
                redirectTo: '/error'
            });
    })
    .config(function (AnalyticsProvider) {
    // Add configuration code as desired - see below
        // initial configuration
         AnalyticsProvider.setAccount('UA-70156173-1');

        // track all routes/states (or not)
        AnalyticsProvider.trackPages(true);

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
     })
    .run(function(Analytics) {
        // In case you are relying on automatic page tracking, you need to inject Analytics
        // at least once in your application (for example in the main run() block)
    })

.factory('audio',function ($document) {
    var audioElement = $document[0].createElement('audio'); // <-- Magic trick here
    return {
        audioElement: audioElement,
        play: function(filename) {
            audioElement.src = filename;
            audioElement.play();     //  <-- Thats all you need
        },
        // Exersise for the reader - extend this service to include other functions
        // like pausing, etc, etc.
        audioElement2: audioElement,
        canPlayType: function(){
            if(audioElement.canPlayType('audio/mpeg' !== ""))
                return('mp3');
            else
                return('wav');
        }
    };
});

/*Ajout des modules externes*/

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);
angular.module('filters', []);
