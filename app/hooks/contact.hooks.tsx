import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

emailjs.init(process.env.NEXT_PUBLIC_EMAIL_KEY ?? "");

type FormValues = {
  Email: string;
  Name: string;
  Message: string;
};

export function useContact() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [sent, setSent] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data, e) => {
    if (e) {
      setIsSubmit(true);
      setSuccess(null);
      emailjs
        .sendForm(
          "service_acf3vpf",
          "template_qfy5tjc",
          e.target,
          process.env.NEXT_PUBLIC_EMAIL_KEY ?? "",
        )
        .then(
          () => {
            setSent(true);
            setSuccess(true);
            reset();
          },
          (error) => {
            console.log("Error: ", error);
            setSent(true);
            setSuccess(false);
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
    success,
    setSuccess,
  };
}
