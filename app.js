const env  = require('./app/utils/config')
const app =  require('./app/routes')
 
const sequelize = require('./app/config/main.database')

app.listen(8080)