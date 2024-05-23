import query from "../config/connection.js";


async function findOne(id) {
    
    return query('SELECT * FROM products WHERE productID = ?', [id]);

}

async function findAll() {
  
    return await query("SELECT * FROM products");

}

async function addOne(data) {
    
    return await query('INSERT INTO products SET ?', [data]);

}

async function updateOne(id, data) {
    
    return await query('update products set ? where productID = ?', [data, id]);
}


async function removeOne(id) {
    
    return await query('delete from products where productID = ?', [id]);

}

export {

    findOne,
    findAll,
    addOne,
    updateOne,
    removeOne
    
}