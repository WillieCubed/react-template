
/**
 * A wrapper for the app.
 */
export default function SiteWrapper({
  children,
}: React.PropsWithChildren<Record<never, string>>) {
  return (
    <div id="root">
      <header className="p-4 font-bold text-headline6 bg-primary text-white shadow-md">Project Name</header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
