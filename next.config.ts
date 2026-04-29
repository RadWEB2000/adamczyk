import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname:'performancegroup.pl'
      },
      {
        hostname:'portalsremski.pl'
      },
      {
        hostname:'cms.adamczyk.top'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/logowanie',
        destination: 'https://cms.adamczyk.top/logowanie',
        basePath: false,
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
