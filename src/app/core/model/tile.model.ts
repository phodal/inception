export interface TileModel {
  editable: boolean;
  content: {
    text: string;
    html: string;
  };
  background: string;
  position: {
    x: number;
    y: number;
  };
}
