import React, { Dispatch } from "react";
import { TestItem } from "../../Components/TestItem/TestItem";
import { Test, TestStatus } from "../../Types/Test";
import { connect } from "react-redux";
import { Button, Container } from "../../Styles/general.styles";
import {
  fetchTestsRequestAction,
  runAllAction,
} from "../../Actions/tests.actions";

interface TestRunnerComponentProps {
  fetchTestsRequest: () => void;
  runAllTests: () => void;
  loading?: boolean;
  tests?: Test[];
}
const TestRunner = ({
  tests,
  loading,
  runAllTests,
  fetchTestsRequest,
}: TestRunnerComponentProps) => {
  React.useEffect(() => {
    fetchTestsRequest();
  }, [fetchTestsRequest]);

  const areTestsCompleted: boolean = tests
    ? tests.every(
        (t) => t.status === TestStatus.Failed || t.status === TestStatus.Passed
      )
    : false;

  return (
    <Container>
      {loading && <p>...loading</p>}
      <h1>Tests Runner 🏃🏽‍♀️</h1>
      {tests &&
        tests.map((test: Test) => (
          <TestItem key={tests.indexOf(test)} test={test} />
        ))}
      {areTestsCompleted && <h2>Tests Completed!</h2>}
      <Button data-testid="btn-run-tests" onClick={runAllTests}>
        Run tests
      </Button>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tests: state.tests.data,
    loading: state.tests.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchTestsRequest: (): void => dispatch(fetchTestsRequestAction()),
  runAllTests: (): void => dispatch(runAllAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TestRunner);
