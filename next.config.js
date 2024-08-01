/*module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/:path*'
      }
    ];
  }
};*/
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://webkfc.neotelecd.com/:path*',
      },
    ]
  },
}