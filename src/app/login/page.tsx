"use client";

import Image from "next/image";

import LoginForm from "@/components/auth/LoginForm/LoginForm";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { authState } from "@/store/auth";

export default function LoginPage() {
  // TODO : 성공, 에러했을 때의 처리 필요
  const [, setAuthState] = useRecoilState(authState);
  const router = useRouter();
  const onSuccess = (email: string, exp: number) => {
    setAuthState({
      user: { sub: email, exp },
    });
    router.push("/");
  };

  const onError = (err: Error) => {
    console.error("error occured!", err);
    router.refresh();
  };
  return (
    <div className="flex flex-col flex-1 h-full w-full justify-center">
      <div className="flex items-center justify-center w-full gap-[12rem]">
        <div className="flex-1">
          <Image
            src="/images/sally.png"
            alt="sally"
            width={486}
            height={584}
            className="text-white"
          />
        </div>
        <div className="flex-1">
          <LoginForm onSuccess={onSuccess} onError={onError} />
        </div>
      </div>
    </div>
  );
}
