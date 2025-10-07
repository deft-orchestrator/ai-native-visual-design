// Entity: Representasi unik untuk setiap elemen desain
export type Entity = number;

let nextEntityId = 1;

export function createEntity(): Entity {
  return nextEntityId++;
}
