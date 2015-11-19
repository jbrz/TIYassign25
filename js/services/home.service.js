let HomeService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/contact';
  this.newContact = newContact;



  function Contact (conObj) {
    this.name = conObj.name;
    this.email = conObj.email;
    this.website = conObj.website;
    this.message = conObj.message;
  }

  function newContact (conObj) {
    console.log(conObj);
    let n = new Contact(conObj);
    return $http.post(url, n, PARSE.CONFIG);
  }


};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;