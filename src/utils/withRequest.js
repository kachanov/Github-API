import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import createRequest from './createRequest';


const defaultOptions = {
  initialValue: null,
  shouldDataUpdate: () => false
};

function withRequest(mapPropsToRequest, options) {
  const { initialValue, ...requestOptions } = Object.assign(
    {},
    defaultOptions,
    options
  );

  return Component => {
    class RequestHOC extends React.Component {
      constructor(props) {
        super(props);
        this.RequestComponent = createRequest(
          typeof initialValue === 'function'
            ? initialValue(initialValue)
            : initialValue,
          mapPropsToRequest,
          requestOptions
        );
      }

      renderRequest = requestProps => (
        <Component {...this.props} {...requestProps} />
      );

      render() {
        return (
          <this.RequestComponent {...this.props} render={this.renderRequest} />
        );
      }
    }

    return hoistNonReactStatics(RequestHOC, Component);
  };
}

export default withRequest;
