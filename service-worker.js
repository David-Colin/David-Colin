/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5e70cdc840923e0d373cc2064ee406b0"
  },
  {
    "url": "assets/css/0.styles.417a627d.css",
    "revision": "18c40572e9175a8fe1fb7c00d1414381"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg1.5ad0201f.jpg",
    "revision": "5ad0201fda8eae83f8e01e96340d2ff0"
  },
  {
    "url": "assets/img/bg2.d5bdc1d8.jpg",
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
  },
  {
    "url": "assets/img/bg3.22fa8f88.jpg",
    "revision": "22fa8f88a23088bce0900fa25ddc35ce"
  },
  {
    "url": "assets/img/bg4.4ae33586.jpg",
    "revision": "4ae3358619d74cccfa403461d44fb14c"
  },
  {
    "url": "assets/img/bg5.eac41ddc.jpg",
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "assets/img/bg6.b1b9e5a8.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
  },
  {
    "url": "assets/img/dark.590c111f.svg",
    "revision": "590c111fece215aa6e8cf0fa5495c0a6"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/light.f77dd99b.svg",
    "revision": "f77dd99b23a251e6935b0f0cef978d0c"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.d6ce6357.js",
    "revision": "4c5e6f3607a610dc66000e88c10fc2db"
  },
  {
    "url": "assets/js/10.dd0433a6.js",
    "revision": "bae2878a66d2dcd8f06447b45d1bf0d2"
  },
  {
    "url": "assets/js/11.180551c0.js",
    "revision": "3306697fe56daf2eb9b422a284029553"
  },
  {
    "url": "assets/js/12.e7715d5a.js",
    "revision": "4e6678879e874d288642737b5f34c044"
  },
  {
    "url": "assets/js/13.ceb467e8.js",
    "revision": "5f06a95e1891596424bf573751397df8"
  },
  {
    "url": "assets/js/14.6168bedf.js",
    "revision": "5964df90c1a76f75c2d692c68c8764a6"
  },
  {
    "url": "assets/js/15.3187e092.js",
    "revision": "dd916cdf145a50323c5658cf0cbd4fdd"
  },
  {
    "url": "assets/js/16.ca9b8f3a.js",
    "revision": "1c34cbf7ebcecc0a68a440319d5498f4"
  },
  {
    "url": "assets/js/17.806ee014.js",
    "revision": "98369ad4ae65278bdeddd41c3bbe013c"
  },
  {
    "url": "assets/js/18.d9b83336.js",
    "revision": "a42a6aa1e00911580d89b0223df22168"
  },
  {
    "url": "assets/js/19.64a59346.js",
    "revision": "a4e4d49ed93ac3aeca1d49072c96aef1"
  },
  {
    "url": "assets/js/2.f9c16802.js",
    "revision": "eb34cc1f8eba36ddb56ff8f10883533d"
  },
  {
    "url": "assets/js/20.ec12de15.js",
    "revision": "cb633c68ca1b03370d4f2efb62724e9f"
  },
  {
    "url": "assets/js/21.9ea882f7.js",
    "revision": "80e842f0e9be84d6eb53464e96c7cff7"
  },
  {
    "url": "assets/js/22.ae158ead.js",
    "revision": "e022541ed45cd6acbe2196217f6fe294"
  },
  {
    "url": "assets/js/23.55d641b2.js",
    "revision": "0f18e09bd4df4a20ebb53c08e47b88f2"
  },
  {
    "url": "assets/js/24.a9c4f3b2.js",
    "revision": "5ff7c90b9c1c49e39b30d54b3f192f98"
  },
  {
    "url": "assets/js/25.7b0f8601.js",
    "revision": "5cf7b5390c390c034367f8ecf962acd2"
  },
  {
    "url": "assets/js/26.cd435546.js",
    "revision": "379aeae351580a1967c1b2430bbd2995"
  },
  {
    "url": "assets/js/27.496644e4.js",
    "revision": "ea0b03f8c4c31ce2315ed272137b9570"
  },
  {
    "url": "assets/js/28.bb4764b2.js",
    "revision": "08166df4f0bca854327456990b1261a4"
  },
  {
    "url": "assets/js/29.dca647a4.js",
    "revision": "de6107989852d7f32a7ebd847c8ab2f6"
  },
  {
    "url": "assets/js/30.90a18b7c.js",
    "revision": "7b05128c42f4696584b2819cd50d4439"
  },
  {
    "url": "assets/js/31.71e2ef03.js",
    "revision": "91b70b653a089a048e9bcf573d6e9586"
  },
  {
    "url": "assets/js/32.9bda6896.js",
    "revision": "d91bc3a0da490407dcefdbf5c43dcffd"
  },
  {
    "url": "assets/js/33.f43b9818.js",
    "revision": "05715479c65510028bcc0353efcb79bf"
  },
  {
    "url": "assets/js/34.856f22af.js",
    "revision": "c88e42ddb739bcb9c4baa5cc11d71922"
  },
  {
    "url": "assets/js/35.a03bfafc.js",
    "revision": "32ef51a931acd8df7e26877d18f1df1d"
  },
  {
    "url": "assets/js/36.864253f9.js",
    "revision": "1d021ebc93d2b02b03075812c881416f"
  },
  {
    "url": "assets/js/37.832ff6cf.js",
    "revision": "18dd4b427852f686cdbe590166882997"
  },
  {
    "url": "assets/js/38.34c2eba0.js",
    "revision": "964bd99dbbe371a32a501f13436fefef"
  },
  {
    "url": "assets/js/39.b7296b9e.js",
    "revision": "6e2a193775d4eedcb710f8178fb7b51f"
  },
  {
    "url": "assets/js/4.d9fec408.js",
    "revision": "84bb9e3906ee9ec430f1cc7d1bda784e"
  },
  {
    "url": "assets/js/40.b5cce9c4.js",
    "revision": "8ad14cc79e2035caa1207fd71205929f"
  },
  {
    "url": "assets/js/41.08cb861f.js",
    "revision": "b55fa19149fb4a9b3fce96fdd2918ba5"
  },
  {
    "url": "assets/js/42.4be0c370.js",
    "revision": "0cbc2cf0a82afbdd0ee36ebe39f6dafd"
  },
  {
    "url": "assets/js/43.df2ebfc7.js",
    "revision": "9b6adebfcc5530c58cf512dba34df927"
  },
  {
    "url": "assets/js/44.d5f5a170.js",
    "revision": "88a918e1d7f3678e94975f4cf3c63abc"
  },
  {
    "url": "assets/js/5.62d51222.js",
    "revision": "b649ab237ec74f46f225d703d8f2a82b"
  },
  {
    "url": "assets/js/6.76d743cb.js",
    "revision": "3080e59040952cadfc005e2e4f8f8215"
  },
  {
    "url": "assets/js/7.794cb8ce.js",
    "revision": "df0f9127225b7bf3e5ff1f12a3233071"
  },
  {
    "url": "assets/js/8.4dd1c88e.js",
    "revision": "ceea9e99740f26262775513a94d872e4"
  },
  {
    "url": "assets/js/9.60cbec96.js",
    "revision": "7bf7f161379faf87030f4527d294ce50"
  },
  {
    "url": "assets/js/app.6cb2444f.js",
    "revision": "108a285827917a356ecc04921ac4280e"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "6e50f6b77246d7e4dcb34b8f80f688c4"
  },
  {
    "url": "categories/index.html",
    "revision": "11a4245765c97264d84007a5c3c5e222"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "80300d03dd046d6f7eee8bd7ffb9fa85"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "9186c4d50a146bed7f7d0fe6d8b70323"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "5b8365aa40b9b3f30bed6725d3072b8a"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "059807e474a68a1ce9aa09eca7dbc67e"
  },
  {
    "url": "categories/卷烟信息/index.html",
    "revision": "cf8b1be034429e728aa9531f12e009f9"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "06a0b026a4bc35c907de811ebc79f533"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "a787d675d36aa966244bf40da9c46938"
  },
  {
    "url": "devops/docker/install.html",
    "revision": "77444a00d61a3c11feb45f552d27d25b"
  },
  {
    "url": "devops/gitlab/index.html",
    "revision": "ff0b9d420be96b79e31ed51a0011c58b"
  },
  {
    "url": "devops/nginx/cache.html",
    "revision": "3c09350a234859c12e327bb44ca4911d"
  },
  {
    "url": "devops/nginx/gzip.html",
    "revision": "0d025277ec29d9b48aeee8dea7c65ebe"
  },
  {
    "url": "devops/nginx/index.html",
    "revision": "442bf066995cc1549d42a3f4eb925491"
  },
  {
    "url": "devops/nginx/install.html",
    "revision": "03752448f34bc619c3de2516eae994d2"
  },
  {
    "url": "devops/nginx/kill.html",
    "revision": "ed21758a0cbaab8ab767578dfd83a201"
  },
  {
    "url": "devops/nginx/location.html",
    "revision": "f74ad5815bcd03a22021c974ee617ef8"
  },
  {
    "url": "devops/nginx/log.html",
    "revision": "bf4afd9c1b8bfdfc241eb31e11c98569"
  },
  {
    "url": "devops/redis/index.html",
    "revision": "b73ff2d85888224638cb0e00491d7ba6"
  },
  {
    "url": "images/184.png",
    "revision": "4a53cf302746206c34f7def829a2b97a"
  },
  {
    "url": "images/525.png",
    "revision": "80ddb277d0fefa8a211aec6e47cf0adf"
  },
  {
    "url": "images/bg.gif",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "images/index/bg1.jpg",
    "revision": "5ad0201fda8eae83f8e01e96340d2ff0"
  },
  {
    "url": "images/index/bg2.jpg",
    "revision": "d5bdc1d874720fa0c63b4013a429767a"
  },
  {
    "url": "images/index/bg3.jpg",
    "revision": "22fa8f88a23088bce0900fa25ddc35ce"
  },
  {
    "url": "images/index/bg4.jpg",
    "revision": "4ae3358619d74cccfa403461d44fb14c"
  },
  {
    "url": "images/index/bg5.jpg",
    "revision": "eac41ddc9329ac632ef5cec131413bbf"
  },
  {
    "url": "images/index/bg6.jpg",
    "revision": "b1b9e5a87af4ae07bbffce5c1f11f719"
  },
  {
    "url": "images/markdown/blog.png",
    "revision": "8308ecbc3c519d59ef14b8e17424e513"
  },
  {
    "url": "images/markdown/build.png",
    "revision": "567d571332117b1970964ba5325e1112"
  },
  {
    "url": "images/markdown/docker.jpg",
    "revision": "914b18231fc360aa4cb24a781149c068"
  },
  {
    "url": "images/markdown/gitalk.png",
    "revision": "94d3ae9fd18bdd2192ec8a3e77a88c1e"
  },
  {
    "url": "images/markdown/nginx.png",
    "revision": "b944c4a2463c996241afa6289d3e6871"
  },
  {
    "url": "images/markdown/nginxlogo.png",
    "revision": "470a576e259ba5299cd0ec819c804e2e"
  },
  {
    "url": "images/markdown/nginxweb.png",
    "revision": "c1ed879bd37817029459fff61aeb8250"
  },
  {
    "url": "images/markdown/start.png",
    "revision": "4fdb98e73ee36e40d46334f905d3eb00"
  },
  {
    "url": "images/nginx.png",
    "revision": "470a576e259ba5299cd0ec819c804e2e"
  },
  {
    "url": "images/pay.png",
    "revision": "10b5d14c3349ebe4f295e1931a2fad03"
  },
  {
    "url": "images/user.jpg",
    "revision": "42dc934fec61a302fb7ab9ccb883918b"
  },
  {
    "url": "index.html",
    "revision": "da067d47980fa8adcab4d7daf6fca719"
  },
  {
    "url": "js/flux.min.js",
    "revision": "9547393d8b7ebb80a108ba42f8cbc7d7"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "b8d64d0bc142b3f670cc0611b0aebcae"
  },
  {
    "url": "linux/command.html",
    "revision": "66a334c51a990f07fc70b118afd555da"
  },
  {
    "url": "linux/nohup.html",
    "revision": "f5384194378c1f8ea43085cea5a8cd96"
  },
  {
    "url": "music/canon/canon.jpg",
    "revision": "2d5b5f7af1277220148c7a9297b74c73"
  },
  {
    "url": "music/night/night.jpg",
    "revision": "5c9fe76738538df551f5a0358091f91d"
  },
  {
    "url": "music/wind/wind.jpg",
    "revision": "6e9c57b6aa43978c7b22dcebcd86e47a"
  },
  {
    "url": "mysql/install.html",
    "revision": "b1795979215ab8153d3216d9239cedb7"
  },
  {
    "url": "node/index.html",
    "revision": "fd423b7cae3bdaa70aaf8267ac947ec6"
  },
  {
    "url": "node/pm2.html",
    "revision": "1ca953fe4ac1b25c0f051a2940290b13"
  },
  {
    "url": "node/tools.html",
    "revision": "9fdb1281dfd8a91e13faacf5110d9301"
  },
  {
    "url": "nuxt/deploy.html",
    "revision": "87f21f7c885c35ac6fff9397d0149103"
  },
  {
    "url": "nuxt/index.html",
    "revision": "d5a1654bf870428c265b9e22654c36b4"
  },
  {
    "url": "others/20220302.html",
    "revision": "70c0fa150f218a60f877e230fb1ecfc4"
  },
  {
    "url": "others/20220622.html",
    "revision": "153ddf03bc48aac83a35ef9911507c38"
  },
  {
    "url": "others/20220623.html",
    "revision": "2ec12ca41354f9bdb00ed006427946e4"
  },
  {
    "url": "others/algolia.html",
    "revision": "0cdc26116c372d5ba3986edc6a310613"
  },
  {
    "url": "others/blog.html",
    "revision": "c664cefa3ad29f97d798021cb8ab33a8"
  },
  {
    "url": "others/deploy.html",
    "revision": "9a83317d3a662e29aff507c8a80345ef"
  },
  {
    "url": "others/firends.html",
    "revision": "521a3af1bcef637bbc1a49d03963f3ed"
  },
  {
    "url": "others/index.html",
    "revision": "5df421afccf94edd5389864fc9db4437"
  },
  {
    "url": "setting.png",
    "revision": "2a045d90b17a55d36904a238d94f583b"
  },
  {
    "url": "snowflake/blue.png",
    "revision": "275ba7773ea73e26b8c8eb9401abad1f"
  },
  {
    "url": "snowflake/white.png",
    "revision": "ebe7fdd5eab6476c35d3052ceb2c2a80"
  },
  {
    "url": "svg/back.svg",
    "revision": "6c1aced7606120fd21a4d49e9ccd4232"
  },
  {
    "url": "svg/dark.svg",
    "revision": "590c111fece215aa6e8cf0fa5495c0a6"
  },
  {
    "url": "svg/light.svg",
    "revision": "f77dd99b23a251e6935b0f0cef978d0c"
  },
  {
    "url": "tag/Algolia/index.html",
    "revision": "b56b5aac7677ff679b5de5e8bec9a86b"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "f81259409969d222a81726a550a15cf9"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "b6f296278a09dfb79b96a344d14c360d"
  },
  {
    "url": "tag/Gitlab/index.html",
    "revision": "46a16bdab6867b5b967f12954abeda8b"
  },
  {
    "url": "tag/index.html",
    "revision": "86897c41c673e9d9bab0149379cf21ce"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "709c900ddd50d9a528f260d4a60d0250"
  },
  {
    "url": "tag/MySql/index.html",
    "revision": "e03ba966bd4d63a9d18b88f19e1ace29"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "99f81b7b197619569c25e9579fadd1a1"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "a7909b4693107aff2961d32b68c9b47a"
  },
  {
    "url": "tag/pm2/index.html",
    "revision": "d979a5e48e7e67a9cdf3927309c6a006"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "6efbd3dc8535f748451067011145a3c5"
  },
  {
    "url": "tag/中华/index.html",
    "revision": "c336b6e8de59032437a020e8aa7cb794"
  },
  {
    "url": "tag/中南海/index.html",
    "revision": "ccaba42fa9b1b26ef2df618bd7e0def9"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "e63f9533209881b05d1d9aa376f853ff"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "1b0bc3c644f91ebf73b35a7600804cb0"
  },
  {
    "url": "tag/牡丹/index.html",
    "revision": "49a74267a8a6774d13b00b88746ec603"
  },
  {
    "url": "timeline/index.html",
    "revision": "7cee1041935a35306818e185fe977066"
  },
  {
    "url": "tobacco/shanghai.html",
    "revision": "1f74275d5df71625d5d2a1648df947cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
