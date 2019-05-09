module.exports = {
  "globDirectory": "./",
  "importWorkboxFrom": "local",
  "globIgnores": [
  	"node_modules/**/*",
  	"package*",
  	"workbox-config.js",
  	"images/**/*"
  ],
  "runtimeCaching": [{
  	"urlPattern": /\.(?:png|gif|jpg|jpeg|svg)$/,
  	"handler": "CacheFirst",
  	"options": {
  		"cacheName": "images-cache"
  	}
  }],
  "globPatterns": [
    "**/*.{png,html,js,json,md,css,jpg}"
  ],
  "swDest": "service-worker.js"
};