const os=require('os')
//info about current user
const user =os.userInfo()
console.log(user)
//method returns the system uptime in seconds
console.log(`the system uptime in seconds is ${os.uptime()}`)
const curros={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(curros)