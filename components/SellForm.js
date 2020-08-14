import * as yup from "yup";

import { StyleSheet, Text, TextInput, View } from "react-native";

import FlatButton from "../shared/Button";
import { Formik } from "formik";
import React from "react";
import { globalStyles } from "../styles/global";

const sellingSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required().min(4),
  condition: yup.string().required(),
  price: yup.string().required(),
});

export default function SellForm({ addSellListing }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", description: "", condition: "", price: "" }}
        validationSchema={sellingSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addSellListing(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Listing Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Description"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              onBlur={props.handleBlur("description")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.description && props.errors.description}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Condition"
              onChangeText={props.handleChange("condition")}
              value={props.values.condition}
              onBlur={props.handleBlur("condition")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.condition && props.errors.condition}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Price"
              onChangeText={props.handleChange("price")}
              value={props.values.price}
              onBlur={props.handleBlur("price")}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.price && props.errors.price}
            </Text>
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
