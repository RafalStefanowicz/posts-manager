import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import addComment from "../../actions/addComment";
import hideModal from "../../actions/hideModal";
import {
  StyledLabel,
  StyledInput,
  StyledInputWrapper,
  StyledTextArea,
  StyledButtonsWrapper,
  StyledForm,
  StyledButton,
  StyledP,
  StyledErrorWrapper,
  StyledButtonInner,
  StyledLoadingIconWrapper
} from "../../styles/FormStyles";

class AddCommentForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <>
        <StyledInputWrapper>
          <StyledLabel htmlFor={input.name}>{label}</StyledLabel>
          {input.name === "body" ? (
            <StyledTextArea id={input.name} {...input} />
          ) : (
            <StyledInput id={input.name} {...input} />
          )}
        </StyledInputWrapper>
        <StyledErrorWrapper>
          {meta.touched && meta.error && <StyledP>{meta.error}</StyledP>}
        </StyledErrorWrapper>
      </>
    );
  };

  handleSubmit = ({ name, body, email }) => {
    const { addComment, postId } = this.props;
    return addComment({ postId, name, body, email });
  };

  render() {
    const { hideModal, submitting, invalid } = this.props;
    return (
      <StyledForm onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="name" label="Name" component={this.renderInput} />
        <Field name="email" label="Email" component={this.renderInput} />
        <Field name="body" label="Body" component={this.renderInput} />
        <StyledButtonsWrapper right>
          <StyledButton type="button" onClick={hideModal}>
            Cancel
          </StyledButton>
          <StyledButton type="submit" disabled={submitting || invalid}>
            <StyledButtonInner>
              <StyledLoadingIconWrapper submitting={submitting}>
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              </StyledLoadingIconWrapper>
              Save
            </StyledButtonInner>
          </StyledButton>
        </StyledButtonsWrapper>
      </StyledForm>
    );
  }
}

AddCommentForm.propTypes = { postId: PropTypes.number.isRequired };

const validate = ({ name, body, email }) => {
  const errors = {};
  if (!name) {
    errors.name = "You must enter the name";
  }
  if (!email) {
    errors.email = "You must enter the email";
  } else if (!email.includes("@")) {
    errors.email = "The email must include @";
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
