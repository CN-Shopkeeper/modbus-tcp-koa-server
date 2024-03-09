interface IReadResultStatus {
  status: boolean;
  value?: number[] | boolean[];
  msg?: string;
}

interface IWriteResultStatus {
  status: boolean;
  msg?: string;
}

interface IReadResultItem {
  clientId: number;
  results: IReadResultStatus[];
}

interface IWriteResultItem {
  clientId: number;
  results: IWriteResultStatus[];
}

export type {
  IReadResultItem,
  IWriteResultItem,
  IReadResultStatus,
  IWriteResultStatus,
};
