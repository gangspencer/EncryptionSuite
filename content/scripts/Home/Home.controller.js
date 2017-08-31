(function(){
	angular.module("App").controller("HomeController", HomeController);

	function HomeController(){

		var vm = this;

		//Function

		//Models
		vm.sampleFiles = [
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			}
		];

	}


})();