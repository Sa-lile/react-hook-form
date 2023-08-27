
import { useState} from "react"; 
import { useForm, SubmitHandler } from  "react-hook-form"
import './App.css'
import {validationSchema } from "./assets/utils/validationSchema";
import {zodResolver} from "@hookform/resolvers/zod";

interface LoginForm {
  nom: String;
  prenom : String;
  email: String;
  password: String;
}

function App() {

  const { 
    register, 
    handleSubmit, 
    formState: {errors}
    } = useForm <LoginForm>({ mode: "onChange", resolver: zodResolver(validationSchema)});

  const onSubmit =(data: LoginForm) => {
    console.log(data);
  }

  return (

    <div className="form-container">

      <h1>Login Form</h1>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <label htmlFor="nom">Nom</label>
        <input id = "nom" type="text" {...register("nom")} />
        <p>{errors.nom?.message as React.ReactNode}</p>
        <label htmlFor="Prénom">Prénom</label>
        <input id = "prenom" type="text"  {...register("prenom")} />
        <p>{errors.prenom?.message as React.ReactNode}</p>
        <label htmlFor="email">Email</label>
        <input id = "email" type="email" {...register("email")}/>
        <p>{errors.email?.message as React.ReactNode}</p>

        <label htmlFor="password">Mot de passe</label>
        <input id = "password" type="password" {...register("password")}/>
        <p>{errors.password?.message as React.ReactNode}</p>


        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App
