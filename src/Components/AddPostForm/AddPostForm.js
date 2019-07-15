import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import addPost from "../../actions/addPost";
import hideModal from "../../actions/hideModal";

class AddPostForm extends React.Component {
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

  handleSubmit = ({ title, body }) => {
    return this.props.addPost(this.props.userId, { title, body });
  };

  render() {
    const { hideModal, submitting, invalid } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="title" label="title" component={this.renderInput} />
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

AddPostForm.propTypes = { userId: PropTypes.number.isRequired };

const validate = ({ title, body }) => {
  const errors = {};
  if (!title) {
    errors.title = "You must enter the title";
  }
  if (!body) {
    errors.body = "You must enter some text";
  }
  return errors;
};

const AddPostFormWithReduxForm = reduxForm({ form: "addPostForm", validate })(
  AddPostForm
);

const mapDispatchToProps = { addPost, hideModal };
export default connect(
  null,
  mapDispatchToProps
)(AddPostFormWithReduxForm);
