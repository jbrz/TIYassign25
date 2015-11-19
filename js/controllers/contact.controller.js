let ContactController = function($scope, PARSE, ContactService) {
  
  let vm = this;
  vm.title = 'Contacts';
  vm.contact = getContact();

  function getContact() {
    ContactService.getContact().then( (res) => {
      console.log(res.data.results);
      vm.contact = res.data.results;
    });
  }

};

ContactController.$inject = ['$scope','PARSE','ContactService'];

export default ContactController;