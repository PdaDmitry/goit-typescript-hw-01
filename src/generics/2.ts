type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Bottom = Pick<AllType, "position" | "weight">;

function compare<T extends Top, U extends Bottom>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// const topPart: Top = { name: "Alice", color: "blue" };
// const bottomPart: Bottom = { position: 2, weight: 60 };

// const result = compare(topPart, bottomPart);

// console.log(result);
