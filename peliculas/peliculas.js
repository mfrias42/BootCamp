const pelicula = [
    {
        'nom': "matrix",
        'gen': "ficcion",
    },

    {
        'nom': "cars",
        'gen': "infantil",
    },

    {
        'nombre': "titanic",
        'gen': "romance",
    },

    {
        'nombre': "rapidos y furiosos",
        'gen': "accion",
    },

    {
        'nombre': "son como niños",
        'gen': "comedia",
    },

    {
        'nombre': "midway",
        'gen': "drama",
    }
]

const gen = [
    
        "ficcion", "infantil", "romance", "accion", "comedia", "drama",
    
];

let seleccion = gen.map(function (gen){
    return (pelicula.filter(function(pelicula){
        return (pelicula.gen === gen);
    }))
});

console.log(seleccion);