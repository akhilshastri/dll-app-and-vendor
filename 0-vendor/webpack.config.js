var path = require("path");
var webpack = require("../../../");
var parts = require('./webpack.parts');
var merge = require('webpack-merge');

module.exports = merge([{
	context: __dirname,
	entry: ["example-vendor",'lodash'],
	output: {
		filename: "vendor.js", // best use [hash] here too
		path: path.resolve(__dirname, "js"),
		library: "vendor_lib_[hash]",
	},
	recordsPath: path.join(__dirname, "records.json"),
	plugins: [
		new webpack.DllPlugin({
			name: "vendor_lib_[hash]",
			path: path.resolve(__dirname, "js/vendor-manifest.json"),
		}),
		// new webpack.NamedModulesPlugin(),
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20
		}),
	],

} ]);
