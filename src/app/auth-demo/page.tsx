import { auth0 } from "@/lib/auth0";

export default async function AuthDemoPage() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main style={{ padding: "2rem", color: "#ffffff" }}>
        <h1>Auth0 Demo</h1>
        <p>Not authenticated.</p>
        <a href="/auth/login?screen_hint=signup">Signup</a>
        <br />
        <a href="/auth/login">Login</a>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", color: "#ffffff" }}>
      <p>Logged in as {session.user.email}</p>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <a href="/auth/logout">Logout</a>
    </main>
  );
}
