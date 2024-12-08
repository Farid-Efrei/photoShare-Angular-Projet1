export class PhotoCard {
  location?: string;

  constructor(
    // ajout de l'id pour les routes dynamiques de photos/details. Le model MAJ on doit en faire de meme au niveau du service pour chaque photo indiquer son id.Puis créer une méthode pour récupérer la photo à travers son id pour aller sur l'adresse dynamique (getPhotoCardById(id)).
    public id: number,
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
