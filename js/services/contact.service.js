let ContactService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  this.getSubmissions = getSubmissions;

  function getSubmissions () {
    return $http.get(url, PARSE.CONFIG);
  }

};

ContactService.$inject = ['$http','PARSE'];

export default ContactService;