angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.youtubeImg = 'Z3W6bxf6mpQ';
    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Best Banquet Halls in Mumbai");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.section = {
        head: "views/section/section.html",
        one: "views/section/section1.html",
        two: "views/section/section2.html",
        three: "views/section/section3.html",
        four: "views/section/section4.html",
        five: "views/section/section5.html",
        six: "views/section/section6.html",
        seven: "views/section/section7.html",
    };

    $scope.formData = {};
    // $scope.formData.email = "sagar.wohlig@gmail.com";

    $scope.flags = {};
    $scope.submitForm = function() {
        console.log(" In home ");
        $scope.flags.thankyou = false;
        //console.log("ffff", $scope.formData);
        $scope.formData.subject = "Contact Us Form Details";
        NavigationService.submitForm($scope.formData, function(res) {
            if (res.value) {
                $scope.flags.thankyou = true;
                $scope.formData = {};
                $state.go('thankyou');
            } else {
                $scope.showmsg = true;
            }
        });
        $scope.showmsg = false;
        //contact us
        NavigationService.sendDataBackend($scope.formData, function(res) {
            if (res.value == true) {
                $state.go('thankyou');
            } else {
                $scope.showmsg = true;

            }
        });
    };
    //gallery images
    $scope.galleryImages = [{
        "image": "img/gallery/1.jpg"
    }, {
        "image": "img/gallery/2.jpg"
    }, {
        "image": "img/gallery/3.jpg"
    }, {
        "image": "img/gallery/4.jpg"
    }, {
        "image": "img/gallery/5.jpg"
    }, {
        "image": "img/gallery/6.jpg"
    }, {
        "image": "img/gallery/7.jpg"
    }, {
        "image": "img/gallery/8.jpg"
    }, {
        "image": "img/gallery/9.jpg"
    }, {
        "image": "img/gallery/10.jpg"
    }, {
        "image": "img/gallery/11.jpg"
    }, {
        "image": "img/gallery/12.jpg"
    }, {
        "image": "img/gallery/13.jpg"
    }, {
        "image": "img/gallery/14.jpg"
    }, {
        "image": "img/gallery/15.jpg"
    }, {
        "image": "img/gallery/16.jpg"
    }, {
        "image": "img/gallery/17.jpg"
    }, {
        "image": "img/gallery/18.jpg"
    }, {
        "image": "img/gallery/19.png"
    }, {
        "image": "img/gallery/20.jpg"
    }, {
        "image": "img/gallery/21.png"
    }, {
        "image": "img/gallery/22.jpg"
    }, {
        "image": "img/gallery/23.png"
    }, {
        "image": "img/gallery/24.png"
    }, {
        "image": "img/gallery/25.jpg"
    }];
    // console.log($scope.galleryImages);
    // gallery images end?\
    $scope.changePage = function(text) {
        console.log(text);
        var length = $(".fp-section").length;
        // console.log(length);
        // console.log($(".fp-section"));
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
                $.fn.fullpage.moveTo(8);
                break;
            case "about":
                $.fn.fullpage.moveTo(7);
                break;
            case "gallery":
                $.fn.fullpage.moveTo(6);
                break;
            case "video":
                $.fn.fullpage.moveTo(5);
                break;
            case "whyus":
                $.fn.fullpage.moveTo(4);
                break;
            case "event":
                $.fn.fullpage.moveTo(3);
                break;
            case "host":
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
    $scope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            $('#maincontact').validate();
              // LEad sOurce Function
            function getParameterByName(name, url) {

                if (!url) {
                    url = window.location.href;
                }

                var res = url.split("lead_source=");
                //  alert(res[1]);
                //name = name.replace(/[\[\]]/g, "\\$&");
                //var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                //    results = regex.exec(url);
                //if (!results) return null;
                //if (!results[2]) return '';
                //return decodeURIComponent(results[2].replace(/\+/g, " "));
                return res[1];
            }

            var msg = getParameterByName('source');
            if (msg == "programmatic") {

                var x = document.getElementById("lead_source");
                x.remove(x.selectedIndex);
                // add new option which has value programmatic and text programmatic

                var opt = document.createElement('option');
                opt.value = 'programmatic';
                opt.text = 'programmatic';
                opt.setAttribute('selected', 'selected');
                lead_source.options.add(opt);
            }
  // LEad sOurce Function ENd
        }, 0);
    });

    // LEAD SOURCE SCRIPT

    // LEAD SOURCE SCRIPT END
})

.controller('ThanksCtrl', function($scope, TemplateService, NavigationService, $timeout, $window) {
    $scope.template = TemplateService.changecontent("thankyou");
    $scope.menutitle = NavigationService.makeactive("Thank You");
    TemplateService.title = $scope.menutitle;

    $scope.navigation = NavigationService.getnav();

    // $scope.fireConversion = function () {
    //   $window.google_trackConversion({
    //     google_conversion_id: 871611672,
    //     google_conversion_language: "en",
    //     google_conversion_format: "3",
    //     google_conversion_color: "ffffff",
    //     google_conversion_label: "1e3dCKHpiGsQmPrOnwM",
    //     google_remarketing_only: false
    //   });
    // };
    //
    // $scope.fireConversion();

})


.controller('FormCtrl', function($scope, TemplateService, NavigationService, $state, $timeout) {

        $scope.template = TemplateService.changecontent("form");
        $scope.menutitle = NavigationService.makeactive("Form");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "";

        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }

        $scope.formData = {};
        $scope.flags = {};
        $scope.submitForm = function() {
            $scope.flags.thankyou = false;
            $scope.formData.subject = "Landing Page Inquiry Details";
            //console.log("ffff", $scope.formData);
            NavigationService.submitForm($scope.formData, function(res) {
                if (res.value) {
                    $state.go('thankyou');
                } else {

                }
            });
            NavigationService.submitFormBackend($scope.formData, function(res) {
                if (res.value) {
                    $state.go('thankyou');
                } else {

                }
            });
        };
        $scope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                $('#enquiryform').validate();
                console.log("yo");

                // LEAD SOURCE FUNCTION
                function getParameterByName(name, url) {

                    if (!url) {
                        url = window.location.href;
                    }

                    var res = url.split("lead_source=");
                    //  alert(res[1]);
                    //name = name.replace(/[\[\]]/g, "\\$&");
                    //var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    //    results = regex.exec(url);
                    //if (!results) return null;
                    //if (!results[2]) return '';
                    //return decodeURIComponent(results[2].replace(/\+/g, " "));
                    return res[1];
                }
                var msg = getParameterByName('source');

                if (msg == "programmatic") {

                    var x = document.getElementById("lead_source");
                    x.remove(x.selectedIndex);
                    // add new option which has value programmatic and text programmatic

                    var opt = document.createElement('option');
                    opt.value = 'programmatic';
                    opt.text = 'programmatic';
                    opt.setAttribute('selected', 'selected');
                    lead_source.options.add(opt);
                }
              // LEAD SOURCE FUNCTION END

            }, 0);
        });

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
        // console.log("Language CLicked");

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


});
