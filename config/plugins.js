module.exports = () => ({
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 10000000, // 10 MB limit
        },
      },
    },
  });
  