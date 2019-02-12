import React from "react";
import styles from "./Form.module.scss";
import Input from "../Inptu/Input";
import Button from "../Button/Button";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new twitter account</h2>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
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
);

export default Form;
