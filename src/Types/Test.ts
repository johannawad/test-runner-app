export interface Test {
  id?: number;
  description: string;
  status?: TestStatus;
  run(callback: any): void;
}

export enum TestStatus {
  NotStarted = 'Not Started',
  Running = 'Running',
  Passed = 'Passed',
  Failed = 'Failed'
}
