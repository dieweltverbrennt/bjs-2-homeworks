// task 1

function parseCount(value) {
    if(isNaN(value) != true){
        return Number.parseInt(value);
    }
    else {
        throw new Error("Невалидное значение");
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(error) {
        return error;
    }
}

// task 2

class Triangle {
    constructor(a, b, c) {
        if (a + b >= c && a + c > b && b + c >= a) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        else throw new Error("Треугольник с такими сторонами не существует");
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let halfPerimeter = (this.a + this.b + this.c) / 2;
        return Number((Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return  new Object({
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },

            getArea() {
                return "Ошибка! Треугольник не существует";
            }
        });
    }
}