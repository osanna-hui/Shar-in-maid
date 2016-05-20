var myApp = angular.module("sharnMaid", [
	"ngRoute",
	"AppController"
]);

myApp.config([
	"$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when(
			"/user_login",
			{
				templateUrl: "view/user_login.html",
			}
		).when("/user_signup",
			{
				templateUrl: "view/user_signup.html",
			}
		).when("/user_profile",
			{
				templateUrl: "view/user_profile.html",
				controller:"userControl"
			}
		).when(
			"/service_search",
			{
				templateUrl: "view/service_search.html",
				controller:"searchServiceControl"
			}
		).when(
			"/service_postnew",
			{
				templateUrl: "view/service_postnew.html"
			}
		).when(
			"/service_all",
			{
				templateUrl: "view/service_all.html",
				controller:"allServiceControl"
			}
		).when(
			"/service_own",
			{
				templateUrl: "view/service_own.html",
				controller:"ownServiceControl"
			}
		).when(
			"/service_other_user",
			{
				templateUrl: "view/service_other_user.html",
				controller:"otherUserServiceControl"
			}
		).when(
			"/favourites_all",
			{
				templateUrl: "view/favourites_all.html",
				controller:"favouritesControl"
			}
		)
	}
]);