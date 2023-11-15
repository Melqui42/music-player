import { useEffect, useRef, useState } from 'react'

import * as Fa from 'react-icons/fa'
import * as Bs from 'react-icons/bs'
import * as Bi from 'react-icons/bi'
import * as Io from 'react-icons/io'
import * as Md from 'react-icons/md'
import * as Im from 'react-icons/im'

import CardComponent from '../../components/Card/card'

import audio1 from '../../assets/audios/eyeOfTheTiger.mp3'
import audio2 from '../../assets/audios/sweetChildOMine.mp3'
import audio3 from '../../assets/audios/yesterdayRemastered2009.mp3'
import audio4 from '../../assets/audios/dreamOn.mp3'

import image1 from '../../assets/images/eyeOfTheTiger.jpeg'
import image2 from '../../assets/images/sweetChildOMine.jpg'
import image3 from '../../assets/images/yesterdayRemastered2009.jpeg'
import image4 from '../../assets/images/dreamOn.jpg'
import unknownImage from '../../assets/images/unknownImage.png'

import * as C from './styled'

interface MusicListProps {
  id: number
  img: string
  musicName: string
  artistName: string
  audio: string
  isPlaying: boolean
  togglePlayPause?: (id: number) => void
}

const Home: React.FC = () => {
  const [musicBar, setMusicBar] = useState<number>(0)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isRepeating, setIsRepeating] = useState<boolean>(false)

  const [musicVolume, setMusicVolume] = useState<number>(50)
  const [musicVolumeMenu, setMusicVolumeMenu] = useState<boolean>(false)

  const [musicListMenu, setMusicListMenu] = useState<boolean>(false)
  const [musicList, setMusicList] = useState<MusicListProps[]>([
    {
      id: 0,
      img: image1,
      musicName: 'Eye Of The Tiger',
      artistName: 'Survivor',
      audio: audio1,
      isPlaying: false,
    },
    {
      id: 1,
      img: image2,
      musicName: `Sweet Child O' Mine`,
      artistName: `Guns N' Roses`,
      audio: audio2,
      isPlaying: false,
    },
    {
      id: 3,
      img: image3,
      musicName: 'Yesterday Remastered 2009',
      artistName: 'The Beatles',
      audio: audio3,
      isPlaying: false,
    },
    {
      id: 4,
      img: image4,
      musicName: 'Dream On',
      artistName: 'Aerosmith',
      audio: audio4,
      isPlaying: false,
    },
  ])

  const audioPlayer = useRef<HTMLAudioElement | null>(null)
  const progressBar = useRef<HTMLInputElement | null>(null)
  const animationRef = useRef<number | null>(null)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)

    if (audioPlayer.current) {
      if (!isPlaying) {
        audioPlayer.current.play()
        animationRef.current = requestAnimationFrame(whilePlaying)
      } else {
        audioPlayer.current.pause()
      }
    }
  }

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating)

    if (audioPlayer.current) {
      audioPlayer.current.loop = !isRepeating
    }
  }

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = musicVolume / 100
    }
  }, [musicVolume])

  const changeVolume = () => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = musicVolume / 100
    }
  }

  const toggleMusicVolumeMenu = () => {
    setMusicVolumeMenu(!musicVolumeMenu)
  }

  const toggleMusicList = () => {
    setMusicListMenu(!musicListMenu)
  }

  useEffect(() => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.max = Math.floor(
        audioPlayer.current.duration,
      ).toString()
    }
  }, [audioPlayer?.current?.readyState, audioPlayer.current?.onloadedmetadata])

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      const newTime = parseFloat(progressBar.current.value)
      audioPlayer.current.currentTime = isNaN(newTime) ? 0 : newTime
      setMusicBar(newTime)
    }
  }

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime.toString()

      if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
        if (!audioPlayer.current.loop) {
          playNext()
        }
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current)
        }
      } else {
        animationRef.current = requestAnimationFrame(whilePlaying)
      }
    }
  }

  const nowPlaying = musicList.find((music) => music.isPlaying)

  const playNext = () => {
    setIsPlaying(false)
    const currentIndex = musicList.findIndex((music) => music.isPlaying)
    const nextIndex = (currentIndex + 1) % musicList.length

    setMusicList((prevMusicList) => {
      const updatedList = prevMusicList.map((music, index) => {
        return {
          ...music,
          isPlaying: index === nextIndex,
        }
      })
      return updatedList
    })
  }

  const playPrevious = () => {
    setIsPlaying(false)
    const currentIndex = musicList.findIndex((music) => music.isPlaying)
    const previousIndex =
      (currentIndex - 1 + musicList.length) % musicList.length

    setMusicList((prevMusicList) => {
      const updatedList = prevMusicList.map((music, index) => {
        return {
          ...music,
          isPlaying: index === previousIndex,
        }
      })
      return updatedList
    })
  }

  return (
    <C.Page>
      <C.MusicPlayer>
        <ul className="top">
          <li className="item">
            <button onClick={toggleMusicList}>
              {!musicListMenu ? (
                <Md.MdOutlineKeyboardArrowDown
                  className="icon"
                  style={{ color: !musicListMenu ? '#3b414e' : '#edf1f2' }}
                />
              ) : (
                <Md.MdOutlineKeyboardArrowUp
                  className="icon"
                  style={{ color: !musicListMenu ? '#3b414e' : '#edf1f2' }}
                />
              )}
            </button>
          </li>
          <li className="item">
            <button>
              <Bi.BiDotsHorizontal
                className="icon"
                style={{ color: !musicListMenu ? '#3b414e' : '#edf1f2' }}
              />
            </button>
          </li>
        </ul>
        <div className="informations">
          <img
            src={nowPlaying ? nowPlaying.img : unknownImage}
            alt={nowPlaying ? nowPlaying.musicName : ''}
          />
          <div className="content">
            <p className="musicName">
              {nowPlaying ? nowPlaying.musicName : 'No music playing'}
            </p>
            <p className="artistName">
              {nowPlaying ? nowPlaying.artistName : 'Unknown artist'}
            </p>
          </div>
        </div>
        <div className="musicBar">
          <C.InputRange
            ref={progressBar}
            value={musicBar}
            defaultValue="0"
            onChange={changeRange}
          />
          <audio
            src={nowPlaying ? nowPlaying.audio : ''}
            ref={audioPlayer}
          ></audio>
        </div>
        <div className="controls">
          <ul className="mainControls">
            <li className="item">
              <button onClick={togglePlayPause}>
                {isPlaying ? (
                  <Fa.FaPause className="icon" />
                ) : (
                  <Fa.FaPlay className="icon" />
                )}
              </button>
            </li>
            <li className="item">
              <button onClick={playPrevious}>
                <Bs.BsSkipBackwardFill className="icon" />
              </button>
            </li>
            <li className="item">
              <button onClick={playNext}>
                <Bs.BsFillSkipForwardFill className="icon" />
              </button>
            </li>
          </ul>
          <ul className="othersControls">
            <li className="item">
              <button onClick={toggleRepeat}>
                {!isRepeating ? (
                  <Io.IoMdRepeat className="icon" />
                ) : (
                  <Md.MdOutlineRepeatOne className="icon" />
                )}
              </button>
            </li>
            <li className="item">
              <div className="musicVolume">
                <button onClick={toggleMusicVolumeMenu}>
                  <Im.ImVolumeMedium className="icon" />
                </button>
                <div
                  className={
                    musicVolumeMenu ? 'musicVolumeOpen' : 'musicVolumeClosed'
                  }
                >
                  <div className="count">
                    <p>{musicVolume}</p>
                  </div>
                  <C.InputRange
                    value={musicVolume}
                    onChange={(e) => {
                      setMusicVolume(Number(e.target.value))
                      changeVolume() // Atualiza o volume ao alterar o controle deslizante
                    }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <C.MusicList
          className={!musicListMenu ? 'musicListClosed' : 'musicListOpen'}
        >
          <div className="container">
            <div className="center">
              <h1 className="title">Playlist</h1>
              <div className="content">
                <ul className="musicList"></ul>
                {musicList.map((item) => {
                  return (
                    <li className="item" key={item.id}>
                      <CardComponent
                        id={item.id}
                        img={item.img}
                        audio={item.audio}
                        musicName={item.musicName}
                        artistName={item.artistName}
                        isPlaying={item.isPlaying}
                        setMusicList={(updatedList) =>
                          setMusicList(updatedList)
                        }
                      />
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        </C.MusicList>
      </C.MusicPlayer>
    </C.Page>
  )
}

export default Home
