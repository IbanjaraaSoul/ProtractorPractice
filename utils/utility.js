var randomStringGenerator = function () {
    var randomstr = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        randomstr += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log("randomstr val:" + randomstr);
      var storageGroupName="sg";
      var randomString=storageGroupName.concat(randomstr); 

    return randomString;
}

var randomStringGeneratorTwo = function () {
    var randomStringTwo = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        randomStringTwo += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log("randomstr val:" + randomStringTwo);
      var storageGroupDomainName="d";
      var randomStringTwo=storageGroupDomainName.concat(randomStringTwo); 

    return randomStringTwo;
}

module.exports = {
  randomStringGenerator: randomStringGenerator,
  randomStringGeneratorTwo: randomStringGeneratorTwo,

};