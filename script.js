angular.module('test_uiApp', ['ngStorage'])
  .controller('overview', function itemsCtrl($scope, $localStorage) {
  	$scope.$storage = $localStorage;

	$scope.saved = localStorage.getItem('overview');
	
	if (localStorage.getItem('overview') !== null) {
		$scope.overview = JSON.parse($scope.saved)
	} else {
	$scope.overview = [];
	}
	localStorage.setItem('overview', JSON.stringify($scope.overview));
	// ADD ITEM
	$scope.addItem = function() {
		    item = {
    	name: String,
    	comments: [],
    	img: 'avatar.png'
   		}
		$scope.overview.push(item);
		item.name = $scope.itemName,
		$scope.itemName = ''; 
		localStorage.setItem('overview', JSON.stringify($scope.overview));
 	};

	// ADD COMMENT
	$scope.addComment = function(comments, item) { 
		var index = item.comments.indexOf(item)
    item.comments.splice(index, 0, comments.comment); 
    comments.comment = "";
    localStorage.setItem('overview', JSON.stringify($scope.overview));
    $scope.countcom = function(item) {
			var count = 0 ;
			angular.forEach(item.comments, function() {
		      count += 1;
		    });
		    return count;
			}
  };
	// DELETE ITEM
	$scope.deleteItem = function(item) {
		var index = $scope.overview.indexOf(item);
		$scope.overview.splice(index, 1)
		localStorage.setItem('overview', JSON.stringify($scope.overview));
	};
  // COUNT
  $scope.count = function() {
    var count = 0;
    angular.forEach($scope.overview, function() {
      count += 1;
    });
    return count;
  };

});
