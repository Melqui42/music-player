import styled from 'styled-components'

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1d5d6;
`
export const MusicPlayer = styled.div`
  gap: 1rem;
  width: 330px;
  height: 400px;
  display: flex;
  padding: 1rem;
  position: relative;
  align-items: center;
  border-radius: 0.5rem;
  flex-direction: column;
  background-color: #edf1f2;
  box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);
  -webkit-box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);
  -moz-box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);

  .top {
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      button {
        background-color: transparent;

        .icon {
          color: #3b414e;
          font-size: 2rem;
        }
      }
    }
  }

  .informations {
    gap: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 180px;
      border-radius: 0.5rem;
    }

    .content {
      gap: 0.2rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      .musicName {
        color: #3b414e;
        font-weight: bold;
        font-size: 1.4rem;
      }

      .artistName {
        color: #3b414e;
      }
    }
  }

  .musicBar {
    gap: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .controls {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mainControls {
      gap: 0.4rem;
      display: flex;
      align-items: center;

      .item {
        button {
          color: #d9d9d9;
          padding: 1rem;
          border-radius: 100%;
          background-color: #414141;

          .icon {
            font-size: 1.2rem;
          }
        }

        &:nth-child(1) button {
          .icon {
            font-size: 2rem;
          }
        }
      }
    }

    .othersControls {
      gap: 1rem;
      display: flex;
      align-items: center;

      .item {
        button {
          .icon {
            color: #d5d9dc;
            font-size: 2rem;
            transition: 0.3s;
          }

          &:hover {
            .icon {
              color: #414141;
            }
          }
        }

        .musicVolume {
          position: relative;

          .musicVolumeOpen,
          .musicVolumeClosed {
            gap: 1rem;
            top: -6px;
            left: 60px;
            display: flex;
            padding: 1rem;
            transition: 0.3s;
            position: absolute;
            align-items: center;
            border-radius: 0.5rem;
            background-color: #edf1f2;
            box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);
            -webkit-box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);
            -moz-box-shadow: 1px 8px 27px 5px rgba(65, 65, 65, 0.21);

            .count {
              width: 30px;
              display: flex;
              align-items: center;
              justify-content: center;

              p {
                color: #414141;
                font-weight: bold;
              }
            }

            &.musicVolumeOpen {
              opacity: 1;
            }

            &.musicVolumeClosed {
              opacity: 0;
            }
          }
        }
      }
    }
  }
`
/*
export const InputRange = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #d5d9dc 0%, #d5d9dc ${props.value}%, #404240 ${props.value}%, #404240 100%)`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background-image: radial-gradient(circle, #d5d9dc 40%, #404240 45%);
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #404240 40%, #d5d9dc 45%);
    border-radius: 50%;
  }
` */
export const InputRange = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 12px;
  background: #404240;
  border-radius: 1rem;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background-image: radial-gradient(circle, #d5d9dc 40%, #404240 45%);
    border-radius: 50%;
  }

  &::-moz-range-progress {
    height: 12px;
    border-radius: 0.9rem;
    background-color: #d5d9dc;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #404240 40%, #d5d9dc 45%);
    border-radius: 50%;
  }
`
export const MusicList = styled.div`
  top: 0;
  max-height: 432px;
  overflow: hidden;
  position: absolute;
  border-radius: 0.5rem;
  transition: max-height 0.2s ease-in-out;

  &.musicListClosed {
    max-height: 0px;
  }

  &.musicListOpen {
    max-height: 432px;
  }

  .container {
    height: 432px;
    width: 330px;
    padding: 1rem;
    background-color: #414141;

    .center {
      gap: 1rem;
      height: 390px;
      display: flex;
      overflow: hidden;
      overflow-y: scroll;
      margin-top: 2.5rem;
      flex-direction: column;

      &::-webkit-scrollbar {
        width: 10px;
        display: none;
      }

      .title {
        color: #d5d9dc;
        font-size: 1.3rem;
      }

      .content {
        ul {
          gap: 1rem;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  .center {
    gap: 1rem;
    display: flex;
    margin-top: 2.5rem;
    flex-direction: column;

    .title {
      color: #d5d9dc;
      font-size: 1.3rem;
    }

    .content {
      gap: 1rem;
      height: 320px;
      display: flex;
      overflow: hidden;
      overflow-y: scroll;
      flex-direction: column;

      &::-webkit-scrollbar {
        width: 10px;
        display: none;
      }

      .musicList {
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
`
