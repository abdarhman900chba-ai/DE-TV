import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // هذا هو الحل الصحيح: يظهر الرابط للزائر ولغوغل بـ /de/ ولكن الملف الحقيقي يعمل من المسار الأصلي دون 404
  async rewrites() {
    return [
      {
        source: '/de/:path*',
        destination: '/:path*',
      },
    ];
  },

  images: {
    unoptimized: true, // لإيقاف استهلاك Vercel للصور نهائياً
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;