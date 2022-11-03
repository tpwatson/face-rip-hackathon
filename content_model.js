import pg from 'pg';
const Pool = pg.Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});


const getContent = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM content ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })  
     }) 
    }
      
      const createContent = (body) => {
        return new Promise(function(resolve, reject) {
          const { title, description, cid } = body
          pool.query('INSERT INTO content (title, description, cid) VALUES ($1, $2, $3) RETURNING *', [title, description, cid], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`A new content has been added added: ${results.rows[0]}`)
          })
        })
      }
      const deleteContent = () => {
        return new Promise(function(resolve, reject) {
          const id = parseInt(request.params.id)
          pool.query('DELETE FROM content WHERE id = $1', [id], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`Content deleted with ID: ${id}`)
          })
        })
      }

      function calculateDaysBetweenDates(begin, end) {
        var date1 = new Date(begin);
        var date2 = new Date(end);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
        }
        

export default { getContent, createContent, deleteContent }