export enum Category {
  HEROES = 'HEROES',
  ITEMS = 'ITEMS',
  TERMS = 'TERMS',
  BUILDS = 'BUILDS'
}

export type ItemType = 'Weapon' | 'Vitality' | 'Spirit';

export interface DeadlockEntity {
  name: string;
  description: string;
  tags?: string[];
  stat1?: string; // Used for Complexity (Heroes) or Cost (Items) or Hero (Builds)
  stat2?: string; // Used for Role (Heroes) or Category (Items) or Core Items (Builds)
  tips?: string;
  itemType?: ItemType; // Specific for items styling
  image?: string; // URL for the entity image
}

export interface DataResponse {
  entities: DeadlockEntity[];
}

export type Theme = 'dark' | 'light' | 'glass';
