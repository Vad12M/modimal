import Typography from "@/lib/typography/typography.component";
import Input from "@/lib/input/input";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="flex items-center justify-between h-screen">
      <div className="flex flex-col items-center space-y-6">
        <Typography textType={'heading3'} text={'Login In'}/>
        <Input
          value={form.email}
          placeholder={'Email'}
          onUpdate={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          value={form.password}
          placeholder={'Password'}
          onUpdate={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="border py-4 px-10">
          {'Login'}
        </button>
      </div>
    </div>
  )
}
