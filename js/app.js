// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics',
  'angulartics.facebook.pixel'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('why-us', {
      url: "/why-us",
      templateUrl: "views/template.html",
      controller: 'WhyUsCtrl'
    })
    .state('what-do', {
      url: "/what-do",
      templateUrl: "views/template.html",
      controller: ' WhatDoCtrl'
    })

  .state('clients', {
    url: "/clients",
    templateUrl: "views/template.html",
    controller: 'ClientsCtrl'
  })

  .state('careers', {
      url: "/careers",
      templateUrl: "views/template.html",
      controller: 'CareersCtrl'
    })
    .state('press-media', {
      url: "/press-media",
      templateUrl: "views/template.html",
      controller: 'PressCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })

  .state('form', {
      url: "/form",
      templateUrl: "views/template.html",
      controller: 'FormCtrl'
    })
    .state('thankyou', {
      url: "/thankyou",
      templateUrl: "views/template.html",
      controller: 'ThanksCtrl'
    })

  .state('contact-us', {
    url: "/contact-us",
    templateUrl: "views/template.html",
    controller: 'ContactCtrl'
  });


  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});

firstapp.directive('autoHeight', function ($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var addHeight = function () {
        $element.css("min-height", windowHeight);
      };
      addHeight();
    }
  };
});
firstapp.directive('img', function ($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function () {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function ($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function (scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });
    }
  };
});


firstapp.filter('youtubethumb', function() {
   return function(input, onlyid) {
       if (input) {
           return "http://img.youtube.com/vi/" + input + "/maxresdefault.jpg";
       }
   };
});
firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
