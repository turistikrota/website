if (!self.define) {
  let e,
    a = {}
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = s), (e.onload = a), document.head.appendChild(e)
        } else (e = s), importScripts(s), a()
      }).then(() => {
        let e = a[s]
        if (!e) throw new Error(`Module ${s} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const r = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (a[r]) return
    let c = {}
    const t = (e) => s(e, r),
      o = { module: { uri: r }, exports: c, require: t }
    a[r] = Promise.all(n.map((e) => o[e] || t(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-9b4d2a02'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: 'c2c97aa494bcdd53187397084daed001' },
        { url: '/_next/static/chunks/143-b2a8794376a070a3.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/175-1f049d292dd6a462.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/259-63dc711f829c36bf.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/274.b532f1e165bf474a.js', revision: 'b532f1e165bf474a' },
        { url: '/_next/static/chunks/293.5976fccc4062fd18.js', revision: '5976fccc4062fd18' },
        { url: '/_next/static/chunks/405-00230f28555c98cd.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/432-dd8bfe3b4e82fdbc.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/559.935a70cc5c536ba0.js', revision: '935a70cc5c536ba0' },
        { url: '/_next/static/chunks/560.03a8be387ad49e31.js', revision: '03a8be387ad49e31' },
        { url: '/_next/static/chunks/674.2e4be9d93e9b051e.js', revision: '2e4be9d93e9b051e' },
        { url: '/_next/static/chunks/749-acf1b94748e22047.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/93.7a3d103fdaa618c4.js', revision: '7a3d103fdaa618c4' },
        { url: '/_next/static/chunks/938-73aa4a6b905f4a3a.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/%5B...not_found%5D/page-6e7702abb9e2c0f3.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/about-us/layout-cf6bc6907d9e5323.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/about-us/page-c8b8818abb19f8c3.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/cok-yakinda/layout-b3e1bf7965dd1ea6.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/cok-yakinda/page-d417c50d5cd96f84.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/coming-soon/layout-d93c8cd3b53756bb.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/coming-soon/page-4a3b77fc79da2d32.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/contracts/layout-a1a57b08a0731996.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/contracts/privacy-and-protection-of-personal-data/page-d3998a29d47d05d2.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/contracts/privacy-notice/page-5a3e0a9c57777bcc.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/contracts/terms-of-use/page-b91e2c9b7a1defd3.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/hakkimizda/layout-d27b3704433acc9b.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/hakkimizda/page-a9b649c5f2cebabe.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        { url: '/_next/static/chunks/app/%5Blocale%5D/layout-dd5e6faff4e82aa8.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/not-found-11e50759e5a884c2.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        { url: '/_next/static/chunks/app/%5Blocale%5D/page-a6c7351a65d2d942.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/sozlesmeler/gizlilik-bildirimi/page-3518020133898cc8.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizlilik-politikasi/page-f7899db84b4f59af.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/sozlesmeler/kullanim-kosullari/page-13791dccd7abb7a4.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/sozlesmeler/layout-daeb92228a898832.js',
          revision: 'nl3TG0hzr8nIHc1BssnEr',
        },
        { url: '/_next/static/chunks/app/_not-found-2681421cf1cd6810.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/fd9d1056-d21dafaef1aec13c.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/framework-8883d1e9be70c3da.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/main-45f33692d03cc645.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/main-app-dfe7ab031fbab58e.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/pages/_error-e87e5963ec1b8011.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-541aa72b1a63d5f3.js', revision: 'nl3TG0hzr8nIHc1BssnEr' },
        { url: '/_next/static/css/6b13757d7e5f6044.css', revision: '6b13757d7e5f6044' },
        { url: '/_next/static/css/97dce055ac105f82.css', revision: '97dce055ac105f82' },
        { url: '/_next/static/media/4549bc8a45479062-s.woff2', revision: 'ce243dd335d727e90f8d967b533dfad8' },
        { url: '/_next/static/media/54cebcf4880b1614-s.woff2', revision: 'b0153cc5eb8b957b08e1780a2fe37ba8' },
        { url: '/_next/static/media/6979ad0d760ef130-s.woff2', revision: '5fe57907e3c6befb9ac7ad009183005c' },
        { url: '/_next/static/media/9d75a3f01345607c-s.woff2', revision: '824594ac483ddf11ddee2646fe0c0066' },
        { url: '/_next/static/media/bdd48e79561bcb5e-s.woff2', revision: '70e06bc152a151cc2e84dbfe49779e98' },
        { url: '/_next/static/media/boxicons.043adf59.woff2', revision: '043adf59' },
        { url: '/_next/static/media/boxicons.30e3c4d3.ttf', revision: '30e3c4d3' },
        { url: '/_next/static/media/boxicons.6b4a75b1.svg', revision: '6b4a75b1' },
        { url: '/_next/static/media/boxicons.ea5a983e.woff', revision: 'ea5a983e' },
        { url: '/_next/static/media/boxicons.f36b6848.eot', revision: 'f36b6848' },
        { url: '/_next/static/media/ce5ee29719474941-s.woff2', revision: '6cc77456953fbf40c7496e7a324d2341' },
        { url: '/_next/static/media/cfbaade285b042b2-s.woff2', revision: '9daab2dabb0ddb7e0717c126817d8687' },
        { url: '/_next/static/media/f6931192f105f318-s.p.woff2', revision: '45e2d3c7d02db7eb5eae98dc60e524d0' },
        { url: '/_next/static/media/verdana.09f97d08.woff2', revision: '09f97d08' },
        { url: '/_next/static/media/verdana.c33bd991.woff', revision: 'c33bd991' },
        { url: '/_next/static/nl3TG0hzr8nIHc1BssnEr/_buildManifest.js', revision: 'a1b7599199e2e8c82f2c6bcf8d8aca61' },
        { url: '/_next/static/nl3TG0hzr8nIHc1BssnEr/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/avatars/avatar_1.png', revision: 'fda684155a83ea7e1b84ab23468b73bc' },
        { url: '/avatars/avatar_10.png', revision: '583f09fabcc2374cc9248f28760116c0' },
        { url: '/avatars/avatar_11.png', revision: '9014359ead8b0cde558ae1f8cde1e874' },
        { url: '/avatars/avatar_12.png', revision: '33ea6e4e5464797f15d8e3446b40a78f' },
        { url: '/avatars/avatar_13.png', revision: 'b90a9ab96e5adc79a419cfd95fe54e97' },
        { url: '/avatars/avatar_14.png', revision: 'edb1c0936cf334613a031424a2de94a1' },
        { url: '/avatars/avatar_15.png', revision: '341aaaca6508577b59a7ed6ce3573d67' },
        { url: '/avatars/avatar_16.png', revision: '257f17c5559ce5a9facbd1ef995de5b1' },
        { url: '/avatars/avatar_17.png', revision: '8193882a6cfaae8709d6583b9180c1e3' },
        { url: '/avatars/avatar_18.png', revision: 'df0742403726f7780d0ea3f54072f5ae' },
        { url: '/avatars/avatar_19.png', revision: 'd6834cab4949bd7c52126fde982003f5' },
        { url: '/avatars/avatar_2.png', revision: 'f8dee91acd7f276d2c4eba231ad15015' },
        { url: '/avatars/avatar_20.png', revision: '36b0f5fd523d9e1ab95f494fa5841890' },
        { url: '/avatars/avatar_21.png', revision: '1b0bf2e1bd4639d2d796b89787b6c9c3' },
        { url: '/avatars/avatar_22.png', revision: 'c6a00b725f2909afe763c1cf3a2f3066' },
        { url: '/avatars/avatar_23.png', revision: '5decbd89695acb5b1ffd827f4c68d83f' },
        { url: '/avatars/avatar_24.png', revision: '1af38688843aa009af6347bc7ecd13ec' },
        { url: '/avatars/avatar_3.png', revision: '61ead126ba1f2238e61626e0382f9102' },
        { url: '/avatars/avatar_4.png', revision: '359902f90f6baa907b40a8bd0106ffc0' },
        { url: '/avatars/avatar_5.png', revision: 'a3353ba8804da2d93970c670b0ecff79' },
        { url: '/avatars/avatar_6.png', revision: 'ec344be8bf1711184d16e3b4ed864659' },
        { url: '/avatars/avatar_7.png', revision: 'd8fc9c339e909e949588137aa7b840ec' },
        { url: '/avatars/avatar_8.png', revision: '98e8f679d377f4b1c6dc3fee8b2330df' },
        { url: '/avatars/avatar_9.png', revision: '3bafbbf3875fa54997ed5dcf0d094602' },
        { url: '/favicon.ico', revision: '5c28f742019110cd3b54c767fc609ae5' },
        { url: '/images/app-store.svg', revision: '7f6285781d4d8a50edc0996e76ee6da3' },
        { url: '/images/mobile-ss.png', revision: '823076eb30295d959280e9e4d69b1bc2' },
        { url: '/images/play-store.svg', revision: 'bbdfcaa27181cb44dc0cbd6ba0645dfe' },
        { url: '/manifests/android/android-launchericon-144-144.png', revision: '8f04e5e57baf864e6d1cf0e05c24c5ae' },
        { url: '/manifests/android/android-launchericon-192-192.png', revision: '99f1e3b20b0616a5a06f5c57403d173f' },
        { url: '/manifests/android/android-launchericon-48-48.png', revision: '12dfb973868074d308f1755e2b3191be' },
        { url: '/manifests/android/android-launchericon-512-512.png', revision: '5316a4e9bfe2612a3e25f98d7f4be1b5' },
        { url: '/manifests/android/android-launchericon-72-72.png', revision: 'a055fe12e3541a97a0b593e1e51cfb39' },
        { url: '/manifests/android/android-launchericon-96-96.png', revision: 'a87280c0d5c8d1796fef76c49aca0be8' },
        { url: '/manifests/ios/100.png', revision: 'ee4fc26f4da5c09e498df30026523d80' },
        { url: '/manifests/ios/1024.png', revision: '6edc3e921ab2d0f3fe5bcda1ba44f65e' },
        { url: '/manifests/ios/114.png', revision: 'c0f1a8d370ee9e5c5bc2926a87e278c9' },
        { url: '/manifests/ios/120.png', revision: '4ea0668f56355c0485ce70bb0bc27c72' },
        { url: '/manifests/ios/128.png', revision: 'b48268aff20ff38cc9857794d8213dbd' },
        { url: '/manifests/ios/144.png', revision: '8f04e5e57baf864e6d1cf0e05c24c5ae' },
        { url: '/manifests/ios/152.png', revision: '74944f7ede21890fe27c8a4b3b51c45f' },
        { url: '/manifests/ios/16.png', revision: 'd696cb17d953b4c48798897b1565c94c' },
        { url: '/manifests/ios/167.png', revision: 'e322af0058d353d3592412eb1146b065' },
        { url: '/manifests/ios/180.png', revision: '144d1d9a2c8b9e66d81506fb1a900e15' },
        { url: '/manifests/ios/192.png', revision: '99f1e3b20b0616a5a06f5c57403d173f' },
        { url: '/manifests/ios/20.png', revision: '811e7a25061ba6d729a9e5c270527a58' },
        { url: '/manifests/ios/256.png', revision: 'dc9a7c69a10c9b03fafbf23e38af4358' },
        { url: '/manifests/ios/29.png', revision: 'a459e65f773d5f09b5f80ee73ebb9c5c' },
        { url: '/manifests/ios/32.png', revision: 'a136bb7fdabb9f9fd5725ba7c1e5637c' },
        { url: '/manifests/ios/40.png', revision: '87da44390ef66d7063136cd80dfd9301' },
        { url: '/manifests/ios/50.png', revision: '8941e33f013be21dc34baf65b559d448' },
        { url: '/manifests/ios/512.png', revision: '5316a4e9bfe2612a3e25f98d7f4be1b5' },
        { url: '/manifests/ios/57.png', revision: 'bb43e92f76a204bd60ce654647929310' },
        { url: '/manifests/ios/58.png', revision: '9ef8fc35b6a75dc71d254a89e87b77fb' },
        { url: '/manifests/ios/60.png', revision: '486e19dd084f923b42190d362f73f920' },
        { url: '/manifests/ios/64.png', revision: 'f685c9d7dafaf289a7797bbf963f5d18' },
        { url: '/manifests/ios/72.png', revision: 'a055fe12e3541a97a0b593e1e51cfb39' },
        { url: '/manifests/ios/76.png', revision: 'dea2e6f9e6e53b0cbd21cb430408c0eb' },
        { url: '/manifests/ios/80.png', revision: 'da7b15fb745e5e4fb93f8cd2e1e32b0c' },
        { url: '/manifests/ios/87.png', revision: '3b62bafb246bb1c3d1d3d8401a0eb60d' },
        { url: '/manifests/manifest.en.json', revision: '091bbe1c4f789bf8558b5e797cea8ab7' },
        { url: '/manifests/manifest.tr.json', revision: '76d12e0bc914a4dad3bfad4706cbe210' },
        { url: '/manifests/windows11/LargeTile.scale-100.png', revision: 'c955ce7479f9fe782db58dadcb73ac31' },
        { url: '/manifests/windows11/LargeTile.scale-125.png', revision: 'b9e7eee01587c4d8447d2ce4d6f6847b' },
        { url: '/manifests/windows11/LargeTile.scale-150.png', revision: 'b648d3f11b8c87f5128eb56a18d60e93' },
        { url: '/manifests/windows11/LargeTile.scale-200.png', revision: 'a77d4eb5ad90eff5152a098e63f5258e' },
        { url: '/manifests/windows11/LargeTile.scale-400.png', revision: '4e5a4b44ea48ef59793a5045ebc100f4' },
        { url: '/manifests/windows11/SmallTile.scale-100.png', revision: '20baa52f22572168363712a62d887152' },
        { url: '/manifests/windows11/SmallTile.scale-125.png', revision: '0255bdbee9506615c8c68947d0db37a0' },
        { url: '/manifests/windows11/SmallTile.scale-150.png', revision: '4b797e81be1b4be9875d35a5d66ded6c' },
        { url: '/manifests/windows11/SmallTile.scale-200.png', revision: 'd8839352810620ca632445fbfe11be6f' },
        { url: '/manifests/windows11/SmallTile.scale-400.png', revision: '61f89fc5fa1417513d114d6eec527292' },
        { url: '/manifests/windows11/SplashScreen.scale-100.png', revision: '5015237c543dd4791d704b3fbd6c8617' },
        { url: '/manifests/windows11/SplashScreen.scale-125.png', revision: 'd1929618dbf3021bcef4cbdb3228274f' },
        { url: '/manifests/windows11/SplashScreen.scale-150.png', revision: '8668c875948bac88a3d647f2c5e844a2' },
        { url: '/manifests/windows11/SplashScreen.scale-200.png', revision: 'f99a1a34a64cf4a39717b28e9a0aa1da' },
        { url: '/manifests/windows11/SplashScreen.scale-400.png', revision: 'db57f772ceae0c535e037b0861ec4891' },
        { url: '/manifests/windows11/Square150x150Logo.scale-100.png', revision: '02feb433340c7c5363c03be3b1667278' },
        { url: '/manifests/windows11/Square150x150Logo.scale-125.png', revision: '597b20f6727e6cd61f99cc7297b68058' },
        { url: '/manifests/windows11/Square150x150Logo.scale-150.png', revision: '97de7f2005eb9d6091378a71e567f159' },
        { url: '/manifests/windows11/Square150x150Logo.scale-200.png', revision: '68aaa57237a802eaed7274a74a5bfbb5' },
        { url: '/manifests/windows11/Square150x150Logo.scale-400.png', revision: 'dba8b6d0453ec425edf1fdf3aec7089d' },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
          revision: '4c7600e34cc62a4d38ae0b3cd1c74ee5',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
          revision: 'a9acd2400939b09eda729e313a10b4f2',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
          revision: '3a2e628f1a4c9fa6c447ebf44fdd93ec',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
          revision: '08b8b9e3dc699ef51f9021b1310ba9b4',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
          revision: '25dfb196b8500ace0a2f9fb3a0c94a8a',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
          revision: '8542e86ecaab2d09a63860a6988f1519',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
          revision: '51143b0807e830b4aab36b665fa3cbf2',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
          revision: 'ee4e11c3da04719967647243817abbff',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
          revision: '4608a191e9d063764f04c7eac0fb12ef',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
          revision: '07f4f419ed9ebbd83de58d07f83aaba6',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
          revision: '63e7ec3f49aa91983543408cbe3e82c4',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
          revision: '368df6f36fd7be6d6159cfaa19e8c8ad',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
          revision: 'daa356ef8e2367aa15410fbae5843c15',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
          revision: '3ed5f40a68b9062419daee91e29d8ea6',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
          revision: 'da02af5644d2ff26131e08b60eaf8b85',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
          revision: '4c7600e34cc62a4d38ae0b3cd1c74ee5',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
          revision: 'a9acd2400939b09eda729e313a10b4f2',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
          revision: '3a2e628f1a4c9fa6c447ebf44fdd93ec',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
          revision: '08b8b9e3dc699ef51f9021b1310ba9b4',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
          revision: '25dfb196b8500ace0a2f9fb3a0c94a8a',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
          revision: '8542e86ecaab2d09a63860a6988f1519',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
          revision: '51143b0807e830b4aab36b665fa3cbf2',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
          revision: 'ee4e11c3da04719967647243817abbff',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
          revision: '4608a191e9d063764f04c7eac0fb12ef',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
          revision: '07f4f419ed9ebbd83de58d07f83aaba6',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
          revision: '63e7ec3f49aa91983543408cbe3e82c4',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
          revision: '368df6f36fd7be6d6159cfaa19e8c8ad',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
          revision: 'daa356ef8e2367aa15410fbae5843c15',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
          revision: '3ed5f40a68b9062419daee91e29d8ea6',
        },
        {
          url: '/manifests/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
          revision: 'da02af5644d2ff26131e08b60eaf8b85',
        },
        { url: '/manifests/windows11/Square44x44Logo.scale-100.png', revision: '4608a191e9d063764f04c7eac0fb12ef' },
        { url: '/manifests/windows11/Square44x44Logo.scale-125.png', revision: '3b3fb169ad64421056fad6cf7b775fc5' },
        { url: '/manifests/windows11/Square44x44Logo.scale-150.png', revision: '65fccfb62ffeb7f75561bb1e1355aff9' },
        { url: '/manifests/windows11/Square44x44Logo.scale-200.png', revision: 'ba6ecca4ab6d9b56564f3da82dc8809f' },
        { url: '/manifests/windows11/Square44x44Logo.scale-400.png', revision: '928fab4470efc0bb8315ac9a9d426f97' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-16.png', revision: '4c7600e34cc62a4d38ae0b3cd1c74ee5' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-20.png', revision: 'a9acd2400939b09eda729e313a10b4f2' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-24.png', revision: '3a2e628f1a4c9fa6c447ebf44fdd93ec' },
        {
          url: '/manifests/windows11/Square44x44Logo.targetsize-256.png',
          revision: '08b8b9e3dc699ef51f9021b1310ba9b4',
        },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-30.png', revision: '25dfb196b8500ace0a2f9fb3a0c94a8a' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-32.png', revision: '8542e86ecaab2d09a63860a6988f1519' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-36.png', revision: '51143b0807e830b4aab36b665fa3cbf2' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-40.png', revision: 'ee4e11c3da04719967647243817abbff' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-44.png', revision: '4608a191e9d063764f04c7eac0fb12ef' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-48.png', revision: '07f4f419ed9ebbd83de58d07f83aaba6' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-60.png', revision: '63e7ec3f49aa91983543408cbe3e82c4' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-64.png', revision: '368df6f36fd7be6d6159cfaa19e8c8ad' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-72.png', revision: 'daa356ef8e2367aa15410fbae5843c15' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-80.png', revision: '3ed5f40a68b9062419daee91e29d8ea6' },
        { url: '/manifests/windows11/Square44x44Logo.targetsize-96.png', revision: 'da02af5644d2ff26131e08b60eaf8b85' },
        { url: '/manifests/windows11/StoreLogo.scale-100.png', revision: '8941e33f013be21dc34baf65b559d448' },
        { url: '/manifests/windows11/StoreLogo.scale-125.png', revision: '1ac3e92decb543330761cd09cf8e1f4f' },
        { url: '/manifests/windows11/StoreLogo.scale-150.png', revision: 'af5934756a404785cc20b61c92c35ae9' },
        { url: '/manifests/windows11/StoreLogo.scale-200.png', revision: 'ee4fc26f4da5c09e498df30026523d80' },
        { url: '/manifests/windows11/StoreLogo.scale-400.png', revision: 'a4a1584c7502f5445d733764d2f04c7c' },
        { url: '/manifests/windows11/Wide310x150Logo.scale-100.png', revision: 'cf9bbc0019706b7de14b0cbc78ef61fb' },
        { url: '/manifests/windows11/Wide310x150Logo.scale-125.png', revision: '950aefda95ca4409943111c3867101e1' },
        { url: '/manifests/windows11/Wide310x150Logo.scale-150.png', revision: '8a44dd915239f0132e8594a993854bf7' },
        { url: '/manifests/windows11/Wide310x150Logo.scale-200.png', revision: '5015237c543dd4791d704b3fbd6c8617' },
        { url: '/manifests/windows11/Wide310x150Logo.scale-400.png', revision: 'f99a1a34a64cf4a39717b28e9a0aa1da' },
        { url: '/sitemap.xml', revision: 'a23edc3c53ffb487cb0002d6336b4fa4' },
        { url: '/sitemaps/root.xml', revision: '328ac413d280d8f430890377ee7875ab' },
        { url: '/summer-dark.png', revision: '213eb2fd35b9ecafeef72d55c89f9de6' },
        { url: '/summer-light.png', revision: '08800b6f1fe474c077bd6e4dab4b6900' },
        { url: '/watermark.svg', revision: '861e0b3cfe37e346c253101019c95cef' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: a, event: s, state: n }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, { status: 200, statusText: 'OK', headers: a.headers })
                : a,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const a = e.pathname
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    )
})
