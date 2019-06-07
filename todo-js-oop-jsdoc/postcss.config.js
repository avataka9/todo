module.exports = {
	parser: 'postcss-safe-parser',
	
	plugins: {
		//from up to bottom direction
    // 'postcss-import': {},
		'postcss-nested-ancestors': {},
		'postcss-nested': {},
		'postcss-preset-env': {},
		'precss': {},
		'autoprefixer': {},
		'cssnano': {},
	}
};