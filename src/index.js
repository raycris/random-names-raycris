const messagesNames = [
    "Hola",
    "Uva bombon",
    "Alta Gama",
    "Raycris Maldonado",
    "Ramon Maldonado",
    "Pizzeily Maldonado",
    "John Cena",
    "Roman Reigns",
    "Brock Lesnar",
    "WWE Championship"
]

const randomMsg = () => {
    const message = messagesNames[Math.floor(Math.random() * messagesNames.length)]
    console.log(message);
}

module.exports = {randomMsg};