// /**
//  * @type {import('next').NextConfig}
//  */
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//     basePath: isProd ? '/' : '',
//     output: 'export',
//     distDir: 'dist',
//     images: {
//         unoptimized: true,
//     }
//   };
   
//   module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '' : '', // 루트 도메인에 호스팅하는 경우
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;