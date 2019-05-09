const fs = require('fs')
const path = require('path')

const comicPath = process.argv[2]

const entries = []
fs.readdirSync(comicPath).forEach(file => {
    if (file.indexOf(' - ') === -1) return

    const authorAndTitle = file.split(" - ")

    const pages = fs.readdirSync(path.join(comicPath, file))

    entries.push({ author: authorAndTitle[0], title: authorAndTitle[1], pages })
})

const catalogPath = path.join(comicPath, "catalog.json")
fs.writeFileSync(catalogPath, JSON.stringify(entries))

console.log(`created catalog at ${catalogPath}`)