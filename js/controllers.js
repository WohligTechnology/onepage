angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.changePage = function(text) {
    console.log(text);
    var length = $(".fp-section").length;
    console.log(length);
    console.log($(".fp-section"));
    // if (typeof $.fn.fullpage.destroy == 'function') {
    //   $.fn.fullpage.destroy('all');
    // }
    if (length === 0) {
      $('.fullpage').fullpage();
    }
    console.log(text);
    $scope.homeval = text;
    switch (text) {
      case "contact":
        $.fn.fullpage.moveTo(7);
        break;
      case "stockists":
        $.fn.fullpage.moveTo(6);
        break;
      case "press":
        $.fn.fullpage.moveTo(5);
        break;
      case "collection":
        $.fn.fullpage.moveTo(4);
        break;
      case "ananya":
        $.fn.fullpage.moveTo(3);
        break;
      case "about":
        $.fn.fullpage.moveTo(2);
        break;
      case "home":
        $.fn.fullpage.moveTo(1);
        break;
      default:
        $.fn.fullpage.moveTo(1);
        break;
    }
  };

  $scope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      $('body').addClass('fp-');
      $scope.changePage($stateParams.id);
    }, 1000);
  });






  $scope.section = {
      head: "views/section/section.html",
      one: "views/section/section1.html",
      two: "views/section/section2.html",
      three: "views/section/section3.html",
      four: "views/section/section4.html",
      five: "views/section/section5.html",
      six: "views/section/section6.html"
  };










})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
