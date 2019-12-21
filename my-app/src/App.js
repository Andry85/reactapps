import * as React from 'react';

type Props = {
  foo: number,
  bar?: string,
  doesNotExist: number,
};


class App extends React.Component<Props> {
  render() {
    this.props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

    return <div>{this.props.bar}</div>;
  }
}


export default App;