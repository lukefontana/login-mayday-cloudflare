/*module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://webkfc.neotelecd.com/neoapi/webservice.asmx/:path*'
      }
    ];
  }
};
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://webkfc.neotelecd.com/:path*',
      },
    ]
  },
}*/
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/kfc/:path*',
        destination: 'http://webkfc.neotelecd.com/:path*',
      },
      {
        source: '/api/proxy/mcdonald/:path*',
        destination: 'http://webmcdonald.neotelecd.com/:path*',
      },
    ]
  },
}
