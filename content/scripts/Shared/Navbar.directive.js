(function(){
	angular.module("App").directive('navbar', function() {
		return {
			restrict: 'AE',
			replace: 'true',
			templateUrl: 'Navbar.html'
		};
	});
})();