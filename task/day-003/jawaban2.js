const user = {
  login() {
    console.log(this.email, " telah login");
  },
  logout() {
    console.log(this.email, " telah logout");
  },
  register() {
    console.log(this.email, " telah mendaftar");
  },
  changeEmail() {
    console.log(this.email, " email telah di ganti");
  },
};

function User(email, password) {
  this.email = email;
  this.password = password;
  this.login = user.login;
  this.logout = user.logout;
  this.register = user.register;
  this.changeEmail = user.changeEmail;
}

let userBaru = new User("test@test.com", "123123");
