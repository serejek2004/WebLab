const db = require('./db'); 

exports.create = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const distance = req.body.distance;
  const type = req.body.type;

  const insertQuery = 'INSERT INTO drones (name, price, distance, type) VALUES (?, ?)';
  db.query(insertQuery, [name, price, distance, type], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(201).json({ message: 'Drone created successfully' });
    }
  });
};

exports.read = (req, res) => {
  const selectQuery = 'SELECT * FROM drones';
  db.query(selectQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      const data = results;
      const dataArray = [];

      data.forEach((row) => {
        dataArray.push({
          id: row.id,
          name: row.name,
          price: row.price,
          distance: row.distance,
          type: row.type
        });
      });
      res.setHeader('Content-Type', 'application/json');
      res.json({ data: dataArray });
    }
  });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const newName = req.body.newName;
  const newPrice = req.body.newPrice;
  const newDistance = req.body.newDistance;
  const newType = req.body.newType;

  const updateQuery = 'UPDATE drones SET name = ?, price = ? distance = ?, type = ? WHERE id = ?';
  db.query(updateQuery, [newName, newPrice, newDistance, newType, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Drone updated successfully' });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const deleteQuery = 'DELETE FROM drones WHERE id = ?';
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Drone deleted successfully' });
    }
  });
};
