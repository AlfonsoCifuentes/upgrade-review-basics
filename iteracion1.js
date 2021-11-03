// Iteración #1: Mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const categorias = [];

for (var peli of movies){
    for (var categoria of peli.categories){
        if (categorias.includes (categoria)){
            continue
        }else{
        categorias.push(categoria);}
    }
}

console.log (categorias);