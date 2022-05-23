import { YouTubeFrame } from "../Elementi/Iframe"

export default function YouTube({
  url,
  youTubeFrameResponsiveValues
}) {
  return (
    <YouTubeFrame
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      youTubeFrameResponsiveValues={youTubeFrameResponsiveValues}
    />
  )
}