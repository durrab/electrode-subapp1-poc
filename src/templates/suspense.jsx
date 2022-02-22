/* @jsx createElement */

//import { createElement, Require } from 'subapp-server/template'
//import Template from './template'

/*export default (
  <Template>
    <Require
          _id="subapp-web/lib/load"
          _concurrent
          timestamp
          elementId="subapp-vehicle"
          name="Vehicle"
          async
          hydrateServerData
          serverSideRendering
          useStream
        />
  </Template>
)*/



/* @jsx createElement */
import { IndexPage, createElement, Token, Require, RegisterTokenIds, Literal } from 'subapp-server/template'

import { ReserveSpot } from 'subapp-web'
import { tokenHandler } from '@xarc/index-page'

const Template = (props) => (
  <IndexPage DOCTYPE='html'>
    <RegisterTokenIds handler={tokenHandler} />
    <Token _id='INITIALIZE' />
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <ReserveSpot saveId='headEntries' />
        <Token _id='META_TAGS' />
        <Token _id='PAGE_TITLE' />
        <Require _id='subapp-web/lib/init' />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.15/antd.min.css'
          rel='stylesheet'
        />
        <Token _id='UI_CONFIG' />
      {/*  <Token _id='CRITICAL_CSS' />*/}
        <style>
          <Literal file={`${__dirname}/style.css`} />
          <Literal file={`${__dirname}/dist/antd.css`} />
        </style>
      </head>
      <Token _id='HEAD_CLOSED' />
      <body>
        <noscript>
          <h4>JavaScript is Disabled</h4>
          <p>Please enable JavaScript in your browser and reload the page.</p>
        </noscript>
        <div style='position:relative;min-height:100vh'>
        <div style="background: green">
          <Require
            _id="subapp-web/lib/load"
            _concurrent
            timestamp
            elementId="subapp-suspense"
            name="SuspenseDemo"
            async
          />
        </div>
          <Require _id='subapp-web/lib/start' />
        </div>
      </body>
      <Token _id='BODY_CLOSED' />
    </html>
    <Token _id='HTML_CLOSED' />
  </IndexPage>
)

export default Template


