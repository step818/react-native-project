import * as yup from "yup";

import { StyleSheet, Text, TextInput, View } from "react-native";

import FlatButton from "../shared/Button";
import { Formik } from "formik";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ProfileForm({ editProfile }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ firstName: "", lastName: "", location: "", bio: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          editProfile(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="First Name"
              onChange={props.handleChange("firstName")}
              value={props.values.firstName}
              onBlur={props.handleBlur("firstName")}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Last Name"
              onChange={props.handleChange("lastName")}
              value={props.values.lastName}
              onBlur={props.handleBlur("lastName")}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Location"
              onChange={props.handleChange("location")}
              value={props.values.location}
              onBlur={props.handleBlur("location")}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Bio"
              onChange={props.handleChange("bio")}
              value={props.values.bio}
              onBlur={props.handleBlur("bio")}
            />
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
