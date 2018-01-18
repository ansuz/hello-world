process.on('uncaughtException', e => console.log('Hello world!'));
throw new Error('OH NO');
