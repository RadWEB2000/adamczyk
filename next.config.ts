import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname:'performancegroup.pl'
      }
    ]
  }
};

export default nextConfig;
