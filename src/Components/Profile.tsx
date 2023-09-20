import ContactButton from "./ContactButton";

const Profile = () => {
  return (
    <div className="mt-10 md:mt-12">
      <div className="">
        <h1 className="text-3xl font-bold text-negro ">
          Hola, soy Enzo Cámera desde{" "}
          <span className="text-marron">Argentina</span>
        </h1>
      </div>
      <p className="text-md my-6">
        Soy{" "}
        <span className="bg-marron bg-opacity-10 px-1 rounded-lg font-medium">
          Frontend Developer
        </span>
        , entusiasta, optimista y llevo a cabo el desarrollo de ideas y diseños
        a paginas webs. Me encuentro disponible para escuchar nuevos proyectos u
        oportunidades.
      </p>
      <ContactButton />
    </div>
  );
};

export default Profile;
