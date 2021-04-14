export default class UserBuilder {
  constructor() {
    this.user = {
      name: 'John Doe'
    }
  }
  
  withPassword() {
    this.user.password = '123'

    return this
  }

  withEmail() {
    this.user.email = 'john.doe@email.com'

    return this;
  }

  withNickname() {
    this.user.nickname = 'xXLittleJohnXx'

    return this
  }

  build() {
    return this.user;
  }
}