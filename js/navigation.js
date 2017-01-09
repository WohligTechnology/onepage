//  var adminurl = "http://localhost:1337/";
//var adminurl = "http://104.155.129.33:92/";
//var NEW CLOUD URL var adminurl ="http://104.154.110.195:92/";


var adminurl ="http://104.154.110.195:92/";


if (isproduction) {
  adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
  var navigation = [{
    name: "what we host",
    classis: "active",
    anchor: "host",
  }, {
    name: "why us",
    classis: "active",
    anchor: "whyus",
  }, {
    name: "gallery",
    classis: "active",
    anchor: "gallery",
  }, {
    name: "about us",
    classis: "active",
    anchor: "about",
  }, {
    name: "contact us",
    classis: "active",
    anchor: "contact",
  }];

  return {
    getnav: function () {
      return navigation;
    },
    makeactive: function (menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    submitForm: function (mydata, callback) {
      console.log(" in mailer ");
      //console.log("mydata",mydata);
      $http({
        url: 'http://www.smaaashcricket.com/1899latitude/mail.php?name=' + mydata.name + '&email=' + mydata.email + '&phone=' + mydata.phone + '&comment=' + mydata.comment + '&subject=' + mydata.subject,
        method: 'GET',
        withCredentials: true,
        data: mydata
      }).success(callback);
    },
    sendDataBackend: function (mydata, callback) {
      console.log(" in service ");
      console.log(mydata);
      //contact us
      $http({
        url: adminurl + 'ContactUs/save',
        method: 'POST',
        withCredentials: true,
        data: mydata
      }).success(callback);
    },
    submitFormBackend: function (mydata, callback) {
      console.log(" in service of form ");
      console.log(mydata);
      //contact us
      $http({
        url: adminurl + 'enquiry/save',
        method: 'POST',
        withCredentials: true,
        data: mydata
      }).success(callback);
    }
  };
});
