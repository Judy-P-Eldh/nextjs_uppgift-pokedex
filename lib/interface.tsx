export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
   imageUrl: string;
  url: string;
  sprites: {
    front_default: string | null;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
   species: {
    color: {
      name: string;
    };
    habitat: {
      name: string;
    };
    shape: {
      name: string;
    }
   }[];
}

export interface FeaturedList {
    name: string;
    url: string;
    imageUrl: string;
}
