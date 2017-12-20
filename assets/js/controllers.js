angular.module('Jagadamb.controllers', []).

  /* main controller */
  controller('mainController', function($scope, ergastAPIservice) {
    $scope.photos = [{"url": "https://s3.ap-south-1.amazonaws.com/poc-dashboard/forts/1.jpg",
                     "name": "fort1",
                     "description":"maedium"},
                    {"url": "https://s3.ap-south-1.amazonaws.com/poc-dashboard/forts/2.jpg",
                     "name": "fort2",
                     "description":"hard"},
                    {"url": "https://s3.ap-south-1.amazonaws.com/poc-dashboard/forts/3.jpg",
                     "name": "fort3",
                     "description":"3maedium"}];
    $scope.showSidebar = false;
    
    $scope.toggleSideBar = function(){
        
        if($scope.showSidebar){
           $scope.showSidebar = false;
        }else{
            $scope.showSidebar = true;    
        }
        
    }
   
  });
