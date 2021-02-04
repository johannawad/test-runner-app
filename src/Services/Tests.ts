import { updateTestStatusAction } from '../Actions/tests.actions';
import store from '../Store';
import { TestStatusUpdatePayload } from '../Types/Payloads';
import { Test, TestStatus } from '../Types/Test';

class TestsService {
  makeDummyTest = () => {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;

    return (callback: (testPassed: boolean) => any) => {
      window.setTimeout(() => callback(testPassed), delay);
    };
  };

  tests: Test[] = [
    { description: 'uploads go in both directions', run: this.makeDummyTest() },
    {
      description: 'PDFs are adequately waterproof',
      run: this.makeDummyTest()
    },
    {
      description: 'videos are heated to 12,000,000 Kelvin',
      run: this.makeDummyTest()
    },
    {
      description: 'subpixels can go rock climbing',
      run: this.makeDummyTest()
    },
    {
      description: 'images are squarer than traffic cones',
      run: this.makeDummyTest()
    },
    {
      description: 'metaproperties don\'t go too meta',
      run: this.makeDummyTest()
    }
  ];

  runTest = (test: Test) => {
    test.run((hasPassed: any) => {
      const payload: TestStatusUpdatePayload = {
        id: Number(test.id),
        status: hasPassed ? TestStatus.Passed : TestStatus.Failed
      };
      store.dispatch(updateTestStatusAction(payload));
    });
  };

  fetchTests = () => {
    return this.tests;
  };
}

export default new TestsService();
