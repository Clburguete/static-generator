export class MediaPlayer {
  constructor(mediaPlayer) {
    console.log('mediaplayer', mediaPlayer);
    this.mediaPlayer = mediaPlayer;
    this.playButton = this.mediaPlayer.getElementsByClassName('c-featured__media-icon')[0];
    this.coverImage = this.mediaPlayer.getElementsByClassName('c-featured__media-cover')[0];
    this.video = this.mediaPlayer.getElementsByClassName('c-featured__media-video')[0];
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.mediaPlayer.onclick = () => {
      this.coverImage.classList.add('is-hidden');
      this.video.classList.remove('is-hidden');
    }
  }
}