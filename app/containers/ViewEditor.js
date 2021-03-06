import { connect } from 'react-redux';
import ViewEditor from '../components/ViewEditor';

const mapStateToProps = state => ({
  editorState: state.editor.viewEditorState,
  scrollTopKey: state.editor.scrollTopKey || 0,
});

// const mapDispatchToProps = dispatch => ({
//   onChange: editorState => {
//
//   },
// });

export default connect(mapStateToProps)(ViewEditor);
