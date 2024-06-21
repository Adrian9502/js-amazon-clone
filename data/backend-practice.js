const xhr = new XMLHttpRequest();

// wait for response
xhr.addEventListener("load", () => {
  console.log("MESSAGE FROM BACKEND -", xhr.response);
});

// param 1 = type of message, GET,POST
// param 2 = where to send that message
xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
