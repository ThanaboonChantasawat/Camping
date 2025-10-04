import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    serverActions:{
      bodySizeLimit: '10mb'
    }
  },
  reactStrictMode:false,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'exctdqyencyenfiarrbq.supabase.co'
      }
    ]
  }
};

export default nextConfig;
