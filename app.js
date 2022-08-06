const env  = require('./app/utils/config')
const app =  require('./app/routes')
 
const sequelize = require('./app/config/main.database')

// sequelize.sync();

app.listen(8080)