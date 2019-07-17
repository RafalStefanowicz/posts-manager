import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import ModalBtns from "../ModalBtns/ModalBtns";
import addPost from "../../actions/addPost";
import {
  StyledLabel,
  StyledInput,
  StyledInputWrapper,
  StyledTextArea,
  StyledForm,
  StyledP,
  StyledErrorWrapper
} from "../../styles/formStyles";

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
    const { submitting, invalid } = this.props;
    return (
      <StyledForm onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field name="title" label="title" component={this.renderInput} />
        <Field name="body" label="body" component={this.renderInput} />
        <ModalBtns
          disabled={submitting || invalid}
          submitting={submitting}
          action="Save"
          rightPosition={true}
        />
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

const mapDispatchToProps = { addPost };
export default connect(
  null,
  mapDispatchToProps
)(AddPostFormWithReduxForm);
