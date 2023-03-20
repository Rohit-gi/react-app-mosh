import React, { FormEvent, useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);
  //   console.log(register('name'));

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {name: '', age: 0};

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) person.name = nameRef.current.value;
  //     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log(person);
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name must be atleast 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   value={person.age}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: event.target.value })
          //   }
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
