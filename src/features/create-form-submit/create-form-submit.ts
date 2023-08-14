import * as Yup from "yup";
import { db } from "@/firebase";
import { addDoc, collection } from "@firebase/firestore";
// helpers
import { getValidationSchema } from "@/features/create-form-submit/schema/validation-schema";
// types
import { HandleSubmitParams } from "@/features/create-form-submit/types";
import { handleReset } from "@/features/create-form-submit/helpers/handleReset";

const eventsCollection = collection(db, "events");

async function handleSubmit({
  e, setErrors, setIsSuccess, file, withPin, pin, eventTitle, hostName, youtubeLink, toSave, placeholderLink, externalButton, eventDate, eventTime, data
}: HandleSubmitParams): Promise<void> {
  e.preventDefault();

  try {
    const schema = getValidationSchema(withPin);
    await schema.validate({ eventTitle, hostName, youtubeLink, pin, file }, { abortEarly: false });
    const eventData = {
      email: data?.user?.email,
      createdAt: new Date(),
      file,
      withPin,
      toSave,
      eventTitle,
      hostName,
      youtubeLink,
      placeholderLink,
      externalButton,
      eventDate,
      eventTime,
      ...withPin && { pin }
    };
    setErrors([]);
    const docRef = await addDoc(eventsCollection, eventData);
    if (docRef.id) {
      setIsSuccess(true);
      handleReset();
    }
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors = err.inner.map(error => ({ name: error.path, error: error.message }));
      setErrors(validationErrors);
    }
  }
}

export { handleSubmit };