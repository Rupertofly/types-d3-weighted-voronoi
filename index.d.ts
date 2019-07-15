declare module 'd3-weighted-voronoi' {
  export function weightedVoronoi<T = any>(): WVLayout<T>;
  type pt = [number, number];
  export interface WVLayout<T> {
    (sites: T[]): Array<WVPolygon<T>>;
    x(fx: (d: T) => number): this;
    x(): (d: T) => number;
    y(fy: (d: T) => number): this;
    y(): (d: T) => number;
    weight(fw: (d: T) => number): this;
    weight(): (d: T) => number;
    clip(pts: pt[]): this;
    clip(): pt[];
    extent(ext: [pt, pt]): this;
    extent(): [pt, pt];
    size(sz: pt): this;
    size(): pt;
  }
  export interface WVVertex<T> {
    x: number;
    y: number;
    weight: number;
    neigbours: Array<WVVertex<T>>;
    originalObject: T;
    polygon: WVPolygon<T>;
    nonClippedPolygon: WVPolygon<T>;
  }
  export interface WVPolygon<T> extends Array<pt> {
    site: WVVertex<T>;
  }
}
