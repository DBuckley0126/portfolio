export const getStorybookUrl = ({ componentName, storyName }) =>
	`/iframe.html?id=${componentName.toLowerCase()}--${storyName}&args=&viewMode=story`
