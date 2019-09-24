const authenticationService = {

login :function(username,password){
    let user = { username: "javainuse", password: "password" };
    fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => localStorage.setItem("token", JSON.stringify(data)))
},
logout :function(){
    localStorage.removeItem("token");
}

}
export default authenticationService;