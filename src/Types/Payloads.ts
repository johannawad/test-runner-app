import { TestStatus } from './Test';

export interface TestStatusUpdatePayload {
  id: number;
  status: TestStatus;
}
