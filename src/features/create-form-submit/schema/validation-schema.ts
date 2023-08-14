import * as Yup from "yup";

export const getValidationSchema = (withPin: boolean) => {
  let schema = Yup.object().shape({
    eventTitle: Yup.string().required("Title is required"),
    hostName: Yup.string().required("Host name is required"),
    youtubeLink: Yup.string().required("The link to the Youtube broadcast is obligatory"),
    file: Yup.mixed().required("A file is required"),
  });

  if (withPin) {
    const pinSchema = Yup.object().shape({
      pin: Yup.string().required("Pin is required")
        .max(12, "maximum of 12 characters")
        .min(3, "minimum 3 characters"),
    });
    schema = schema.concat(pinSchema);
  }

  return schema;
};