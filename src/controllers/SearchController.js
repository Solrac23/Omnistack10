const Dev = require('../models/Dev')
const parseStringArray = require('../utils/parseStringArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringArray(techs)
        //busca todos devs num raio 10km
        //Filtrar por tecnologias

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 100000,
                },
            },
        })

        return response.json({ devs })

    }
}
console.log('SearchController, OK')