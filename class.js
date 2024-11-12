class Rectangle {
    constructor(height, width, color) {
        this.height = height
        this.width = width
        this.color = color
    }

    area () {
        const area = this.height * this.width
        return area
    }

    paint () {
        console.log(`Paint of the given rectangle ${this.color}`)
    }
}

const rect = new Rectangle(2, 4, 'red')
const area = rect.area()

console.log(rect)
rect.paint()