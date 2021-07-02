// Padrão do sistema
let comida = ['pipoca', 'macarrao', 'carne', 'feijao', 'brigadeiro']
let tPadrao = [10, 8, 15, 12, 8]

// ***********alterar aqui************
let tUsuario = 31
let indiceComida = comida.indexOf('queijo')

// resto do código
let mensagem = ''
let tempo = tPadrao[indiceComida]

if (tUsuario < tempo) 
{mensagem = 'Tempo insuficiente'}

else if (tUsuario >= tempo && tUsuario <= 2*tempo)
{mensagem = "Prato pronto, bom apetite!!!"}

else if (tUsuario > 2*tempo && tUsuario <= 3*tempo)
{mensagem = "A comida queimou :("}

else if ( tUsuario > 3*tempo)
{mensagem = "KABUMM"}

else {mensagem = "Prato inexistente"}

console.log(mensagem)