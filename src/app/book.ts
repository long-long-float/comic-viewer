import { config } from './config'

export class Book {
    id: number
    author: string
    title: string
    pages: string[]

    constructor(id: number, author: string, title: string, pages: string[]) {
        this.id = id
        this.author = author
        this.title = title
        this.pages = pages
    }

    getThumbURL() {
        return `${config.contentsServer}/${this.author} - ${this.title}/${this.pages[0]}`
    }

    getPageURL(page: number) {
        return `${config.contentsServer}/${this.author} - ${this.title}/${this.pages[page]}`
    }
}
