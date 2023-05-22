/** @format */

const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '' : undefined,
  basePath: '',
  //编译图标
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  //distDir build输出目录
  distDir: 'build',
  //信任域名，否则Image不显示
  experimental: {
    urlImports: ['https://example.com/assets/'],
  },
  //导出静态
  // output: "export",
};

module.exports = nextConfig;
