const Contact = () => {
  return (
    <section
      className={
        "h-screen w-full flex justify-center items-center px-[10%] pb-[10%]"
      }
    >
      <div className={"w-full h-full bg-slate-50 rounded-xl"}>
        <form>
          <fieldset>
            <input placeholder={"Email"} />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;
