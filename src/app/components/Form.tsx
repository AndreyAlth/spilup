import React, { ReactNode } from "react";
/* import { Root, Field, Label, Control, Message, Submit , FormFieldProps } from "@radix-ui/react-form"; */
import * as Form from '@radix-ui/react-form'

interface Props {
    children: ReactNode
}

interface PropsField extends Props {
    name: Form.FormFieldProps["name"]
}

interface PropsMessage extends Props {
    match: Form.FormMessageProps["match"]
}

export const FormRoot = ({ children }:Props) => {
  return <Form.Root className="FormRoot">{children}</Form.Root>;
};

export const FormField = ({ children, name }:PropsField) => {
  return <Form.Field className="FormField" name={name}>{children}</Form.Field>;
};

export const FormLabel = ({ children }:Props) => {
  return <Form.Label className="FormLabel">{children}</Form.Label>;
};

export const FormControl = ({ children }:Props) => {
  return <Form.Control asChild>{children}</Form.Control>;
};

export const FormMessage = ({ children, match }:PropsMessage) => {
  return <Form.Message className="FormMessage" match={match}>{children}</Form.Message>;
};

export const FormSubmit = ({ children }:Props) => {
  return <Form.Submit asChild>{children}</Form.Submit>;
};
