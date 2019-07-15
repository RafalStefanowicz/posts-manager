import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import addComment from "../../actions/addComment";
import hideModal from "../../actions/hideModal";

class AddCommentForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label htmlFor={input.name}>{label}</label>
        {input.name === "body" ? (
          <textarea id={input.name} {...input} />
        ) : (
          <input id={input.name} {...input} />
        )}

        {meta.touched && meta.error && <p>{meta.error}</p>}
      </div>
    );
  };

  handleSubmit = ({ name, body, email }) => {
    const { addComment, postId } = this.props;
    return addComment({ postId, name, body, email });
  };

  render() {
    const { hideModal, submitting, invalid } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="name" label="name" component={this.renderInput} />
        <Field name="email" label="email" component={this.renderInput} />
        <Field name="body" label="body" component={this.renderInput} />
        <button type="button" onClick={hideModal}>
          Cancel
        </button>
        <button type="submit" disabled={submitting || invalid}>
          Save
        </button>
      </form>
    );
  }
}

AddCommentForm.propTypes = { postId: PropTypes.number.isRequired };

const validate = ({ title, body, email }) => {
  const errors = {};
  if (!title) {
    errors.title = "You must enter the title";
  }
  if (!email) {
    errors.body = "You must enter the email";
  }
  if (!body) {
    errors.body = "You must enter some text";
  }
  return errors;
};

const AddCommentFormWithReduxForm = reduxForm({
  form: "addCommentForm",
  validate
})(AddCommentForm);

const mapDispatchToProps = { addComment, hideModal };
export default connect(
  null,
  mapDispatchToProps
)(AddCommentFormWithReduxForm);
