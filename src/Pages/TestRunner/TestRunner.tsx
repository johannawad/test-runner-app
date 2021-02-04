import React, { Dispatch } from 'react';
import { TestItem } from '../../Components/TestItem/TestItem';
import { Test, TestStatus } from '../../Types/Test';
import { connect } from 'react-redux';
import { Button, Container } from '../../Styles/general.styles';
import {
  fetchTestsRequestAction,
  runAllAction
} from '../../Actions/tests.actions';

interface TestRunnerComponentProps{
  _fetchTestsRequest?: any,
  _runAllTests?: any,
  loading?: boolean,
  tests?: Test[],
}

class TestRunner extends React.Component<TestRunnerComponentProps> {
  componentDidMount() {
    const { _fetchTestsRequest } = this.props;
    _fetchTestsRequest();
  }

  areTestsCompleted(): boolean {
    if(!this.props.tests) return false;
    const isCompleted = this.props.tests?.every((t)=> t.status == TestStatus.Failed || t.status == TestStatus.Passed);
    return isCompleted;
  }

  handleClick = () => {
    this.props._runAllTests();
  };

  render() {
    const { tests, loading } = this.props;

    return (
      <Container>
        {loading && <p>...loading</p>}
        <h1>Tests Runner 🏃🏽‍♀️</h1>
        {tests &&
          tests.map((test: Test) => (
            <TestItem key={tests.indexOf(test)} test={test} />
          ))}
        {this.areTestsCompleted() && <h2>Tests Completed!</h2>}
        <Button onClick={this.handleClick}>Run tests</Button>
      </Container>
    );
  }
}
const mapStateToProps = (state: any): any => {
  return {
    tests: state.tests.data,
    loading: state.tests.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): any => ({
  _fetchTestsRequest: (): void => dispatch(fetchTestsRequestAction()),
  _runAllTests: (): void => dispatch(runAllAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(TestRunner);
