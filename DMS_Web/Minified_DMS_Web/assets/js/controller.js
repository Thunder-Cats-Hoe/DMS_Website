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
}