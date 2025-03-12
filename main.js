/* Problema: Crear objeto a partir de un Libro

Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro */

const LIBROTE = function (titulo, autor) {
    return {
        titulo: titulo,
        autor: autor,
        anio: 1997,
        estado: "prestado",
        capitulos: [
            "Tú no eres tu mente",
            "La conciencia: la salida del dolor"
        ],
        capitulos_details: [
            {
                titulo: "Tú no eres tu mente",
                order: 1,
                by: "Eckhart Tolle"

            }
        ],
        describirLibro: function () {
            console.log(
                "Este libro tiene el titulo de: " + this.titulo + " que contiene:  " + this.capitulos.length + " capitulos"
            )
        },
        agregarCapitulo: function (capitulo) {
            if (
                capitulo === "" ||
                typeof capitulo === "undefined" ||
                typeof capitulo === "number") {
                return
            }

            this.capitulos.push(capitulo)
        },
        verListaCapitulos: function () {
            return this.capitulos
        },
        deleteTitulo: function (capituloAborrar) {
            const filter = []     
            for (let i = 0; i < this.capitulos.length; i++) {
                const cap = this.capitulos[i]
                if (cap === capituloAborrar) {
                    continue
                }

                filter.push(cap)
            }

            this.capitulos = filter
        }
    }
}




const libro1 = LIBROTE("El Poder del Ahora", "Eckhart Tolle")
libro1.describirLibro()
const libro2 = LIBROTE("Sonbrenatural", "Joe Dispenza")
libro2.describirLibro()
const libro3 = LIBROTE("Los Cuatro Acuerdos", "Don Miguel Ruiz")
libro3.describirLibro()

libro1.agregarCapitulo("El poder del silencio")
libro1.agregarCapitulo("La conciencia: la salida del dolo")

libro2.agregarCapitulo("Abriendo la puerta a lo sobrenatural")
libro2.agregarCapitulo("El instante presente")

libro3.agregarCapitulo("Sé íntegro al hablar.")
libro3.agregarCapitulo("Di solo lo que pienses")


console.log("Capítulos libro 1:", libro1.verListaCapitulos())
console.log("Capítulos libro 2:", libro2.verListaCapitulos())
console.log("Capítulos libro 3:", libro3.verListaCapitulos())

/*
agregarLibro("El Poder del Ahora");
agregarLibro("Los Cuatro Acuerdos");
agregarLibro("Sobrenatural");
agregarLibro("Muchas vidas, muchos maestros")
*/