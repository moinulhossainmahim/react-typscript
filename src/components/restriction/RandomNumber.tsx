type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberTypes = PositiveNumber | NegativeNumber | ZeroNumber;
const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberTypes) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
