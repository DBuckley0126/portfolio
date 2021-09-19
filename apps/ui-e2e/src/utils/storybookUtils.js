export const getStorybookUrl = ({componentName, storyName}) => {
  return `/iframe.html?id=${componentName.toLowerCase()}--${storyName}&args=&viewMode=story`
}