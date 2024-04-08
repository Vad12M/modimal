import Input from "@/lib/input/input";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "@/store/api/apiSlice";
import PasswordInputComponent from "@/lib/input/PasswordInput.component";
import { useRouter } from "next/router";
import ValidationHint from "@/lib/validationHint/validationHint.component";
import { IRegister } from "@/interfaces/IAuth";
import AuthLayout from "@/components/auth/AuthLayout";
import useRegisterValidator from "@/service/validator/useRegisterValidator";

export default function Register() {
  const [register] = useRegisterMutation();
  const router = useRouter()
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<IRegister>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const validator = useRegisterValidator(form);

  useEffect(() => {
    setError('');
  }, [form.email, form.password]);

  const handleRegister = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      register(form).unwrap()
        .then(() => router.push('/login'))
        .catch((e) => {
          console.log(e)
          setError('Something went wrong, please try again later')
        });
    }
  }

  return (
    <AuthLayout
      label={'Create Account'}
      buttonLabel={'Register Now'}
      onClick={handleRegister}
      additionalData={{
        text: 'Already Have An Account?',
        link: '/login',
        linkText: 'Log In'
      }}
    >
      <Input
        value={form.firstName}
        placeholder={'First Name'}
        onUpdate={(e) => {
          setForm({ ...form, firstName: e.target.value })
          validator.clear(['firstName'])
        }}
        className={'mb-2 w-[360px]'}
        invalid={validator.isFieldInvalid('firstName')}
      />
      <Input
        value={form.lastName}
        placeholder={'Last Name'}
        onUpdate={(e) => {
          setForm({ ...form, lastName: e.target.value })
          validator.clear(['lastName'])
        }}
        className={'mb-2 w-[360px]'}
        invalid={validator.isFieldInvalid('lastName')}
      />
      <Input
        value={form.email}
        placeholder={'Email'}
        onUpdate={(e) => {
          setForm({ ...form, email: e.target.value })
          validator.clear(['email'])
        }}
        className={'mb-2 w-[360px]'}
        invalid={validator.isFieldInvalid('email')}
      />
      <div>
        <PasswordInputComponent
          value={form.password}
          placeholder={'Password'}
          onUpdate={(e) => {
            setForm({ ...form, password: e.target.value })
            validator.clear(['password'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('password')}
        />
        <ValidationHint validationHint={error}/>
      </div>
    </AuthLayout>
  )
}
