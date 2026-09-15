import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
