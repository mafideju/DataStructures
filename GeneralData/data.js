function User(nome, sobrenome, idade, sexo) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.sexo = sexo;
}

const Marcio = new User('Marcio', 'Rodrigues', 35, 'M');
const Carol = new User('Carol', 'Pin', null, 'F');

User.prototype.emailDomain = '@facebook.com'

User.prototype.getEmailAddress = function () {
  return `O email de ${this.nome} será ${this.nome.toLowerCase()}.${this.sobrenome.toLowerCase()}${this.emailDomain}`
}
// const formatedEmail = User.getEmailAddress();
console.log(Marcio);
console.log(Carol)
console.log(Marcio.getEmailAddress())
console.log(Carol.getEmailAddress())