var adminurl = "http://localhost:1337/";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "what we host",
    classis: "active",
    anchor: "host",
  },
  {
    name: "why us",
    classis: "active",
    anchor: "whyus",
  },
  {
    name: "gallery",
    classis: "active",
    anchor: "gallery",
  },
  {
    name: "about us",
    classis: "active",
    anchor: "about",
  },
  {
    name: "contact us",
    classis: "active",
    anchor: "contact",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    submitForm: function(mydata, callback) {
      //console.log("mydata",mydata);
      $http({
        url: 'http://ting.in/1899latitude.com/mail.php?name='+mydata.name+'&email='+mydata.email+'&phone='+mydata.phone+'&comment='+mydata.comment+'&subject='+mydata.subject,
        method: 'GET',
        withCredentials: true,
        data: mydata
      }).success(callback);
    },
    sendDataBackend: function(mydata, callback) {
      //contact us
      $http({
        url: adminurl+'contactus/save',
        method: 'POST',
        withCredentials: true,
        data: mydata
      }).success(callback);
    }
  };
});
