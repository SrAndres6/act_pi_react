/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn2.yamaha-motor.eu" },
      { protocol: "https", hostname: "content2.kawasaki.com" },
      { protocol: "https", hostname: "powersports.honda.com" },
      { protocol: "https", hostname: "www.suzuki.es" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "www.yamahamotos.cl" },
      { protocol: "https", hostname: "dhqlmcogwd1an.cloudfront.net" },
      { protocol: "https", hostname: "www.hondamotovalencia.es" },
      { protocol: "https", hostname: "www.mundomotero.com" },
      { protocol: "https", hostname: "www.moto1pro.com" }, // 👈 Ducati
    ],
  },
};

module.exports = nextConfig;
