const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira a quantidade de aluno? ', (quantidade) => {

console.log(` A quantidade de alunos é : ${quantidade}`);
console.log("o numero 0 não pode ser PAR e nem IMPAR")
for (var x = 1; x <= quantidade; x++) {
        
     if(x % 2 == 0) {
    console.log(x +" número é par");
}else{
    console.log(x +" número é impar");
}
}


rl.close()

   
});

