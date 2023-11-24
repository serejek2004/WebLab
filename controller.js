const db = require('./db');

exports.read = (req, res) => {
    const { searchQuery, selectedCategory, sortByPrice } = req.query;

    let selectQuery = 'SELECT * FROM table1';

    if (searchQuery) {
        selectQuery += ` WHERE title LIKE '%${searchQuery}%'`;
    }

    if (selectedCategory !== 'all') {
        if (searchQuery) {
            selectQuery += ` AND category = '${selectedCategory}'`;
        } else {
            selectQuery += ` WHERE category = '${selectedCategory}'`;
        }
    }

    if (sortByPrice) {
        selectQuery += ` ORDER BY price ${sortByPrice.toUpperCase()}`;
    }

    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                title: row.title,
                category: row.category,
                price: row.price,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.productId;
  
    const selectQuery = `SELECT * FROM table1 WHERE id = ${productId}`;
  
    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                title: row.title,
                category: row.category,
                price: row.price,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
  };