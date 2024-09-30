// Handle connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  