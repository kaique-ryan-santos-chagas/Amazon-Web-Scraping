const csvWriter = require('csv-writer');
const connection = require('./database/connection');

const csvGenerate = async () => {

    const productsData = await connection('product_data').select('name', 'price', 'image_source');

    const csv = csvWriter.createObjectCsvWriter({
        path: 'products.csv',
        header: [
            {id: 'name', title: 'Name'},
            {id: 'price', title: 'Price'},
            {id: 'image_source', title: 'Image'}
        ]
    });

    return csv.writeRecords(productsData).then(() => console.log('Dataset generated.'));

}

module.exports = csvGenerate;