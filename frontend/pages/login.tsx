import Typography from "@/lib/typography/typography.component";
import Input from "@/lib/input/input";
import { useEffect, useState } from "react";
import { useLoginMutation } from "@/store/api/apiSlice";
import Link from "next/link";
import PasswordInputComponent from "@/lib/input/PasswordInput.component";
import SuccessLoginPopup from "@/components/auth/SuccessLoginPoup";
import { useRouter } from "next/router";
import useLoginValidator from "@/service/validator/useLoginValidator";
import ValidationHint from "@/lib/validationHint/validationHint.component";
import { ILogin } from "@/interfaces/IAuth";
import AuthLayout from "@/components/auth/AuthLayout";
import { loginByToken } from "@/store/actions/global.actions";

export default function Login() {
  const [login] = useLoginMutation();
  const router = useRouter()
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<ILogin>({
    email: '',
    password: '',
  });

  const validator = useLoginValidator(form);

  useEffect(() => {
    setError('');
  }, [form.email, form.password]);

  const handleLogin = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      login(form).unwrap()
        .then((res) => {
          console.log(res)
          loginByToken({ token: res.token })
          setShowSuccessPopup(true)
        })
        .catch((e) => {
          console.log(e)
          setError('Something went wrong, please try again later')
        });
    }
  }

  return (
    <AuthLayout
      label={'Log In'}
      buttonLabel={'Log In'}
      onClick={handleLogin}
      additionalData={{
        text: 'New to modimal?',
        link: '/register',
        linkText: 'Create an account'
      }}
    >
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
      <Link href={'/forgot-password'}>
        <Typography
          textType={'bodyMD'}
          text={'Forgot your password?'}
          className={'mb-6'}
          color={'primary'}
        />
      </Link>
      <SuccessLoginPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        onAccept={() => router.push('/')}
      />
    </AuthLayout>
  )
}
