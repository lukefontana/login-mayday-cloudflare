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
