const jsonServer=require('json-server')
//create a json server app
const server=jsonServer.create()
//set up path for db.json
const router=jsonServer.router('db.json')
//Returns midddleware used by JSON server
const middleware=jsonServer.defaults()
//set up port  
const port = process.env.PORT || 4000
//user router,midddleware in server
server.use(middleware)
server.use(router)
//app.listen
server.listen(port,()=>{
    console.log('application started at 4000')
})
