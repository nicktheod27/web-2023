import request from 'request';
import mysql from 'mysql2';

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sn520987',
  database: 'mydb'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// URL of JSON data
const jsonUrl = 'http://usidas.ceid.upatras.gr/web/2023/export.php';

// Fetch JSON data
request(jsonUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching JSON data from the URL: ', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }

  const data = JSON.parse(body);

  // Categories
  data.categories.forEach((category) => {
    const { id: category_id, category_name: category_name } = category;

    const sql = 'INSERT INTO category (category_id, category_name) VALUES (?, ?)';

    connection.query(sql, [category_id, category_name], (err) => {
      if (err) {
        console.error('Error inserting category:', err);
        return;
      }
      console.log('Category inserted successfully');
    });
  });
}); 
