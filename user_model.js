import pg from 'pg';
const Pool = pg.Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});


const getUsers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })  
     }) 
    }
      
      const createUser = (body) => {
        return new Promise(function(resolve, reject) {
          const { name, email } = body
          pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`A new user has been added added: ${results.rows[0]}`)
          })
        })
      }
      const deleteUser = () => {
        return new Promise(function(resolve, reject) {
          const id = parseInt(request.params.id)
          pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`User deleted with ID: ${id}`)
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
        
        function logInUser(email, password) {
          return new Promise(function(resolve, reject) {
            pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
              if (error) {
                reject(error)
              }
              resolve(results.rows);
            })
          })
        }

export default { getUsers, createUser, deleteUser }