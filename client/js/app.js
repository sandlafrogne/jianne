//TODO : changer le nom du module, même valeur que dans index.html
angular.module('clement', ['ngRoute', 'controllers', 'services', 'directives', 'filters'])
    .config(function ($routeProvider,$httpProvider) {
        $routeProvider.when('/', {templateUrl: 'clement.html'})
            .when('/manage', {templateUrl: 'manage.html'})
            .when('/error', {templateUrl: 'error.html'})
            .otherwise({
                redirectTo: '/error'
            });
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
        audioElement: audioElement,
        canPlayType: function(){
            if(audioElement.canPlayType('audio/mpeg' != ""))
                return('mp3')
            else
                return('wav')
        }
    }
});

/*Ajout des modules externes*/

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);
angular.module('filters', []);
