import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import addPost from "../../actions/addPost";
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

class AddPostForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <>
        <StyledInputWrapper>
          <StyledLabel htmlFor={input.name}>{label}</StyledLabel>
          {input.name === "body" ? (
            <StyledTextArea id={input.name} {...input} rows="3" cols="30" />
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

  handleSubmit = ({ title, body }) => {
    return this.props.addPost(this.props.userId, { title, body });
  };

  render() {
    const { hideModal, submitting, invalid } = this.props;
    return (
      <StyledForm onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="title" label="title" component={this.renderInput} />
        <Field name="body" label="body" component={this.renderInput} />
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
