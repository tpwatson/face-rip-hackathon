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
        //console.log("body.uploadFormData", body.uploadFormData );
        return new Promise(function(resolve, reject) {
          const { title, description, tags, cid, filename, filetype, timestamp } = body.uploadFormData;
          pool.query('INSERT INTO content (title, description, tags, cid, filename, filetype, timestamp) VALUES ($1, $2, $3, $4, $5, $6 ,$7) RETURNING *', [title, description, tags, cid, filename, filetype, timestamp], (error, results) => {
            if (error) {
              reject(error)
            }
            if (results) {
              resolve("A new content has been added added: " + results.rows[0]);
            } else {
                resolve("No content created");
            }
            //resolve(`A new content has been added added: ${results.rows[0]}`)
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