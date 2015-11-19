let ContactController = function($scope, PARSE, ContactService) {
  
  let vm = this;
  vm.title = 'Submissions';
  vm.contact = getContact();

  function getContact() {
    ContactService.getContact().then( (response) => {
      vm.contact = response.data.results;
    });
  }

};

ContactController.$inject = ['$scope','PARSE','ContactService'];

export default ContactController;