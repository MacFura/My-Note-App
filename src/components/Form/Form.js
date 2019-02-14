import React from "react";
import styles from "./Form.module.scss";
import Input from "../Inptu/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note'
}

class Form extends React.Component {
  state = {
    activeOption: types.twitter
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Add new twitter account</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.submitFn}>
          <input
            id={types.twitter}
          />
          <Input
            name="name"
            label="Name"
            maxLength={30}
          />
          <Input
            name="link"
            label="Twitter Link"
          />
          <Input
            name="image"
            label="Image"
          />
          <Input
            name="description"
            label="Decription"
            tag="textarea"
          />
          <Button>add new item</Button>
        </form>
      </div >
    )
  }
}


export default Form;
