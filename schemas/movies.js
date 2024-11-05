const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'El titulo debe ser un sting',
        required_error: 'El titulo debe ser requerido'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string().url({
        message: 'Poster debe ser una URL'
    }),
    genre: z.array(z.enum(['Action', 'Adventure', 'Comedy']))

})

function validateMovie(object){
    return movieSchema.safeParse(object)
}

function validatePartialMovie(input){
    return movieSchema.partial().safeParse(input)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}