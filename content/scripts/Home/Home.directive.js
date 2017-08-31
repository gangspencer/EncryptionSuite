(function(){
	angular.module("App").directive("home", function() {
		return {
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'Home.html'
		};
	});
})();
