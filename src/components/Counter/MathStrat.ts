export interface MathStrat {
  label: string;
  calculate: (previousValue: number) => number;
}

const addition1: MathStrat = {
  label: "+1",
  calculate: (previousValue: number) => previousValue + 1,
};
const addition2: MathStrat = {
  label: "+2",
  calculate: (previousValue: number) => previousValue + 2,
};
const multiplication2: MathStrat = {
  label: "x2",
  calculate: (previousValue: number) => previousValue * 2,
};

export const mathStrategies: MathStrat[] = [
  addition1,
  addition2,
  multiplication2,
];

export const mathTextCode: string = `
export interface MathStrat {
  label: string;
  calculate: (previousValue: number) => number;
}

const addition1: MathStrat = {
  label: "+1",
  calculate: (previousValue: number) => previousValue + 1,
};
const addition2: MathStrat = {
  label: "+2",
  calculate: (previousValue: number) => previousValue + 2,
};
const multiplication2: MathStrat = {
  label: "x2",
  calculate: (previousValue: number) => previousValue * 2,
};

export const mathStrategies: MathStrat[] = [
  addition1,
  addition2,
  multiplication2,
];
`;
