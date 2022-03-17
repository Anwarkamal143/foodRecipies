import { useEffect, useState } from "react"
import ReactPlayer, { ReactPlayerProps } from "react-player"
import styled from "styled-components"

// Only loads the YouTube player

const VideoPlay = ({ url, mute, loop, playing, ...rest }: ReactPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>()
  useEffect(() => {
    setIsPlaying(playing)
    return () => {}
  }, [playing])

  return (
    <div className="rc-vidoe-player">
      <ReactPlayer
        url={url}
        muted={mute}
        controls={true}
        className={"react-player"}
        width="100%"
        height="100%"
        playing={isPlaying}
        loop={loop}
        {...rest}
      />
    </div>
  )
}

export const VideoPlayer = styled(VideoPlay)``
