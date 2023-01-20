import React from 'react';
import Greeting from '../src/Greeting';
import { render, fireEvent } from '@testing-library/react-native';

describe('[Greeting] test', () => {
  const onPressMock = jest.fn(); //함수를 직접 호출할 수 없으니 가짜 함수(mock functiton)를 모킹함 (가짜 함수는 일반 자바스크립트 함수와 동일한 방식으로 인자를 넘겨 호출할 수 있음)
  const props = {
    title: 'Hello!',
    onPress: onPressMock,
  };
  test('버튼누름', () => {
    const rendered = render(<Greeting {...props} />);

    for (let i = 0; i < 5; i++) {
      fireEvent(rendered.getByText('Hello!'), 'onPress'); //onPress, onChange, scroll 같이 어떤 이벤트로써 상호작용하는 컴포넌트들을 트리거하는데 사용
    }
    expect(onPressMock).toBeCalledTimes(5); //for문으로 5번 호출됨
    expect(rendered.toJSON().children[0].children[0].children[0]).toEqual(
      'Hello!',
    );
  });
});
