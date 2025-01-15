// Função para somar dois números
function soma(a, b) {
  return a + b
}

console.log(soma(2, 2))

// Função para exibir uma mensagem de boas-vindas
function showWelcomeMessage(name) {
  console.log(`Bem-vindo, ${name}`)
}

showWelcomeMessage("João")

// Variável para guardar uma mensagem de boas-vindas
let boasVindas = "Você parece ser novo por aqui, certo?"
boasVindas = "Você não é novo por aqui!"

function displayWelcomeMessage() {
  console.log(boasVindas)
}

displayWelcomeMessage()

// Função para verificar se é um robô
const serRobo = false

function checkRobotStatus() {
  if (serRobo) {
    console.log("Sua entrada foi negada pelo sistema!")
  } else {
    console.log("Sua entrada foi permitida pelo sistema!")
  }
}

checkRobotStatus()

const idade = 21

function checkAge() {
  if (idade >= 21) {
    console.log('ageTrue')
  } else {
    console.log('ageFalse')
  }
}

checkAge();

const birthday = "15/01" // Defina a data do aniversário

function checkBirthday(name) {
  // Obter a data atual
  const today = new Date()

  // Formatar o dia e o mês com dois dígitos
  const day = String(today.getDate()).padStart(2, "0")
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const todayFormatted = `${day}/${month}`

  // Verificar se a data de hoje é igual à data do aniversário
  if (birthday === todayFormatted) {
    console.log(`Hoje é o seu aniversário?! Meus parabéns, ${name}!`)
  } else {
    console.log(
      "Seu aniversário já passou? Eu acabei esquecendo, me desculpe..."
    )
  }
}

checkBirthday("Guilherme")

const celular = {
  cor: 'preto',
  ligar: function() {
    console.log('Ligando...');
    console.log(`A cor do celular é: ${this.cor}!`)
  }
}

celular.ligar();