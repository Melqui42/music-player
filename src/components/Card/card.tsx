import Card from '.'

import * as C from './styled'

interface MusicListProps {
  id: number
  img: string
  musicName: string
  artistName: string
  audio: string
  isPlaying: boolean
}

interface CardProps extends MusicListProps {
  setMusicList: React.Dispatch<React.SetStateAction<MusicListProps[]>>
}

const CardComponent: React.FC<CardProps> = ({
  id,
  img,
  musicName,
  artistName,
  isPlaying,
  setMusicList,
}) => {
  const handlePlayPause = () => {
    setMusicList((prevMusicList) => {
      const updatedList = prevMusicList.map((music) => {
        if (music.id === id) {
          return { ...music, isPlaying: !music.isPlaying }
        } else {
          return { ...music, isPlaying: false }
        }
      })
      return updatedList
    })
  }

  return (
    <C.CardComponent key={id}>
      <Card.Root>
        <div className="topCard">
          <Card.PlayAction isPlaying={isPlaying} onClick={handlePlayPause} />
          <Card.Image src={img} />
          <Card.MusicInformation
            musicName={artistName}
            artistName={musicName}
          />
        </div>
        <Card.EditAction />
      </Card.Root>
    </C.CardComponent>
  )
}

export default CardComponent
