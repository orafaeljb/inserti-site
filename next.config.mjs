/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Redirecionamentos 301 dos endereços antigos de serviços que foram renomeados
  async redirects() {
    return [
      {
        source: "/servicos/firewall-como-servico-fortinet",
        destination: "/servicos/firewall-como-servico",
        permanent: true,
      },
      {
        source: "/servicos/backup-m365-google-workspace",
        destination: "/servicos/backup-microsoft-365-google-workspace",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

