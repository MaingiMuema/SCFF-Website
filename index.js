//get the form by its id
const form = document.getElementById("contact"); 

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
})

const sendMail = (mail) => {
    
    fetch("/send", {
      method: "post", 
      body: mail, 
  
    }).then((response) => {
      return response.json();
    });
  };