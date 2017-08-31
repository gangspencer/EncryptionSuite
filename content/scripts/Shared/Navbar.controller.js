(function(){
	angular.module("App").controller("NavbarController", NavbarController);

	function NavbarController(){
		var vm = this;

		//Functions
		vm.isActive = isActive;
		vm.updateIndex = updateIndex;
		vm.getPageName = getPageName;

		//Models
		vm.index = 0; //Indeces, home = 0, encryption = 1;
		vm.HOME = 0; //Constants
		vm.ENCRYPTION = 1; //Contstant


		function isActive(index){
			console.log(index);
			return vm.index == index;
		}

		function updateIndex(index){
			vm.index = index;
		}

		function getPageName(index){
			switch(vm.index){
				case 0:
					return "Home";
					break;
				case 1: 
					return "Encryption";
					break;
				default:
					return "ERROR";
					break;
			}

		}
	}

})();