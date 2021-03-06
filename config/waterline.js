var mysqlAdapter = require('sails-mysql');

module.exports = {
  adapters: {
    mysqlAdapt: mysqlAdapter
  },

  // Build Connections Config
  // Setup connections using the named adapter configs
  connections: {

    mysqlDB: {
      adapter: 'mysqlAdapt',
      
	 user : process.env.OPENSHIFT_MYSQL_DB_USERNAME || "root",
		password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "",
		database : process.env.OPENSHIFT_GEAR_NAME || 'raadd',
		host:'163.180.116.192',
		port:process.env.OPENSHIFT_MYSQL_DB_PORT,
		
      supportBigNumbers:true, //true/false
      debug:false,  //['ComQueryPacket'], //false or array of node-mysql debug options
      trace:true //true/false
    } 
   }

};
