var app = angular.module("myapp", ["firebase"]);

function MyController($scope, $firebase) { 
	var ref = new Firebase("https://dmsblogposts.firebaseio.com/");
	$scope.posts = $firebase(ref);
	$scope.addMessage = function(e) {
		if (e.keyCode != 13) return;
		$scope.posts.$add({title: $scope.title,
							imgpath: $scope.imgpath,
							date: $scope.date,
							tags: $scope.tags,
							content: $scope.content});
		$scope.title = "";
		$scope.imgpath = "";
		$scope.date = "";
		$scope.tags = "";
		$scope.content = "";
	};
  
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;


	$scope.colors = [
	  {name:'2014'},
	  {name:'2013'},
	  {name:'2012'},
	  {name:'2010'},
	  {name:'2009'},
	  {name:'2008'},
	  {name:'2007'},
	  {name:'2006'},
	  {name:'2005'}
	];
	$scope.myColor = $scope.colors[0]; // red

  $scope.orderProp = 'age';

}