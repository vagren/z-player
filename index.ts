interface IVideoOption {
  ele: string | HTMLElement;
  url: string;
  height?: string;
  width?: string;
  autoplay?: boolean;
  /**
   * 
   */
  poster?: string;
  /**
   * 控件
   */
  controls?: boolean
}

function createVideoElement(options: IVideoOption): HTMLVideoElement {
  let videoDom = document.createElement('video');
  videoDom.width = options.width || '1024';
  videoDom.height = options.height || '768';
  videoDom.controls = options.controls  || true;
  return videoDom
}