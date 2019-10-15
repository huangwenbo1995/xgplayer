import VideoCtx from './video-context';
import AudioCtx from './audio-context';
// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor (config) {
    super();
    this.vCtx = new VideoCtx();
    this.aCtx = new AudioCtx();

    this.historyTime = 0;

  }

  destroy () {

  }

  _setAudioSamples (samples) {

  }

  _setAudioMeta (meta) {

  }

  _setVideoSegment (segment) {

  }

  get currentTime () {

  }
}


export default MobileVideo;
