module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000/'],
        startServerCommand: 'node __sapper__/build',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  