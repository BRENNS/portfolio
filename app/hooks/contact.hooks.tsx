import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

emailjs.init("CyG2eekwusXCI2cZ3");

type FormValues = {
  Email: string;
  Name: string;
  Message: string;
};

export function useContact() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [sent, setSent] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    if (e) {
      setIsSubmit(true);
      emailjs
        .sendForm(
          "service_acf3vpf",
          "template_qfy5tjc",
          e.target,
          "CyG2eekwusXCI2cZ3",
        )
        .then(
          () => {
            setSent(true);
            reset();
          },
          (error) => {
            console.log("Error: ", error);
          },
        );
    }
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    sent,
    setIsSubmit,
    isSubmit,
    setSent,
  };
}
