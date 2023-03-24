let dinoArray = ['Stegosaurus', 'Sharptooth', 'Longneck', 'Ducky']

module.exports = {
    getDinos: (req, res) => {
        res.status(200).send(dinoArray)
    },

    addDino: (req, res) => {
        let {name} = req.body

        console.log(name)

        dinoArray.push(name)

        res.status(200).send(dinoArray)
    },

    deleteDino: (req, res) => {
        let index = req.params.id - 1

        dinoArray.splice(index, 1)

        res.status(200).send(dinoArray)
    }
}