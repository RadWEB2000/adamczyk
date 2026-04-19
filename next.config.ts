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
      }
    ]
  }
};

export default nextConfig;
