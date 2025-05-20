import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEON_DATABASE_URL: process.env.NEON_DATABASE_URL,
    WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
  }
};

export default nextConfig;
