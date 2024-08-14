function async(message, delay) {
    return new Promise((resolve) => {
        resolve(message);
      });
  }
  async function task() {
    try {
      console.log('Start Async Operation');
      const result1 = await async('First operation completed');
      console.log(result1);
      const result2 = await async('Second operation completed');
      console.log(result2);
      console.log('All operations completed.');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
    task();
  
