// DESAFIO CLASE 2
// Emiliano Sebastian

class UsuarioCL {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getfFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(libro) {
    this.libros.push(libro);
  }

  getBookNames() {
    let soloNombres = [];

    for (let i = 0; i < this.libros.length; i++) {
      soloNombres.push(this.libros[i].nombre);
    }
    return soloNombres;
  }
}

const usuario = new UsuarioCL(
  "Elon",
  "Musk",
  [
    { nombre: "La fundacion", Autor: "I. Asimov" },
    { nombre: "GOT", Autor: "George R.R Martin" },
    { nombre: "Nacidos de la bruma", Autor: "B. Sanderson" },
  ],
  ["Perro", "Gato", "Pajaro"]
);

//imprimo el nombre completo.
console.log(usuario.getfFullName());
//invoco el metodo addMascota enviandole un parametro y luego imprimo la lista actualizada
usuario.addMascota("Pez");
console.log(usuario.mascotas);
//invoco e imprimo el metodo countMascotas que nos devuelve el numero total de mascotas.
console.log(`El total de mascotas es: ${usuario.countMascotas()}`);
//Envio libro por parametro, lo agrego al array de libros y luego imprimo la lista actualizada de objetos.
usuario.addBook({ nombre: "LOTR", autor: "Tolkien" });
console.log(usuario.libros);
//Imprimo nuevo array con solo nombre de libros
console.log(usuario.getBookNames());
