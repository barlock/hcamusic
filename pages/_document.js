import React from 'react';
import PropTypes from 'prop-types';
import Document, { Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = ctx.renderPage(Component => {
      const WrappedComponent = props => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext
    };
  }

  render() {
    const { pageContext } = this.props;
    return (
      <div>
        <style id="jss-server-side">
          {pageContext ? pageContext.sheetsRegistry.toString() : null}
          {flush() || null}}
        </style>
        <Main />
        {process.env.NODE_ENV !== 'production' ? <NextScript /> : null}
      </div>
    );
  }
}

export default MyDocument;
