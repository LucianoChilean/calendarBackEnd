
const config = {
   basepath:  process.env.BASE_URL,
   port: process.env.PORT,
   headers:{
     token:'',
     hash:'',
   },
   configBD:{
     fullUrl: process.env.BD_LOCAL,
     mongo:'',
     url:'',
     user:'',
     password: '',
   },
  jwt: process.env.SECRET_JWT_SEED,
  timezone: process.env.TIME_ZONE
}



module.exports = config;