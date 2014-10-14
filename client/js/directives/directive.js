angular.module('directives', [])
    .directive("drag", ['$rootScope', function ($rootScope) {

        var dragIcon = document.createElement('img');
        dragIcon.src = '/icone.jpg'
        function dragStart(evt, element, dragStyle) {
            //console.log("dragStart");
            evt.originalEvent.dataTransfer.setDragImage(dragIcon, -10, -10);
            element.addClass(dragStyle);
            evt.originalEvent.dataTransfer.setData("id", evt.target.id);
            evt.originalEvent.dataTransfer.effectAllowed = 'move';
        };
        function dragEnd(evt, element, dragStyle) {
            //console.log("dragEnd");
            element.removeClass(dragStyle);
        };

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                attrs.$set('draggable', 'true');
                scope.dragData = scope[attrs["drag"]];
                scope.dragStyle = attrs["dragstyle"];
                element.bind('dragstart', function (evt) {
                    $rootScope.draggedElement = scope.dragData;
                    dragStart(evt, element, scope.dragStyle);
                });
                element.bind('dragend', function (evt) {
                    dragEnd(evt, element, scope.dragStyle);
                });
            }
        }
    }])

    .directive("drop", ['$rootScope', function ($rootScope) {

        function dragEnter(evt, element, dropStyle) {
            //console.log("dragEnter");
            evt.preventDefault();
            element.addClass(dropStyle);
        };
        function dragLeave(evt, element, dropStyle) {
            //console.log("dragLeave Drop");
            element.removeClass(dropStyle);
        };
        function dragOver(evt, element, dropStyle) {
            evt.preventDefault();
            element.addClass(dropStyle);
        };
        function drop(evt, element, dropStyle) {
            //console.log("drop");
            evt.preventDefault();
            element.removeClass(dropStyle);
        };

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.dropData = scope[attrs["drop"]];
                scope.dropStyle = attrs["dropstyle"];
                element.bind('dragenter', function (evt) {
                    dragEnter(evt, element, scope.dropStyle);
                });
                element.bind('dragleave', function (evt) {
                    dragLeave(evt, element, scope.dropStyle);
                });
                element.bind('dragover', function (evt) {
                    dragOver(evt, element, scope.dropStyle);
                });

                element.bind('drop', function (evt) {
                    drop(evt, element, scope.dropStyle);
                    $rootScope.$broadcast('dropEvent', $rootScope.draggedElement, scope.dropData);
                });
            }
        }
    }])
