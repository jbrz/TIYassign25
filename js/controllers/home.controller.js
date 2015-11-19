let HomeController = function($scope, PARSE, HomeService) {
  
  let vm = this;
  vm.newContact = newContact;
  vm.title = 'Contact';

  function newContact (x) {
    HomeService.newContact(x).then( (response) => {
      $scope.conObj = {};
    });
  }


  // Name validation

  let validName = function(x) {
    if (x.length > 0) {
      vm.errMsg1 = 'You have a name!';
    } else {
      vm.errMsg1 = 'You must enter a name!';
    }
  };

  $scope.$watch('conObj.name', function (newVal, old) {
    if(!newVal) return;
    validName(newVal);
  });

  // e-mail validation

  $scope.$watch('conObj.email', function (newVal, prevVal) {
    if(!newVal) return;
    validEmail(newVal);
  });

  let validEmail = function(x) {
    let a = x.includes('@','.');

    if (a === true) {
      vm.errMsg2 = 'You have an email!';
    } else {
      vm.errMsg2 = 'You must enter a valid email address with an @ and a domain (.com, .net, etc.)!';
    }
  };

  // URL validation

  $scope.$watch('conObj.website', function (newVal, prevVal) {
    if(!newVal) return;
    validateWebsite(newVal);
  });

  let validWebsite = function(x) {
    let y = x.includes('http://');
    let z = x.includes('https://');
    if (y === true || z === true) {
      vm.errMsg3 = "You've got a website!";
    } else {
      vm.errMsg3 = 'You must enter a valid web address containing http:// or https:// !';
    }
  };

  // message validation

  $scope.$watch('conObj.message', function (newVal, prevVal) {
    if(!newVal) return;
    validateMessage(newVal);
  });

  let validMessage = function(x) {
    if (x.length > 0) {
      vm.errMsg4 = 'Thanks for contacting us! Please press submit.';
    } else {
      vm.errMsg4 = "You can't leave this blank!";
    }
  };

};

HomeController.$inject = ['$scope','PARSE','HomeService'];

export default HomeController;