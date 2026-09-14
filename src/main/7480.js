class i extends Error {
  constructor(e = "Failed to load track.") {
    super(e);
    this.name = "TrackLoadError";
  }
}
export const A = i;