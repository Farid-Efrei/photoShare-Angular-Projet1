export class PhotoCard {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public create_at: Date,
    public like: number
  ) {}

  public setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): PhotoCard {
    this.setLocation(location);
    return this;
    // On retourne l'objet avec this.
  }
}
