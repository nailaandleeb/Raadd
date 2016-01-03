var mysqlAdapter = require('sails-mysql');

//var mongoAdapter = require('sails-mongo');
module.exports = {

  // Setup Adapters
  // Creates named adapters that have have been required
  adapters: {
   // mongoAdapt: mongoAdapter
    mysqlAdapt: mysqlAdapter
  },

  // Build Connections Config
  // Setup connections using the named adapter configs
  connections: {

    mysqlDB: {
      adapter: 'mysqlAdapt',
      
	 user : "sql6101744",
		password :"FeEyYDyriK",
		database : 'sql6101744',
		host:"sql6.freemysqlhosting.net",
		port:3306,
		
      supportBigNumbers:true, //true/false
      debug:false,  //['ComQueryPacket'], //false or array of node-mysql debug options
      trace:true //true/false
    } 
   }

};
