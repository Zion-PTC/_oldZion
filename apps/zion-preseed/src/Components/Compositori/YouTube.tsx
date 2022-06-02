import { YouTubeFrame } from '../Elementi/Iframe';

interface IYouTube {
  url: string;
  youTubeFrameResponsiveValues: any;
}

export default function YouTube({
  url,
  youTubeFrameResponsiveValues,
}: IYouTube) {
  return (
    <YouTubeFrame
      src={url}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      // TODO correggere errore ts
      //@ts-expect-error
      allowfullscreen
      youTubeFrameResponsiveValues={youTubeFrameResponsiveValues}
    />
  );
}
