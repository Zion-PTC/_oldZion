export default function defineScreenDimensions(callback) {
  let width = window.screen.width
  let height = window.screen.height
  let screenDimensions = {
    width: width,
    height: height
  }
  callback(screenDimensions)
  return { screenDimensions }
}
