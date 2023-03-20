import React, { FormEvent, useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters.'}),
    age: z.number({ invalid_type_error: 'Age field is required.'}).min(18, {message: 'Age must be at least 18.'})
});

type FormData = z.infer<typeof schema>; 


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors , isValid }
  } = useForm<FormData>({resolver: zodResolver(schema)});

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
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
          {...register("age", {valueAsNumber: true})}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
