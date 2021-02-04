import React from 'react';
import { Test, TestStatus } from '../../Types/Test';
import TextUtils from '../../Utils/text.utils';
import { Card, TextBold } from './TestItem.styles';

interface TestComponentProps {
  test: Test;
}

const TestItem: React.FC<TestComponentProps> = ({
  test
}: TestComponentProps) => {
  const textColor = test.status === TestStatus.Passed? 'green': test.status === TestStatus.Failed ? 'red': 'white';
  return (
    <Card>
      <h3>
        {Number(test.id) + 1}:{' '}
        {TextUtils.capitalizeFirstLetter(test.description)}
      </h3>
      <br />
      <p>
        Status: 
      </p>
      <TextBold color={textColor}>{test.status}</TextBold>
    </Card>
  );
};

export { TestItem };
