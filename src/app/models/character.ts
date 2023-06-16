export interface CharacterModel {
  id: number;
  name: string;
  series: {
    items: [{ name: string }];
  };
  events: {
    items: [{ name: string }];
  };
  stories: {
    items: [{ name: string; resourceURI: string }];
  };
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface GetCharacterReturnType {
  data: {
    results: CharacterModel[];
    offset: number;
    total: number;
  };
}
