import * as C from './styled'

interface CardMusicInformationProps {
  artistName: string
  musicName: string
}

const CardMusicInformation: React.FC<CardMusicInformationProps> = ({
  artistName,
  musicName,
}) => {
  return (
    <C.MusicInformation>
      <p className="artistName">{artistName}</p>
      <p className="musicName">{musicName}</p>
    </C.MusicInformation>
  )
}

export default CardMusicInformation
