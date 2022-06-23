import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton: React.FC<any> = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/api/auth/logout" })
          }
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() =>
          signIn("cognito", { callbackUrl: `${window.location.origin}` })
        }
      >
        Sign in
      </button>
    </>
  );
};

export default LoginButton;
