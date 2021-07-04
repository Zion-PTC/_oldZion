// ==== UNPACKING FIELDS FROM OBJECTS PASSED AS A FUNCTION PARAMETER

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userID({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(userID(user));
console.log(whois(user));

// This unpacks the id, displayName and firstName from the
// user object and prints them.