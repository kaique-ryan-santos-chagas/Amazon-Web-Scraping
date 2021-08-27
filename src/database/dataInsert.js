const connection = require('./connection');
const crypto = require('crypto');
const csvGenerate = require('../csvGenerator');

const dataInsert = async (data) => {

    const productId = crypto.randomBytes(6).toString('HEX');

    await connection('product_data').insert({
        id: productId,
        name: data.name,
        price: data.price,
        image_source: data.image
    });

    console.log('Inserted into database.');
    csvGenerate();
}

module.exports = dataInsert;