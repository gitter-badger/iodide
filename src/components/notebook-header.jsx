import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import PresentationModeToolbar from './toolbar/presentation-mode-toolbar'
import EditorModeToolbar from './toolbar/editor-mode-toolbar'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

export default class NotebookHeader extends React.Component {
  render() {
    return (
      <div className="notebook-header">
        <a id="export-anchor" style={{ display: 'none' }} />
        <MuiThemeProvider theme={theme}>
          <EditorModeToolbar />
        </MuiThemeProvider>
        <PresentationModeToolbar />

      </div>
    )
  }
}
