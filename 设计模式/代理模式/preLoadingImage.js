class PreLoadingImage {
  constructor(imgNode) {
    this.imgNode = imgNode;
  }

  setSrc(imgUrl) {
    this.imgNode = imgUrl;
  }
}

class ProxyImage {
  // 占位图
  static LOADING_URL = 'xxx'
  constructor(targetImage) {
    this.targetImage = targetImage;
  }
  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL);
    const virtualImage = new Image();
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl)
    }
    virtualImage.src = targetUrl;
  }
}

// new PreLoadingImage('image')